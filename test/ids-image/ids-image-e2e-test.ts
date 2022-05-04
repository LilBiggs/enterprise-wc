const imgSrcExists = '../assets/images/placeholdeer-60x60.png';
const imgSrcNotFound = '../assets/images/non-existant.jpg';
const imageEl = '#e2e-image';
const placeholderEl = '#e2e-placeholder';
const fallbackEl = '#e2e-fallback';

describe('Ids Image e2e Tests', () => {
  const url = 'http://localhost:4444/ids-image';

  beforeAll(async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
  });

  it('should not have errors', async () => {
    await expect(page.title()).resolves.toMatch('IDS Image Component');
  });

  it('should pass Axe accessibility tests', async () => {
    await page.setBypassCSP(true);
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    await (expect(page) as any).toPassAxeTests();
  });

  it('should render placeholder on image error', async () => {
    const hasPlaceholder = await page.$eval(fallbackEl, (el: HTMLElement) => el.shadowRoot?.querySelector('.placeholder'));

    expect(hasPlaceholder).toBeTruthy();
  });

  it('should render placeholder via attribute', async () => {
    const hasPlaceholder = await page.$eval(placeholderEl, (el: HTMLElement) => el.shadowRoot?.querySelector('.placeholder'));

    expect(hasPlaceholder).toBeTruthy();
  });

  it('should change placeholder to src', async () => {
    await page.evaluate((el: string, src: string) => {
      const element = document.querySelector<any>(el);
      element.placeholder = false;
      element.src = src;
    }, placeholderEl, imgSrcExists);

    const hasImage = await page.$eval(placeholderEl, (el: HTMLElement) => el.shadowRoot?.querySelector('img'));

    expect(hasImage).toBeTruthy();
  });

  it('should change image to placeholder', async () => {
    await page.evaluate((el: string) => {
      const element = document.querySelector<any>(el);
      element.placeholder = true;
      element.src = null;
    }, imageEl);

    const hasPlaceholder = await page.$eval(imageEl, (el: HTMLElement) => el.shadowRoot?.querySelector('.placeholder'));

    expect(hasPlaceholder).toBeTruthy();
  });

  it('should render placeholder if src changed and img failed to load', async () => {
    await page.evaluate((el: string, src: string) => {
      const element = document.querySelector<any>(el);
      element.src = src;
    }, fallbackEl, imgSrcNotFound);

    // Image failed to load - placeholder appears
    await page.waitForFunction(() => document.querySelector('#e2e-fallback')?.shadowRoot?.querySelector('.placeholder'));

    const hasPlaceholder = await page.$eval(fallbackEl, (el: HTMLElement) => el.shadowRoot?.querySelector('.placeholder'));

    expect(hasPlaceholder).toBeTruthy();
  });
});