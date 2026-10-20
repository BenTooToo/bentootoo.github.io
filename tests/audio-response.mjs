// Run with Node and Playwright installed; PLAYWRIGHT_MODULE / CHROME_PATH may override them.
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE
  ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch(process.env.CHROME_PATH
  ? { executablePath: process.env.CHROME_PATH, headless: true }
  : { channel: 'msedge', headless: true });
const baseline = execFileSync('git', ['show', 'HEAD:app.js'], { encoding: 'utf8' });
const failures = [];

async function open({ original = false, bridge = true, missingModule = false, reduced = false } = {}) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 }, reducedMotion: reduced ? 'reduce' : 'no-preference' });
  page.on('pageerror', error => failures.push(error.message));
  await page.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.origin !== 'https://bentootoo.com') return route.abort();
    const relative = decodeURIComponent(url.pathname.slice(1)) || 'index.html';
    if (relative.includes('..')) return route.abort();
    if (missingModule && relative.startsWith('assets/audio/')) return route.abort();
    try {
      const body = original && relative === 'app.js' ? baseline : await fs.readFile(path.resolve(relative));
      const ext = path.extname(relative);
      await route.fulfill({ body, contentType: ({ '.js': 'text/javascript', '.html': 'text/html', '.css': 'text/css' })[ext] || 'application/octet-stream' });
    } catch { await route.abort(); }
  });
  await page.addInitScript(({ bridge }) => {
    window.__now = 100;
    performance.now = () => window.__now;
    const nativeRAF = requestAnimationFrame;
    window.requestAnimationFrame = fn => {
      if (fn.name === 'tick') { window.__tick = fn; return 1; }
      return nativeRAF(fn);
    };
    const proto = CanvasRenderingContext2D.prototype;
    const begin = proto.beginPath, move = proto.moveTo, line = proto.lineTo, stroke = proto.stroke;
    proto.beginPath = function () { this.__points = []; return begin.call(this); };
    proto.moveTo = function (x, y) { this.__points?.push([x, y]); return move.call(this, x, y); };
    proto.lineTo = function (x, y) { this.__points?.push([x, y]); return line.call(this, x, y); };
    proto.stroke = function () {
      if (this.canvas.id === 'heroCanvas' && Math.abs(this.lineWidth - 1.7) < 0.00001) window.__ribbons.push(this.__points);
      return stroke.call(this);
    };
    window.__ribbons = [];
    window.__step = count => {
      for (let i = 0; i < count; i++) {
        window.__ribbons = [];
        window.__now += 1000 / 60;
        window.__tick();
      }
      return window.__ribbons;
    };
    let id, sequence = 0;
    window.__send = (level, state) => {
      window.postMessage({ channel: 'bentootoo-audio-bridge-v1', kind: 'data', id,
        message: state ? { type: 'bridge-status', version: 1, state, sequence: sequence++ }
          : { type: 'audio-level', version: 1, level, muted: false, sequence: sequence++ }
      }, location.origin);
    };
    if (bridge) addEventListener('message', event => {
      const data = event.data;
      if (data?.channel !== 'bentootoo-audio-bridge-v1') return;
      if (data.kind === 'discover') window.postMessage({ ...data, kind: 'available' }, location.origin);
      if (data.kind === 'subscribe') { id = data.id; window.__subscribed = true; window.__send(0); }
    });
  }, { bridge });
  await page.goto('https://bentootoo.com/', { waitUntil: 'load' });
  if (bridge && !original && !missingModule && !reduced) await page.waitForFunction(() => window.__subscribed);
  return page;
}

async function send(page, level, state) {
  await page.evaluate(({ level, state }) => new Promise(resolve => {
    window.__send(level, state);
    setTimeout(resolve, 0);
  }), { level, state });
}
const step = (page, count) => page.evaluate(count => window.__step(count), count);
const compare = async (a, b, count) => {
  const actual = await step(a, count), expected = await step(b, count);
  assert.equal(actual.length, 3, 'must inspect all three ribbons');
  assert.deepEqual(actual, expected, 'silent ribbon coordinates must equal the original animation');
};

try {
  const original = await open({ original: true });
  const current = await open();
  await compare(current, original, 60);
  await send(current, 0.8);
  const active = await step(current, 60), reference = await step(original, 60);
  assert.notDeepEqual(active, reference, 'audio must change the ribbons');
  active.forEach((ribbon, i) => ribbon.forEach(([x, y], j) => {
    assert.equal(x, reference[i][j][0], 'horizontal position must remain unchanged');
    assert.ok(Math.abs(y - reference[i][j][1]) <= 48.000001, 'added motion must be bounded');
  }));
  for (const state of [null, 'paused', 'device-unavailable']) {
    await send(current, 0.8); await step(current, 45); await step(original, 45);
    await send(current, 0, state); await compare(current, original, 180);
  }
  await send(current, 0.8); await step(current, 45); await step(original, 45);
  await current.evaluate(() => { window.__now += 1500; });
  await current.waitForTimeout(250);
  await compare(current, original, 180);
  // Page cache restoration must establish a fresh subscription and discard old sound.
  await current.evaluate(() => {
    dispatchEvent(new PageTransitionEvent('pagehide', { persisted: true }));
    window.__subscribed = false;
    dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }));
  });
  await current.waitForFunction(() => window.__subscribed);
  await compare(current, original, 60);
  const absent = await open({ bridge: false });
  const absentReference = await open({ original: true });
  await compare(absent, absentReference, 60);
  const broken = await open({ missingModule: true });
  const brokenReference = await open({ original: true });
  await compare(broken, brokenReference, 60);
  const reduced = await open({ reduced: true });
  assert.equal(await reduced.locator('#heroCanvas').evaluate(el => el.style.display), 'none');
  assert.equal(await reduced.evaluate(() => Boolean(window.__subscribed)), false);
  assert.deepEqual(failures, []);
  console.log('PASS: original coordinates, audio response, 48px limit, silence, pause, source loss, timeout, page restoration, no extension, missing module, reduced motion; no page errors.');
} finally { await browser.close(); }
