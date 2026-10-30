import { chromium } from '../../../scripts/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const here = path.dirname(fileURLToPath(import.meta.url));
const target = path.resolve(process.argv[2]);
await fs.mkdir(path.dirname(target), { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
  await page.goto(`file:///${path.join(here, 'catalog.html').replaceAll('\\', '/')}`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: target, type: 'jpeg', quality: 92, fullPage: true });
  console.log(target);
} finally { await browser.close(); }
