import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL = process.env.DECK_URL || 'http://localhost:5199/';
const OUT = process.env.OUT || '../pdf-output/melbourne-2026-s2-en.pdf';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'shell',
  args: ['--no-sandbox', '--disable-gpu', '--force-color-profile=srgb'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 2 });
console.log('loading', URL);
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
// wait for webfonts + framer-motion enter animations to settle
await page.evaluate(async () => { await document.fonts.ready; });
await new Promise(r => setTimeout(r, 2500));
await page.emulateMediaType('print');
await new Promise(r => setTimeout(r, 800));
await page.pdf({
  path: OUT,
  preferCSSPageSize: true,   // honor @page { size: 16in 9in }
  printBackground: true,
  timeout: 120000,
});
await browser.close();
console.log('written', OUT);
