import { chromium } from '../../../../../scripts/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(here, 'carousel-01-v2.html');
const targetDir = path.join(here, '../carousels/01-diseno-codigo-aprendo/slides');
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
try {
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  await page.goto(`file:///${source.replaceAll('\\', '/')}`);
  await page.evaluate(() => document.fonts.ready);
  for (const number of [2, 3, 4, 5]) {
    const name = `slide-${String(number).padStart(2, '0')}.jpg`;
    await page.locator(`#slide-${String(number).padStart(2, '0')}`).screenshot({ path: path.join(targetDir, name), type: 'jpeg', quality: 93 });
    console.log(name);
  }
} finally {
  await browser.close();
}
