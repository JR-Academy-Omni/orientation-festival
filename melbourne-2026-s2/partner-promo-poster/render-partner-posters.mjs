import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
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
let chromeProcess = null;
let chromeProfile = null;
let chromePort = null;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

if (workspaceNodeModules) {
  const playwrightUrl = pathToFileURL(path.join(workspaceNodeModules, 'playwright/index.mjs')).href;
  const { chromium } = await import(playwrightUrl);
  browser = await chromium.launch({ executablePath: chrome, headless: true });
} else {
  chromeProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'freshers-poster-chrome-'));
  chromeProcess = spawn(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--disable-extensions',
    '--disable-background-networking',
    '--hide-scrollbars',
    '--no-first-run',
    '--allow-file-access-from-files',
    '--remote-debugging-port=0',
    `--user-data-dir=${chromeProfile}`,
    'about:blank',
  ], { stdio: 'ignore' });

  const portFile = path.join(chromeProfile, 'DevToolsActivePort');
  for (let attempt = 0; attempt < 100 && !fs.existsSync(portFile); attempt += 1) {
    await delay(100);
  }
  if (!fs.existsSync(portFile)) {
    throw new Error('Chrome DevTools port was not created');
  }
  chromePort = fs.readFileSync(portFile, 'utf8').split(/\r?\n/)[0];
}

let cdpTarget = null;
let cdpSocket = null;
let cdpCommandId = 0;
let resolvePageLoaded = null;
const cdpPending = new Map();

const cdpCommand = (method, params = {}) => new Promise((resolve, reject) => {
  cdpCommandId += 1;
  cdpPending.set(cdpCommandId, { resolve, reject });
  cdpSocket.send(JSON.stringify({ id: cdpCommandId, method, params }));
});

const ensureCdpPage = async () => {
  if (cdpSocket) return;
  const targetResponse = await fetch(`http://127.0.0.1:${chromePort}/json/new?about:blank`, { method: 'PUT' });
  cdpTarget = await targetResponse.json();
  cdpSocket = new WebSocket(cdpTarget.webSocketDebuggerUrl);

  await new Promise((resolve, reject) => {
    cdpSocket.addEventListener('open', resolve, { once: true });
    cdpSocket.addEventListener('error', reject, { once: true });
  });

  cdpSocket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && cdpPending.has(message.id)) {
      const { resolve, reject } = cdpPending.get(message.id);
      cdpPending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
    } else if (message.method === 'Page.loadEventFired' && resolvePageLoaded) {
      resolvePageLoaded();
      resolvePageLoaded = null;
    }
  });

  await cdpCommand('Page.enable');
  await cdpCommand('Emulation.setDeviceMetricsOverride', {
    width: 1242,
    height: 1660,
    deviceScaleFactor: 1,
    mobile: false,
  });
};

const renderWithCdp = async (url, output) => {
  await ensureCdpPage();
  const loaded = new Promise((resolve) => { resolvePageLoaded = resolve; });
  await cdpCommand('Page.navigate', { url });
  await Promise.race([
    loaded,
    delay(10_000).then(() => { throw new Error(`Timed out loading ${url}`); }),
  ]);
  const screenshot = await cdpCommand('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: false,
  });
  fs.writeFileSync(output, Buffer.from(screenshot.data, 'base64'));
};

const render = async (url, output) => {
  if (browser) {
    const page = await browser.newPage({ viewport: { width: 1242, height: 1660 } });
    try {
      await page.goto(url, { waitUntil: 'load' });
      await page.screenshot({ path: output });
    } finally {
      await page.close();
    }
  } else {
    await renderWithCdp(url, output);
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

if (!requestedPartner && !requestedMode) {
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
} else if (chromeProcess) {
  if (cdpSocket) cdpSocket.close();
  if (cdpTarget) {
    await fetch(`http://127.0.0.1:${chromePort}/json/close/${cdpTarget.id}`).catch(() => {});
  }
  chromeProcess.kill('SIGTERM');
  await Promise.race([
    new Promise((resolve) => chromeProcess.once('exit', resolve)),
    delay(2_000),
  ]);
  fs.rmSync(chromeProfile, { recursive: true, force: true });
}

process.stdout.write(`rendered ${renderedCount} partner poster(s)${requestedPartner ? ` for ${requestedPartner}` : ' plus the general poster'}\n`);
