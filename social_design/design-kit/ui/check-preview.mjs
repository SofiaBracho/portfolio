import { chromium } from '../../../../scripts/node_modules/playwright/index.mjs'
import { pathToFileURL } from 'node:url'
import path from 'node:path'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'})
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}})
 const errors=[];page.on('pageerror',e=>errors.push(e.message))
 await page.goto(pathToFileURL(path.join(import.meta.dirname,'preview.html')).href)
 await page.evaluate(()=>document.fonts.ready)
 assert.equal(await page.locator('#continuity').isVisible(),true)
 assert.equal(await page.locator('.continuity-strip').count(),2)
 for(const row of await page.locator('.continuity-strip').all())assert.equal(await row.locator('img').count(),5)
 await page.locator('#continuity').screenshot({path:path.join(import.meta.dirname,'exports/continuity-review.png')})
 for(const id of ['post1','post2','kit']){
  await page.locator(`[data-view="${id}"]`).click()
  assert.equal(await page.locator('#'+id).isVisible(),true)
  if(id!=='kit')assert.equal(await page.locator('#'+id+' .preview-slide-frame').count(),5)
 }
 assert.equal(await page.locator('img').evaluateAll(images=>images.every(i=>i.complete&&i.naturalWidth>0)),true)
 const cover=await page.locator('#post2 [data-approved-cover="02"]').getAttribute('src')
 const approved=await fs.readFile(path.resolve(import.meta.dirname,'../../grid-polished/carousel-1080x1350/cover-02.png'))
 assert.deepEqual(Buffer.from(cover.split(',')[1],'base64'),approved)
 const cover1=await page.locator('#post1 [data-approved-cover="01"]').getAttribute('src')
 assert.deepEqual(Buffer.from(cover1.split(',')[1],'base64'),await fs.readFile(path.resolve(import.meta.dirname,'cover-01-soft-edge.png')))
 assert.equal(await page.locator('#post1 .post-cover-grade').count(),1)
 for(const post of [1,2])for(let n=1;n<=5;n++){
  const glow=page.locator(`#post${post} #post-${post}-${n} .post-halo`)
  assert.equal(await glow.getAttribute('data-ppt-image'),`halo-${post}-${n}`)
  assert.equal(await glow.locator('img').evaluate(e=>parseFloat(e.style.left)),n===1?0:-(n-1)*1080)
 }
 assert.equal(await page.locator('#post1 #post-1-4 [data-ppt-image^="icon-"]').count(),3)
 assert.equal(await page.locator('#post1 #post-1-4 [data-ppt-rule]').count(),2)
 await page.setViewportSize({width:390,height:844})
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true)
 await page.screenshot({path:path.join(import.meta.dirname,'exports/preview-mobile.png'),fullPage:false})
 await page.locator('[data-view="post1"]').click()
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true)
 const chat=await page.locator('#post1 [data-ppt-image="conversation"]').getAttribute('src')
 assert.ok(chat.startsWith('data:image/png'))
 assert.equal(errors.length,0)
 console.log('PASS: revised cover 01 with edge grading; approved cover 02 exact bytes; slide 4 icons and separators; standalone HTML, five slides per post, 390px without overflow, no script errors.')
}finally{await browser.close()}
