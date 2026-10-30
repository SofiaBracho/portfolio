import { chromium } from '../../../../../scripts/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const slides = [
  path.join(root, 'carousel-1080x1350/cover-01.png'),
  ...[2, 3, 4, 5].map(number => path.join(here, `../carousels/01-diseno-codigo-aprendo/slides/slide-${String(number).padStart(2, '0')}.jpg`)),
];
const cards = await Promise.all(slides.map(async (file, index) => {
  const bytes = await fs.readFile(file);
  const mime = file.endsWith('.png') ? 'image/png' : 'image/jpeg';
  return `<figure><img alt="Lámina ${index + 1}" src="data:${mime};base64,${bytes.toString('base64')}"><figcaption>${String(index + 1).padStart(2, '0')} / 05</figcaption></figure>`;
}));
const html = `<!doctype html><html><head><meta charset="utf-8"><style>*{box-sizing:border-box}body{margin:0;background:#05070F;color:#EAF6FF;font:20px Arial;padding:30px}h1{margin:0 0 22px;font-size:26px;letter-spacing:.02em}.grid{display:flex;gap:16px}figure{margin:0;width:270px}img{display:block;width:270px;height:337.5px;object-fit:cover;border:1px solid #253950}figcaption{padding-top:10px;color:#8AA0C8;font-size:15px}</style></head><body><h1>Sofía Bracho · carrusel 01 · vista de conjunto</h1><div class="grid">${cards.join('')}</div></body></html>`;
const target = path.resolve(process.argv[2]);
await fs.mkdir(path.dirname(target), { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
try {
  const page = await browser.newPage({ viewport: { width: 1470, height: 440 }, deviceScaleFactor: 1 });
  await page.setContent(html);
  await page.screenshot({ path: target, type: 'jpeg', quality: 92, fullPage: true });
  console.log(target);
} finally { await browser.close(); }
