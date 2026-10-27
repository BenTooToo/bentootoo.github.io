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
  await page.goto('https://bentootoo.com/projects.html');
  const expected = await page.evaluate(() => projectLibraryData.filter(p => p.cover).map(p => p.id));
  const ids = () => page.locator('.archive-card').evaluateAll(cards => cards.map(c => c.dataset.projectId));
  assert.deepEqual(await ids(), expected, 'default only projects with previews');
  const all = await page.evaluate(() => projectLibraryData.map(p => p.id));
  await page.locator('#showUnpreviewedProjects').check();
  assert.deepEqual(await ids(), all, 'toggle reveals all projects');
  await page.locator('[data-filter="tool"]').click();
  assert((await ids()).includes('token-master'));
  await page.locator('#showUnpreviewedProjects').uncheck();
  assert(!(await ids()).includes('token-master'));
  await page.locator('[data-filter="game"]').click();
  assert(!(await ids()).includes('deathgpt'));
  await page.locator('#showUnpreviewedProjects').check();
  assert((await ids()).includes('deathgpt'));
  await page.locator('[data-filter-group="progress"][data-filter-value="development"]').click();
  assert(!(await ids()).includes('deathgpt'), 'progress filtering still applies');
  await page.locator('.game-filter-close').click();
  for (const lang of ['zh', 'en', 'fr']) {
    await page.locator(`.site-header [data-lang="${lang}"]`).click();
    await page.waitForTimeout(60);
    assert((await page.locator('.archive-preview-toggle').innerText()).trim());
    assert(await page.locator('#showUnpreviewedProjects').isChecked(), 'language preserves toggle');
  }
  await page.goto('about:blank');
  await page.goto('https://bentootoo.com/projects.html#deathgpt');
  await page.waitForURL(url => url.pathname === '/project.html' && url.searchParams.get('project') === 'deathgpt');
  assert.equal(await page.locator('#projectDialogTitle').innerText(), 'deathGPT');
  assert.equal(await page.locator('#projectDialogCover').isVisible(), false, 'no placeholder');
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    for (const theme of ['refined', 'yearbook', 'pancake', 'be-present']) {
      await page.locator(`[data-home-theme-value="${theme}"]`).click();
      for (const lang of ['zh', 'en', 'fr']) {
        await page.locator(`.site-header [data-lang="${lang}"]`).click();
        await page.goto('https://bentootoo.com/project.html?project=rewind-rush');
        const layout = await page.evaluate(() => {
          const rect = s => document.querySelector(s).getBoundingClientRect();
          return { header: rect('.site-header').bottom, title: rect('#projectDialogTitle').top,
            intro: rect('#projectDialogDescription').bottom, preview: rect('#projectDialogCover').top,
            overflow: document.documentElement.scrollWidth > innerWidth };
        });
        assert(layout.title > layout.header, JSON.stringify(layout));
        assert(layout.preview > layout.intro, 'preview follows introduction');
        assert(!layout.overflow, 'no horizontal overflow');
        assert(await page.locator('#projectDialogLink').getAttribute('href'));
        await page.locator('#projectUpdatesToggle').click();
        assert(await page.locator('#projectHistory').isVisible());
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
        await page.waitForTimeout(300);
      }
    }
  }
  await page.goto('https://bentootoo.com/project.html?project=missing');
  assert(await page.locator('#projectNotFound').isVisible());
  assert.equal(await page.locator('.project-page-shell').isVisible(), false);
  if (process.env.SCREENSHOT_DIR) {
    await fs.mkdir(process.env.SCREENSHOT_DIR, { recursive: true });
    await page.evaluate(() => {
      localStorage.setItem('bentootoo-home-theme', 'refined');
      localStorage.setItem('bentootoo-language', 'zh');
    });
    for (const [name, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
      await page.setViewportSize(viewport);
      await page.goto('https://bentootoo.com/project.html?project=rewind-rush');
      await page.waitForTimeout(350);
      await page.screenshot({ path: path.join(process.env.SCREENSHOT_DIR, `${name}.png`) });
    }
  }
  assert.deepEqual(errors, []);
  console.log('Default visibility, toggle, category/progress filters, legacy links, direct unpublished details, missing projects and 24 responsive theme/language layouts passed.');
} finally {
  await browser.close();
}
