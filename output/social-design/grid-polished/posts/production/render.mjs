import { chromium } from '../../../../../scripts/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
const here = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(here, 'carousel-interiors.html');
const posts = path.dirname(here);
const files = [
  ...[2, 3, 4, 5].map(n => [`p02-${n}`, path.join(posts, 'carousels/02-interfaz-puede-fallar/slides', `slide-${String(n).padStart(2, '0')}.jpg`)]),
];
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
try {
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  for (const [id, target] of files) {
    await fs.mkdir(path.dirname(target), { recursive: true });
    await page.goto(`file:///${source.replaceAll('\\', '/')}?slide=${id}`);
    await page.evaluate(() => document.fonts.ready);
    await page.locator(`#${id}`).screenshot({ path: target, type: 'jpeg', quality: 90 });
    console.log(`${id}: ${path.relative(posts, target)}`);
  }
} finally { await browser.close(); }
