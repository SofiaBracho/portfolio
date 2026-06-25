// Assisted demo recorder for the portfolio work cards.
//
// Opens a headed Chromium that records video at a fixed size. YOU perform the
// flow by hand (log in, click through). Press Enter in the terminal to stop;
// the script closes the page, then ffmpeg converts the video to an optimized,
// looping GIF in ../img/projects/.
//
// This is deliberately "assisted manual" — it never needs your credentials and
// never needs to know each app's DOM. You drive; it records and encodes.
//
// Usage:
//   node record-demo.mjs nest
//   node record-demo.mjs piensa
//   node record-demo.mjs nexus
//   node record-demo.mjs nexus --url http://localhost:5173   # override target
//   node record-demo.mjs nest  --width 1000 --height 640     # override size
//
// Requirements: Node 18+, ffmpeg on PATH, and Playwright's Chromium
// (the script auto-installs it on first run if missing).

import { spawn, spawnSync } from 'node:child_process';
import { mkdir, rm, readdir, rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import readline from 'node:readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '..', 'img', 'projects');
const TMP_DIR = resolve(__dirname, '.rec-tmp');

// Per-demo defaults. Edit the URLs/copy here if your routes differ.
const DEMOS = {
  nest: {
    url: 'https://journal.sofiabracho.com',
    hint: 'Touch the plate, type the passphrase, open the book, write an entry, browse the views.',
  },
  piensa: {
    url: 'https://piensa.sofiabracho.com',
    hint: 'Log in as a student, open the live class, show the classroom. (Teacher must have started it.)',
  },
  nexus: {
    url: 'https://nexus.sofiabracho.com',
    hint: 'Log in, start a new diagnosis, let the grounded report render.',
  },
};

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function ensurePlaywrightBrowser() {
  // Best-effort: install Chromium if it's not present yet.
  const probe = spawnSync(process.execPath, [
    '-e',
    "require('playwright').chromium.executablePath()",
  ]);
  if (probe.status !== 0) {
    console.log('Installing Playwright Chromium (first run only)…');
    spawnSync('npx', ['playwright', 'install', 'chromium'], { stdio: 'inherit', shell: true });
  }
}

function hasFfmpeg() {
  const r = spawnSync('ffmpeg', ['-version'], { shell: true });
  return r.status === 0;
}

function waitForEnter(promptText) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((res) => rl.question(promptText, () => { rl.close(); res(); }));
}

// Two-pass palette GIF: looping, ~15fps, capped width. Small + clean.
function toGif(inputWebm, outputGif, width) {
  return new Promise((res, rej) => {
    const vf = `fps=15,scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3`;
    const ff = spawn('ffmpeg', ['-y', '-i', inputWebm, '-vf', vf, '-loop', '0', outputGif], {
      stdio: ['ignore', 'inherit', 'inherit'], shell: true,
    });
    ff.on('close', (code) => (code === 0 ? res() : rej(new Error(`ffmpeg exited ${code}`))));
  });
}

async function main() {
  const which = process.argv[2];
  if (!which || !DEMOS[which]) {
    console.error(`Usage: node record-demo.mjs <nest|piensa|nexus> [--url URL] [--width W] [--height H]`);
    process.exit(1);
  }
  if (!hasFfmpeg()) {
    console.error('ffmpeg not found on PATH. Install it, then re-run.');
    process.exit(1);
  }
  ensurePlaywrightBrowser();
  const { chromium } = await import('playwright');

  const demo = DEMOS[which];
  const url = arg('url', demo.url);
  const width = Number(arg('width', '1000'));
  const height = Number(arg('height', '640'));

  await rm(TMP_DIR, { recursive: true, force: true });
  await mkdir(TMP_DIR, { recursive: true });
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width, height },
    recordVideo: { dir: TMP_DIR, size: { width, height } },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  console.log('\n────────────────────────────────────────────');
  console.log(`Recording: ${which}  →  ${url}  (${width}×${height})`);
  console.log(`Flow: ${demo.hint}`);
  console.log('────────────────────────────────────────────');
  await waitForEnter('\nDo the flow in the browser, then press Enter here to STOP recording…\n');

  // Closing the page+context flushes the .webm to disk.
  await page.close();
  await context.close();
  await browser.close();

  const files = (await readdir(TMP_DIR)).filter((f) => f.endsWith('.webm'));
  if (!files.length) { console.error('No video captured.'); process.exit(1); }
  const webm = join(TMP_DIR, files[0]);
  const gif = join(OUT_DIR, `${which}.gif`);

  console.log(`\nEncoding GIF → ${gif}`);
  await toGif(webm, gif, width);
  await rm(TMP_DIR, { recursive: true, force: true });

  console.log(`\nDone. ${which}.gif written to img/projects/.`);
  console.log('If the file is large, re-run with a smaller --width (e.g. 820) or trim the flow.');
}

main().catch((e) => { console.error(e); process.exit(1); });
