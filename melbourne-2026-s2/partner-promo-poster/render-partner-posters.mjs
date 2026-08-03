import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const indexUrl = pathToFileURL(path.join(root, 'index.html')).href;
const dataSource = fs.readFileSync(path.join(root, 'partner-data.js'), 'utf8');
const context = { window: {} };
vm.runInNewContext(dataSource, context);

const variantsDir = path.join(root, 'variants');
const workspaceNodeModules = process.env.CODEX_WORKSPACE_NODE_MODULES;
let browser = null;

if (workspaceNodeModules) {
  const playwrightUrl = pathToFileURL(path.join(workspaceNodeModules, 'playwright/index.mjs')).href;
  const { chromium } = await import(playwrightUrl);
  browser = await chromium.launch({ executablePath: chrome, headless: true });
}

const render = async (url, output) => {
  const previousMtime = fs.existsSync(output) ? fs.statSync(output).mtimeMs : 0;
  if (browser) {
    const page = await browser.newPage({ viewport: { width: 1242, height: 1660 } });
    try {
      await page.goto(url, { waitUntil: 'load' });
      await page.screenshot({ path: output });
    } finally {
      await page.close();
    }
  } else {
    try {
      execFileSync(chrome, [
        '--headless=new',
        '--disable-gpu',
        '--disable-extensions',
        '--disable-background-networking',
        '--hide-scrollbars',
        '--no-first-run',
        '--allow-file-access-from-files',
        '--window-size=1242,1660',
        '--force-device-scale-factor=1',
        `--screenshot=${output}`,
        url,
      ], { stdio: 'ignore', timeout: 30_000 });
    } catch (error) {
      const outputWasWritten = fs.existsSync(output) && fs.statSync(output).mtimeMs > previousMtime;
      if (error.code !== 'ETIMEDOUT' || !outputWasWritten) {
        throw error;
      }
    }
  }

  const png = fs.readFileSync(output);
  const width = png.readUInt32BE(16);
  const height = png.readUInt32BE(20);
  if (width !== 1242 || height !== 1660) {
    throw new Error(`Unexpected output dimensions for ${output}: ${width}x${height}`);
  }
};

const partnerFlagIndex = process.argv.indexOf('--partner');
const requestedPartner = partnerFlagIndex >= 0 ? process.argv[partnerFlagIndex + 1] : null;
const modeFlagIndex = process.argv.indexOf('--mode');
const requestedMode = modeFlagIndex >= 0 ? process.argv[modeFlagIndex + 1] : null;
const supportedModes = ['logo', 'gifts'];
const partners = requestedPartner
  ? context.window.PARTNERS.filter((partner) => partner.slug === requestedPartner)
  : context.window.PARTNERS;

if (requestedPartner && partners.length === 0) {
  throw new Error(`Unknown partner slug: ${requestedPartner}`);
}

if (requestedMode && !supportedModes.includes(requestedMode)) {
  throw new Error(`Unsupported mode: ${requestedMode}. Use logo or gifts.`);
}

if (!requestedPartner) {
  await render(indexUrl, path.join(root, 'melbourne-2026-s2-partner-promo.png'));
}

const modes = requestedMode ? [requestedMode] : supportedModes;
let renderedCount = 0;

for (const mode of modes) {
  const modeDir = path.join(variantsDir, mode === 'logo' ? 'logo-only' : 'gifts');
  fs.mkdirSync(modeDir, { recursive: true });

  for (const partner of partners) {
    const hasBenefits = Boolean(partner.prizes?.length || partner.onsiteGift);
    if (mode === 'gifts' && !hasBenefits) {
      if (requestedPartner) {
        throw new Error(`${partner.slug} has no verified prize or onsite gift data. Use --mode logo or add source-backed benefits data.`);
      }
      continue;
    }

    const suffix = mode === 'logo' ? 'logo' : 'gifts';
    const output = path.join(modeDir, `melbourne-2026-s2-${partner.slug}-${suffix}.png`);
    const url = `${indexUrl}?partner=${encodeURIComponent(partner.slug)}&mode=${mode}`;
    await render(url, output);
    renderedCount += 1;
    process.stdout.write(`rendered ${partner.slug} ${mode} -> ${path.relative(root, output)}\n`);
  }
}

if (browser) {
  await browser.close();
}

process.stdout.write(`rendered ${renderedCount} partner poster(s)${requestedPartner ? ` for ${requestedPartner}` : ' plus the general poster'}\n`);
