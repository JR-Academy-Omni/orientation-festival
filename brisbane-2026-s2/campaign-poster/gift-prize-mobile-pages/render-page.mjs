import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('/Users/lightman/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const directory = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });

const waitForAssets = async () => page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map((image) => image.complete
    ? Promise.resolve()
    : new Promise((resolve, reject) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', reject, { once: true });
      })));
});

for (let pageNumber = 1; pageNumber <= 9; pageNumber += 1) {
  const fileName = pageNumber === 1
    ? 'page-01.html'
    : pageNumber === 9
      ? 'page-09.html'
      : 'page-series.html';
  const url = new URL(pathToFileURL(path.join(directory, fileName)).href);
  if (pageNumber > 1 && pageNumber < 9) url.searchParams.set('page', String(pageNumber));
  await page.goto(url.href, { waitUntil: 'networkidle' });
  await waitForAssets();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: path.join(directory, `page-${String(pageNumber).padStart(2, '0')}.png`),
    type: 'png',
    fullPage: false,
  });
}

await browser.close();
