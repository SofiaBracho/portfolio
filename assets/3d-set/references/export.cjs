// Mechanical export only: preserve generated artwork, normalize canvas and sizes.
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = __dirname;
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'generation.json'), 'utf8'));
const pieces = new Set(['trofeo', 'cofre', 'cofre-abierto']);

async function main() {
  fs.mkdirSync(path.join(root, 'originals'), { recursive: true });
  const report = [];
  for (const asset of manifest.assets) {
    const original = path.join(root, 'originals', asset.id + '.png');
    fs.copyFileSync(asset.source, original);
    const { data, info } = await sharp(original).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let left = info.width, top = info.height, right = -1, bottom = -1;
    let transparent = 0;
    for (let y = 0; y < info.height; y++) {
      for (let x = 0; x < info.width; x++) {
        const a = data[(y * info.width + x) * 4 + 3];
        if (a === 0) transparent++;
        if (a > 8) {
          left = Math.min(left, x); top = Math.min(top, y);
          right = Math.max(right, x); bottom = Math.max(bottom, y);
        }
      }
    }
    if (right < left || transparent === 0) throw new Error(asset.id + ': missing object or transparency');
    const crop = { left, top, width: right - left + 1, height: bottom - top + 1 };
    const resized = await sharp(original).extract(crop).resize(819, 819, { fit: 'inside' }).png().toBuffer({ resolveWithObject: true });
    const png = path.join(root, asset.id + '.png');
    await sharp({ create: { width: 1024, height: 1024, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([{ input: resized.data, left: Math.round((1024 - resized.info.width) / 2), top: 901 - resized.info.height }])
      .png().toFile(png);
    const webps = [];
    for (const size of pieces.has(asset.id) ? [48, 96, 144, 256] : [48, 96, 144]) {
      const dir = path.join(root, '..', String(size));
      fs.mkdirSync(dir, { recursive: true });
      const target = path.join(dir, asset.id + '.webp');
      await sharp(png).resize(size, size).webp({ quality: 85, alphaQuality: 100, effort: 6 }).toFile(target);
      webps.push({ size, bytes: fs.statSync(target).size });
    }
    const canonicalSize = pieces.has(asset.id) ? 256 : 48;
    fs.copyFileSync(path.join(root, '..', String(canonicalSize), asset.id + '.webp'), path.join(root, '..', asset.id + '.webp'));
    const meta = await sharp(png).metadata();
    report.push({ id: asset.id, width: meta.width, height: meta.height, alpha: meta.hasAlpha, pngBytes: fs.statSync(png).size, originalDimensions: [info.width, info.height], webps });
  }
  fs.writeFileSync(path.join(root, 'validation.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ pngs: report.length, all1024Rgba: report.every(x => x.width === 1024 && x.height === 1024 && x.alpha), webps: report.reduce((n, x) => n + x.webps.length, 0), totalWebpBytes: report.reduce((n, x) => n + x.webps.reduce((s, y) => s + y.bytes, 0), 0) }));
}
main().catch(e => { console.error(e.message); process.exitCode = 1; });
