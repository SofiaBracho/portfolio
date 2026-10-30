import { chromium } from '../../../../scripts/node_modules/playwright/index.mjs'
import { createServer } from 'vite'
import pptxgen from 'pptxgenjs'
import fs from 'node:fs/promises'
import path from 'node:path'
import assert from 'node:assert/strict'
const here=import.meta.dirname
const out=path.join(here,'exports')
const delivery=JSON.parse(await fs.readFile(path.join(here,'CANVA-DELIVERY.json'),'utf8'))
const pendingCover=delivery.preview_revision?.status==='awaiting_visual_review'
const pendingCorrections=pendingCover||delivery.status==='corrections_drafted_awaiting_approval'
const approvedStatus='Versión aprobada y transferida a Canva. UI renderizada desde shadcn/ui. Guía maestra v1.3 y Brandbook 04 actualizados.'
const currentStatus=pendingCover?'Retoque de portada 01 en revisión: fondo integrado, órbita y halo sin cortes. Canva conserva la versión anterior aprobada.':pendingCorrections?'Luz continua en revisión. Canva pendiente de guardar correcciones y reordenar post 02.':approvedStatus
if(process.argv.includes('--status-only')){
 const preview=path.join(here,'preview.html')
 let html=await fs.readFile(preview,'utf8')
 for(const old of ['Propuesta para evaluar estilo. UI renderizada desde shadcn/ui. Cambios en Canva y guías pendientes de tu revisión.',approvedStatus,'Correcciones preparadas. Borradores de Canva pendientes de aprobación para guardar y reordenar post 02.','Luz continua en revisión. Canva pendiente de guardar correcciones y reordenar post 02.','Retoque de portada 01 en revisión: fondo integrado, órbita y halo sin cortes. Canva conserva la versión anterior aprobada.'])html=html.replace(old,currentStatus)
 for(const old of ['Borrador con UI Kit shadcn','Corrección en revisión con UI Kit shadcn','Versión aprobada con UI Kit shadcn'])html=html.replaceAll(old,pendingCorrections?'Corrección en revisión con UI Kit shadcn':'Versión aprobada con UI Kit shadcn')
 await fs.writeFile(preview,html);console.log('Preview: estado de entrega actualizado.');process.exit(0)
}
await fs.mkdir(out,{recursive:true})
const exportUrl='http://127.0.0.1:5191'
const server=await createServer({root:here,server:{host:'127.0.0.1',port:5191,strictPort:true,hmr:false,watch:{ignored:['**/exports/**','**/preview.html','**/dist/**']}}})
await server.listen()
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'})
const report={assets:[],posts:[],checks:[]}
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:2})
 // Render the glow alone. A screenshot of a decorative element on a slide
 // also captures whatever is painted behind it and must never be used as an asset.
 const glowPage=await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1})
 for(const post of [1,2]){
  const glowSvg=await fs.readFile(path.resolve(here,`../lights/panorama-cyan-0${post}.svg`),'utf8')
  assert.equal(/<(text|foreignObject|image)\b/i.test(glowSvg),false)
  for(let n=1;n<=5;n++){
   await glowPage.setContent(`<html><body style="margin:0;background:transparent;overflow:hidden"><div style="position:absolute;left:${-(n-1)*1080}px;top:0;width:5400px;height:1350px">${glowSvg}</div></body></html>`)
   await glowPage.screenshot({path:path.join(out,`halo-${post}-${n}.png`),omitBackground:true})
  }
 }
 await glowPage.close()
 const htmlSections=[],continuityRows=[]
 async function portableMarkup(){return await page.evaluate(async()=>{const root=document.querySelector('#root').cloneNode(true);for(const img of root.querySelectorAll('img')){const live=[...document.querySelectorAll('img')].find(x=>x.getAttribute('src')===img.getAttribute('src'));if(live){const blob=await (await fetch(live.src)).blob();img.src=await new Promise(resolve=>{const fr=new FileReader();fr.onload=()=>resolve(fr.result);fr.readAsDataURL(blob)})}}return root.innerHTML})}
 const errors=[];page.on('pageerror',e=>errors.push(e.message))
 for(const name of ['buttons','profile','form-default','form-invalid','form-retry','form-summary','conversation','compare','cover-error']){
  await page.goto(exportUrl+'/?asset='+name);await page.evaluate(()=>document.fonts.ready)
  const obj=page.locator('[data-export]');await obj.screenshot({path:path.join(out,name+'.png'),omitBackground:true})
  report.assets.push({name,...await obj.boundingBox()})
 }
 await page.goto(exportUrl+'/?asset=profile')
 await page.getByLabel('Nombre',{exact:true}).fill('Sofía')
 await page.getByRole('button',{name:'Guardar cambios'}).click()
 assert.equal(await page.getByRole('button',{name:'Cambios guardados'}).count(),1)
 assert.equal(await page.getByLabel('Nombre',{exact:true}).inputValue(),'Sofía');report.checks.push('Profile saves in client demo and preserves input')
 await page.goto(exportUrl+'/?asset=form-default')
 await page.getByRole('button',{name:'Enviar mensaje',exact:true}).click()
 assert.equal(await page.getByLabel('Correo',{exact:true}).getAttribute('aria-invalid'),'true')
 const message=await page.getByLabel('Mensaje',{exact:true}).inputValue()
 await page.getByLabel('Correo',{exact:true}).fill('ana@example.com')
 await page.getByRole('button',{name:'Enviar mensaje',exact:true}).click()
 assert.equal(await page.getByRole('button',{name:'Enviando…'}).isDisabled(),true)
 await page.getByRole('button',{name:'Reintentar envío'}).waitFor()
 assert.equal(await page.getByLabel('Mensaje',{exact:true}).inputValue(),message)
 await page.getByRole('button',{name:'Reintentar envío'}).click()
 await page.getByRole('button',{name:'Reintentar envío'}).waitFor()
 assert.equal(await page.getByLabel('Mensaje',{exact:true}).inputValue(),message);report.checks.push('Inline validation, loading disabled, failed submission and retry preserve message')
 await page.goto(exportUrl+'/?asset=conversation');await page.getByRole('radio',{name:'Ambos',exact:true}).check();assert.equal(await page.getByRole('radio',{name:'Ambos',exact:true}).isChecked(),true);await page.getByLabel('Otra respuesta').fill('Producto');assert.equal(await page.getByLabel('Otra respuesta').inputValue(),'Producto');report.checks.push('Questionnaire selects fixed choice and accepts free response')
 await page.goto(exportUrl+'/');await page.evaluate(()=>document.fonts.ready)
 htmlSections.push('<section class="preview-section" id="kit" hidden>'+await portableMarkup()+'</section>')
 await page.screenshot({path:path.join(out,'catalog-desktop.png'),fullPage:true})
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(out,'catalog-mobile.png'),fullPage:true})
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);report.checks.push('Catalog no horizontal overflow at 390px')
 await page.setViewportSize({width:1080,height:1350})
 for(const post of [1,2]){
  await page.goto(exportUrl+'/?post='+post);await page.evaluate(()=>document.fonts.ready)
  const markup=(await portableMarkup()).replace('<section class="post-slide post-cover"','<div class="preview-slide-frame"><section class="post-slide post-cover"')
  const cover=''
  htmlSections.push('<section class="preview-section" id="post'+post+'" hidden><div class="preview-caption"><h1>Post 0'+post+'</h1><p>Borrador con UI Kit shadcn · 1080 × 1350 · Vista a 360 px</p></div><div class="preview-slides">'+cover+markup.replace('<main class="post-pages">','').replace('</main>','').replaceAll('<section class="post-slide"','<div class="preview-slide-frame"><section class="post-slide"').replaceAll('</section>','</section></div>')+'</div></section>')
  const slides=await page.locator('.post-slide').all()
  const deck=new pptxgen();deck.defineLayout({name:'SOCIAL',width:11.25,height:14.0625});deck.layout='SOCIAL';deck.author='Sofía Bracho';deck.title=`${post===1?'01 · Diseño, código y lo que aprendo':'02 · Tu interfaz también puede fallar'} · UI Kit shadcn`
  for(const el of slides){
   const id=await el.getAttribute('id');await el.screenshot({path:path.join(out,id+'.png')})
   // The approved cover is a visual reference in HTML. Its existing Canva layers
   // are reused separately; the PPTX contains interiors only, as for post 01.
   if(await el.locator('[data-approved-cover]').count()){report.posts.push({id,bounds:[],approvedCover:true});continue}
   const data=await el.evaluate(s=>({texts:[...s.querySelectorAll('[data-ppt-text]')].map(e=>{const r=e.getBoundingClientRect(),c=getComputedStyle(e);return {text:e.textContent,x:parseFloat(c.left),y:parseFloat(c.top),w:r.width,h:r.height,size:parseFloat(c.fontSize),face:c.fontFamily.replaceAll('"',''),weight:c.fontWeight,color:c.color,line:parseFloat(c.lineHeight)}}),images:[...s.querySelectorAll('[data-ppt-image]')].map(e=>{const r=e.getBoundingClientRect(),c=getComputedStyle(e);return {name:e.getAttribute('data-ppt-image'),x:parseFloat(c.left),y:parseFloat(c.top),w:r.width,h:r.height}})}))
   const editorial=data.texts.filter(t=>t.y>140&&t.y<1200)
   for(let i=0;i<editorial.length;i++)for(let j=i+1;j<editorial.length;j++){
    const a=editorial[i],b=editorial[j]
    const overlaps=Math.min(a.x+a.w,b.x+b.w)>Math.max(a.x,b.x)&&Math.min(a.y+a.h+10,b.y+b.h+10)>Math.max(a.y,b.y)
    assert.equal(overlaps,false,`${id}: exported text boxes overlap: ${a.text} / ${b.text}`)
   }
   const slide=deck.addSlide();slide.background={color:'05070F'}
   for(const im of data.images){let filename=path.join(out,im.name+'.png');if(im.name==='arrow'){filename=path.resolve(here,'../traces/arrow-hand-yellow.svg')}else if(im.name.startsWith('icon-')){filename=path.resolve(here,'../icons/'+im.name.slice(5)+'.svg')}
    slide.addImage({path:filename,x:im.x/96,y:im.y/96,w:im.w/96,h:im.h/96,transparency:im.name.startsWith('halo-')?82:0})
   }
   const rules=await el.locator('[data-ppt-rule]').evaluateAll(es=>es.map(e=>{const s=getComputedStyle(e);return {x:parseFloat(s.left),y:parseFloat(s.top),w:parseFloat(s.width),h:parseFloat(s.height)}}))
   for(const r of rules)slide.addShape(deck.ShapeType.rect,{x:r.x/96,y:r.y/96,w:r.w/96,h:r.h/96,line:{transparency:100},fill:{color:'8AA0C8',transparency:70}})
   for(const t of data.texts){const rgb=t.color.match(/\d+/g).slice(0,3).map(n=>(+n).toString(16).padStart(2,'0')).join('');slide.addText(t.text,{x:t.x/96,y:t.y/96,w:t.w/96,h:(t.h+10)/96,fontFace:t.face,fontSize:t.size*.75,bold:+t.weight>=600,color:rgb,margin:0,breakLine:false,valign:'top',isTextBox:true,lineSpacingMultiple:t.line/t.size,paraSpaceAfter:0})}
   slide.addNotes('Ejemplo conceptual. UI exportada desde componentes oficiales shadcn/ui con tema Pixel to Cloud. Texto editorial e imágenes son elementos independientes.')
   const bounds=await el.evaluate(s=>[...s.querySelectorAll('[data-ppt-text],.post-ui')].map(e=>{const st=getComputedStyle(e);return {text:e.textContent,x:parseFloat(st.left),y:parseFloat(st.top),right:parseFloat(st.left)+e.getBoundingClientRect().width,bottom:parseFloat(st.top)+e.getBoundingClientRect().height}}))
   report.posts.push({id,bounds})
  }
  await deck.writeFile({fileName:path.join(out,`post-${post}-shadcn.pptx`)})
  const frames=[]
  for(let n=1;n<=5;n++)frames.push('<img alt="Post '+post+' · '+n+' / 05" src="data:image/png;base64,'+(await fs.readFile(path.join(out,`post-${post}-${n}.png`))).toString('base64')+'">')
  continuityRows.push('<h2>Post 0'+post+'</h2><div class="continuity-strip">'+frames.join('')+'</div>')
 }
 htmlSections.push('<section class="preview-section continuity" id="continuity"><h1>Un glow continuo por carrusel</h1><p>Portada 01: órbita y halo completos, con fondo degradado al tono de la segunda lámina. La luz panorámica continúa entre las cinco láminas.</p>'+continuityRows.join('')+'</section>')
 const continuityCss='.continuity{padding:24px;max-width:1800px;margin:auto}.continuity h1{font:700 36px "Chakra Petch"}.continuity p{color:#8AA0C8;max-width:70ch}.continuity h2{font:700 22px "Chakra Petch";margin:32px 0 16px}.continuity-strip{display:flex;gap:0;overflow:hidden}.continuity-strip img{display:block;flex:none;width:20%;height:auto;min-width:0}@media(max-width:700px){.continuity{padding:20px}.continuity-strip{overflow-x:auto;scroll-snap-type:x mandatory}.continuity-strip img{width:85%;scroll-snap-align:start}.continuity h1{font-size:28px}}'
 assert.equal(errors.length,0,errors.join('\n'));report.checks.push('No browser runtime errors')
 const dist=path.join(here,'dist/assets');const cssFile=(await fs.readdir(dist)).find(n=>n.endsWith('.css'));let css=await fs.readFile(path.join(dist,cssFile),'utf8');
 for(const file of await fs.readdir(dist)){if(file.endsWith('.ttf')){const b64=(await fs.readFile(path.join(dist,file))).toString('base64');css=css.replaceAll('/assets/'+file,'data:font/ttf;base64,'+b64)}}
 const previewCss='[hidden]{display:none!important}.preview-nav{position:sticky;top:0;z-index:10;display:flex;gap:12px;flex-wrap:wrap;padding:16px 24px;background:#0A0E1A;border-bottom:1px solid #8AA0C8}.preview-nav button{background:#121A2C;color:#EAF6FF;border:1px solid #8AA0C8;padding:10px 18px;border-radius:6px;font:600 16px "Space Grotesk"}.preview-nav button[aria-selected=true]{background:#FFCE1F;color:#05070F;border-color:#FFCE1F}.preview-caption{padding:32px 24px 0;max-width:1200px;margin:auto}.preview-caption h1{font:700 36px "Chakra Petch"}.preview-caption p{color:#8AA0C8}.preview-slides{display:flex;flex-wrap:wrap;gap:24px;max-width:1200px;margin:auto;padding:32px 24px}.preview-slide-frame{width:360px;height:450px;overflow:hidden;border:1px solid #121A2C;flex:none}.preview-slide-frame>.post-slide{transform:scale(.333333);transform-origin:top left}.original-cover{width:360px;height:450px}.preview-note{padding:16px 24px;color:#8AA0C8;font:14px "Space Grotesk";max-width:1200px;margin:auto}@media(max-width:410px){.preview-slides{padding:20px}.preview-slide-frame{width:324px;height:405px}.preview-slide-frame>.post-slide{transform:scale(.3)}.original-cover{width:324px;height:405px}}'
 const html='<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Preview · UI Kit + posts 01 y 02 · Sofía Bracho</title><style>'+css+previewCss+'</style></head><body class="dark"><nav class="preview-nav" aria-label="Vista previa"><button aria-selected="true" data-view="kit">UI Kit</button><button aria-selected="false" data-view="post1">Post 01</button><button aria-selected="false" data-view="post2">Post 02</button></nav><div class="preview-note">Propuesta para evaluar estilo. UI renderizada desde shadcn/ui. Cambios en Canva y guías pendientes de tu revisión.</div>'+htmlSections.join('')+'<script>document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>{document.querySelectorAll(".preview-section").forEach(s=>s.hidden=s.id!==b.dataset.view);document.querySelectorAll("[data-view]").forEach(x=>x.setAttribute("aria-selected",String(x===b)));window.scrollTo(0,0)});document.querySelectorAll("form").forEach(f=>f.onsubmit=e=>e.preventDefault());</script></body></html>'
 const deliveredHtml=html.replace('Propuesta para evaluar estilo. UI renderizada desde shadcn/ui. Cambios en Canva y guías pendientes de tu revisión.',currentStatus).replaceAll('Borrador con UI Kit shadcn',pendingCorrections?'Corrección en revisión con UI Kit shadcn':'Versión aprobada con UI Kit shadcn')
 await fs.writeFile(path.join(here,'preview.html'),deliveredHtml.replace('</style>',continuityCss+'</style>').replace('<button aria-selected="true" data-view="kit">','<button aria-selected="true" data-view="continuity">Continuidad</button><button aria-selected="false" data-view="kit">'))
 await fs.writeFile(path.join(out,'validation.json'),JSON.stringify(report,null,2))
 console.log(JSON.stringify({preview:path.join(here,'preview.html'),assets:report.assets.length,checks:report.checks,slides:report.posts.map(p=>({id:p.id,outside:p.bounds.filter(b=>b.x<90||b.right>1000||b.bottom>1290),uiBottom:p.bounds.filter(b=>!b.text).map(x=>x.bottom)}))},null,2))
}finally{await browser.close();await server.close()}
