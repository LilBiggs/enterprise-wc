import percySnapshot from '@percy/puppeteer';

describe('Ids Breadcrumb Percy Tests', () => {
  const url = 'http://localhost:4444/ids-breadcrumb/example.html';

  it('should not have visual regressions in new light theme (percy)', async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    await percySnapshot(page, 'ids-breadcrumb-new-light');
  });

  it('should not have visual regressions with standalone css focus state', async () => {
    await page.goto('http://localhost:4444/ids-breadcrumb/standalone-css.html', { waitUntil: ['networkidle2', 'load'] });
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await percySnapshot(page, 'ids-breadcrumb-standalone-css', { widths: [1280] });
  });

  it('should not have visual regressions in new dark theme (percy)', async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    await page.evaluate(() => {
      document.querySelector('ids-theme-switcher')?.setAttribute('mode', 'dark');
    });
    await percySnapshot(page, 'ids-breadcrumb-new-dark');
  });

  it('should not have visual regressions in new contrast theme (percy)', async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    await page.evaluate(() => {
      document.querySelector('ids-theme-switcher')?.setAttribute('mode', 'contrast');
    });
    await percySnapshot(page, 'ids-breadcrumb-new-contrast');
  });
});
