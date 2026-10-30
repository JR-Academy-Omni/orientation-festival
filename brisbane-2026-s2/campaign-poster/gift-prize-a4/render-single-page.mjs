import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('/Users/lightman/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const directory = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(directory, 'single-page.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map((image) => image.complete ? Promise.resolve() : new Promise((resolve, reject) => {
    image.addEventListener('load', resolve, { once: true });
    image.addEventListener('error', reject, { once: true });
  })));
});
await page.pdf({ path: path.join(directory, 'brisbane-all-gifts-and-prizes-a4-one-page.pdf'), format: 'A4', landscape: true, printBackground: true, preferCSSPageSize: true, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
await browser.close();
