import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE
  ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
await page.route('**/*', async route => {
  const url = new URL(route.request().url());
  if (url.origin !== 'https://bentootoo.com') return route.abort();
  const relative = decodeURIComponent(url.pathname.slice(1)) || 'index.html';
  if (relative.includes('..')) return route.abort();
  try {
    await route.fulfill({ body: await fs.readFile(path.resolve(relative)), contentType:
      ({ '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.webp': 'image/webp' })[path.extname(relative)] || 'application/octet-stream' });
  } catch { await route.abort(); }
});
try {
  await page.clock.install();
  await page.addInitScript(() => {
    const nativeRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = callback => callback.name === 'tick' ? 0 : nativeRAF(callback);
  });
  await page.goto('https://bentootoo.com/');
  const card = page.locator('.avatar-card');
  const flipped = () => card.getAttribute('aria-pressed');
  await page.waitForTimeout(200);
  await page.clock.runFor(3100);
  assert.equal(await flipped(), 'true', 'first demonstration');
  await page.clock.runFor(2500);
  assert.equal(await flipped(), 'false', 'automatic return');
  await page.clock.runFor(10100);
  assert.equal(await flipped(), 'true', 'demonstration repeats');
  await card.click();
  assert.equal(await flipped(), 'false', 'manual click during demonstration');
  await page.clock.runFor(30000);
  assert.equal(await flipped(), 'false', 'manual click cancels pending timers');
  await page.reload();
  await page.clock.runFor(16000);
  assert.equal(await flipped(), 'false', 'interaction remembered across reload');
  assert.equal(await page.locator('.avatar-card-hint').isVisible(), false);
  await card.focus();
  await page.keyboard.press('Enter');
  assert.equal(await flipped(), 'true', 'keyboard flip');
  await page.keyboard.press('Space');
  assert.equal(await flipped(), 'false', 'keyboard return');
  console.log('Timed demonstration and manual interaction passed.');

  for (const viewport of [{ width: 1440, height: 900 }, { width: 820, height: 1180 }, { width: 390, height: 844 }, { width: 375, height: 667 }]) {
    await page.setViewportSize(viewport);
    for (const theme of ['refined', 'yearbook', 'pancake', 'be-present']) {
      await page.locator(`[data-home-theme-value="${theme}"]`).click();
      for (const language of ['zh', 'en', 'fr']) {
        await page.locator(`.site-header [data-lang="${language}"]`).click();
        const bounds = await page.evaluate(() => {
          const rect = selector => document.querySelector(selector).getBoundingClientRect();
          return { header: rect('.site-header').bottom, title: rect('.hero-copy').top,
            titleBottom: rect('.hero-copy').bottom, hint: rect('.avatar-card-hint').top,
            cardBottom: rect('.avatar-card').bottom, cue: rect('.hero-scroll-cue').top,
            overflow: document.documentElement.scrollWidth > innerWidth };
        });
        assert(bounds.title > bounds.header + 15, JSON.stringify({ viewport, theme, language, bounds }));
        if (viewport.width <= 920) {
          assert(bounds.hint > bounds.titleBottom, JSON.stringify({ viewport, theme, language, bounds }));
          assert(bounds.cardBottom < bounds.cue, JSON.stringify({ viewport, theme, language, bounds }));
        }
        assert(!bounds.overflow, 'no horizontal overflow');
      }
    }
  }
  await page.evaluate(() => localStorage.removeItem('bentootoo-card-interacted'));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await page.clock.runFor(16000);
  assert.equal(await flipped(), 'false', 'reduced motion disables demonstration');
  await card.click();
  assert.equal(await flipped(), 'true', 'manual flip still available with reduced motion');
  if (process.env.SCREENSHOT_DIR) {
    await fs.mkdir(process.env.SCREENSHOT_DIR, { recursive: true });
    await page.evaluate(() => {
      localStorage.removeItem('bentootoo-card-interacted');
      localStorage.setItem('bentootoo-home-theme', 'refined');
      localStorage.setItem('bentootoo-language', 'zh');
    });
    for (const [name, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
      await page.setViewportSize(viewport);
      await page.reload();
      await page.clock.runFor(1000);
      await page.screenshot({ path: path.join(process.env.SCREENSHOT_DIR, `${name}.png`) });
    }
  }
  assert.deepEqual(errors, []);
  console.log('Card demonstration, cancellation, persistence, keyboard, reduced motion and 48 responsive theme/language layouts passed.');
} finally {
  await browser.close();
}
