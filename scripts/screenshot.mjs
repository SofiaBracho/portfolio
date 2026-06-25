// Assisted screenshot grabber for the portfolio work cards.
//
// Opens a headed Chromium; you log in and navigate to the exact screen you want
// (e.g. the new PIENSA student dashboard or a live class). Press Enter to
// capture. Saves to ../img/projects/<name>.<ext>.
//
// Usage:
//   node screenshot.mjs piensa                       # -> img/projects/piensa.jpg
//   node screenshot.mjs piensa --url https://piensa.sofiabracho.com
//   node screenshot.mjs nexus --ext png --width 1440 --height 900
//
// Replaces the legacy device-mockup image for PIENSA with a real new-version shot.

import { spawnSync } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import readline from 'node:readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '..', 'img', 'projects');

const URLS = {
  piensa: 'https://piensa.sofiabracho.com',
  nexus: 'https://nexus.sofiabracho.com',
  nest: 'https://journal.sofiabracho.com',
};

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}
function waitForEnter(p) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((res) => rl.question(p, () => { rl.close(); res(); }));
}
function ensureBrowser() {
  const probe = spawnSync(process.execPath, ['-e', "require('playwright').chromium.executablePath()"]);
  if (probe.status !== 0) spawnSync('npx', ['playwright', 'install', 'chromium'], { stdio: 'inherit', shell: true });
}

async function main() {
  const which = process.argv[2] || 'piensa';
  const url = arg('url', URLS[which] || URLS.piensa);
  const ext = arg('ext', 'jpg');
  const width = Number(arg('width', '1440'));
  const height = Number(arg('height', '900'));
  ensureBrowser();
  const { chromium } = await import('playwright');
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 2 });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  console.log(`\nNavigate to the screen you want for "${which}" (log in if needed).`);
  await waitForEnter('Press Enter to CAPTURE…\n');

  const out = join(OUT_DIR, `${which}.${ext}`);
  await page.screenshot({ path: out, type: ext === 'jpg' ? 'jpeg' : 'png', quality: ext === 'jpg' ? 88 : undefined });
  await browser.close();
  console.log(`Saved ${out}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
