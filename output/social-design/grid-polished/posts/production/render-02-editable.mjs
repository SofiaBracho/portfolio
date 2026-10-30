import { chromium } from '../../../../../scripts/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
const here=path.dirname(fileURLToPath(import.meta.url));
const out=path.resolve(here,'../carousels/02-interfaz-puede-fallar/editable');
await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
try{
const page=await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});
await page.goto('file:///'+path.join(here,'carousel-02-editable.html').replaceAll('\\','/'));
await page.evaluate(()=>document.fonts.ready);
await page.pdf({path:path.join(out,'interiores-editables.pdf'),printBackground:true,preferCSSPageSize:true});
for(const n of [2,3,4,5]) await page.locator('#slide-0'+n).screenshot({path:path.join(out,'slide-0'+n+'.png')});
console.log(JSON.stringify(await page.evaluate(()=>[...document.querySelectorAll('.slide')].map(s=>({id:s.id,overflow:[...s.querySelectorAll('*')].filter(e=>e.scrollWidth>e.clientWidth+2 && e.clientWidth>0).map(e=>e.className)})))));
console.log(out);
}finally{await browser.close();}
