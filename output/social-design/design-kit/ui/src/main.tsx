import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AlertCircle, ArrowRight, Check, Code2, LoaderCircle, PanelsTopLeft, Sparkles } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Card } from './components/ui/card'
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert'
import { Badge } from './components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Bubble, BubbleContent } from './components/ui/bubble'
import { Message, MessageAvatar, MessageContent, MessageHeader, MessageFooter } from './components/ui/message'
import { MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem } from './components/ui/message-scroller'
import { Questionnaire, QuestionnaireItem, QuestionnaireTitle, QuestionnaireChoices, QuestionnaireChoice, QuestionnaireInput } from './components/ui/questionnaire'
import './brand.css'

const rootPath='/@fs/C:/Code/portfolio/portfolio/'
const photo=rootPath+'output/social-design/character_sheet/face-front-glasses.png'
const arrow=rootPath+'output/social-design/design-kit/traces/arrow-hand-yellow.svg'
const brandButton=(props:React.ComponentProps<typeof Button>)=><Button {...props} className={'sb-button '+(props.className||'')}/>
const B=brandButton

function Failure({short=false}:{short?:boolean}) {return <Alert className="sb-alert"><AlertCircle/><AlertTitle>No pudimos enviar{short?'lo.':' tu mensaje.'}</AlertTitle><AlertDescription>Lo que escribiste sigue aquí.</AlertDescription></Alert>}
function Profile(){const [saved,setSaved]=useState(false);return <Card className="sb-card sb-stack"><h2>Editar perfil</h2><div className="sb-field"><Label className="sb-label" htmlFor="profile-name">Nombre</Label><Input className="sb-input" id="profile-name" defaultValue="Sofía Bracho" onChange={()=>setSaved(false)}/></div><B onClick={()=>setSaved(true)}>{saved?<><Check/>Cambios guardados</>:'Guardar cambios'}</B><p className="sb-helper" role="status">{saved?'Confirmación de ejemplo. Sin servidor.':'Ejemplo ilustrativo de interfaz.'}</p></Card>}
function Contact({mode='default'}:{mode?:string}){
 const [email,setEmail]=useState(mode==='invalid'||mode==='default'?'ana@':'ana@example.com')
 const [message,setMessage]=useState('Hola, quiero consultar disponibilidad.')
 const [invalid,setInvalid]=useState(mode==='invalid')
 const [retry,setRetry]=useState(mode==='retry'||mode==='summary')
 const [busy,setBusy]=useState(false)
 const minimal=mode==='retry'||mode==='summary'
 function submit(e:React.FormEvent){e.preventDefault();if(!minimal&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){setInvalid(true);return}setInvalid(false);setBusy(true);setTimeout(()=>{setBusy(false);setRetry(true)},500)}
 return <Card className="sb-card"><h2>Enviar mensaje</h2><form noValidate className="sb-stack" onSubmit={submit}>{!minimal&&<div className="sb-field"><Label className="sb-label" htmlFor="contact-email">Correo</Label><Input className="sb-input" id="contact-email" type="email" value={email} onChange={e=>setEmail(e.target.value)} aria-invalid={invalid} aria-describedby={invalid?'email-error':undefined}/>{invalid&&<p id="email-error" className="sb-error"><AlertCircle/>Completa el correo: ana@example.com</p>}</div>}<div className="sb-field"><Label className="sb-label" htmlFor="contact-message">{minimal?'Mensaje conservado':'Mensaje'}</Label><Textarea className="sb-textarea" id="contact-message" rows={2} value={message} onChange={e=>setMessage(e.target.value)}/></div>{retry&&<Failure/>}<B type="submit" disabled={busy}>{busy?<><LoaderCircle className="animate-spin"/>Enviando…</>:retry?'Reintentar envío':'Enviar mensaje'}</B></form></Card>
}
function Conversation(){
 const [choice,setChoice]=useState('')
 return <div className="sb-chat"><MessageScrollerProvider defaultScrollPosition="start" autoScroll={false}><MessageScroller><MessageScrollerViewport aria-label="Conversación de ejemplo"><MessageScrollerContent className="sb-transcript">
  <MessageScrollerItem messageId="sofia-1"><Message className="sb-chat-message"><MessageAvatar><Avatar className="sb-chat-avatar"><AvatarImage src={photo} alt="Avatar de Sofía"/><AvatarFallback>SB</AvatarFallback></Avatar></MessageAvatar><MessageContent><MessageHeader>Sofía Bracho</MessageHeader><Bubble variant="secondary" className="sb-bubble"><BubbleContent>Quiero compartir también las decisiones.</BubbleContent></Bubble></MessageContent></Message></MessageScrollerItem>
  <MessageScrollerItem messageId="sofia-2"><Message className="sb-chat-message sb-followup"><MessageContent><Bubble variant="secondary" className="sb-bubble"><BubbleContent>Los intentos, las correcciones y lo que queda por comprobar.</BubbleContent></Bubble></MessageContent></Message></MessageScrollerItem>
  <MessageScrollerItem messageId="sofia-question"><Message className="sb-chat-message sb-followup"><MessageContent><Bubble variant="secondary" className="sb-bubble sb-question-bubble"><BubbleContent><Questionnaire className="sb-questionnaire" items={[{name:'origin',required:true,prompt:'¿Desde dónde llegas tú?',choices:['Diseño','Código','Ambos'].map(x=>({value:x,label:x})),input:{label:'Otra respuesta',placeholder:'Otra: cuéntame desde dónde…'}}]} onSubmit={e=>e.preventDefault()} onChange={e=>{const v=new FormData(e.currentTarget).get('origin');setChoice(v?String(v):'')}}><QuestionnaireItem name="origin" required><QuestionnaireTitle>¿Desde dónde llegas tú?</QuestionnaireTitle><QuestionnaireChoices>{['Diseño','Código','Ambos'].map(x=><QuestionnaireChoice key={x} value={x}>{x}</QuestionnaireChoice>)}<QuestionnaireInput aria-label="Otra respuesta" placeholder="Otra: cuéntame desde dónde…"/></QuestionnaireChoices></QuestionnaireItem></Questionnaire></BubbleContent></Bubble></MessageContent></Message></MessageScrollerItem>
  <MessageScrollerItem messageId="reader" scrollAnchor><Message align="end" className="sb-chat-message sb-reader"><MessageContent><MessageHeader>Tú</MessageHeader><Bubble variant="outline" className="sb-bubble"><BubbleContent>{choice||<span className="sb-dots" role="status" aria-label="Escribiendo"><i/><i/><i/></span>}</BubbleContent></Bubble></MessageContent></Message></MessageScrollerItem>
 </MessageScrollerContent></MessageScrollerViewport></MessageScroller></MessageScrollerProvider></div>
}
function Compare(){return <div className="sb-compare">{[[PanelsTopLeft,'Diseñar','Cómo se entiende y se usa.'],[Code2,'Construir','Cómo funciona.']].map(([Icon,title,copy]:any)=><Card key={title} className="sb-card"><Icon size={30} color="#22D3EE"/><h2>{title}</h2><p>{copy}</p></Card>)}</div>}
function Buttons(){return <div className="sb-stack"><div className="sb-actions"><B>Guardar cambios</B><B variant="outline">Cancelar</B></div><div className="sb-actions"><B disabled>Guardar cambios</B><B disabled><LoaderCircle/>Guardando…</B></div><Badge className="sb-badge">Ejemplo conceptual</Badge></div>}
function CoverError(){return <Card className="sb-card sb-cover-error"><AlertCircle size={48} color="#FF6B6B"/><h2>Algo salió mal.</h2><p>Tu mensaje sigue aquí.</p><B>Reintentar envío <ArrowRight/></B></Card>}
const assets:Record<string,React.ReactNode>={buttons:<Buttons/>,profile:<Profile/>, 'form-default':<Contact/>, 'form-invalid':<Contact mode="invalid"/>, 'form-retry':<Contact mode="retry"/>, 'form-summary':<Contact mode="summary"/>,conversation:<Conversation/>,compare:<Compare/>, 'cover-error':<CoverError/>}

function Asset({name}:{name:string}){return <main className="export-stage"><div data-export={name} className={'export-object '+(name==='compare'?'wide':name==='conversation'?'compact':'')}>{assets[name]}</div></main>}
function Text({children,x=96,y,w=888,size=38,color='#EAF6FF',face='Space Grotesk',weight=400,line=1.25}:{children:React.ReactNode,x?:number,y:number,w?:number,size?:number,color?:string,face?:string,weight?:number,line?:number}){return <div data-ppt-text style={{position:'absolute',left:x,top:y,width:w,fontFamily:face,fontSize:size,color,fontWeight:weight,lineHeight:line,whiteSpace:'pre-line'}}>{children}</div>}
function Picture({name,x=150,y,w=780}:{name:string,x?:number,y:number,w?:number}){return <img data-ppt-image={name} className="post-ui" src={'/exports/'+name+'.png'} style={{position:'absolute',left:x,top:y,width:w}}/>}
function Glow({n,post}:{n:number,post:number}){return <div className="post-halo" data-ppt-image={`halo-${post}-${n}`} aria-hidden="true"><img src={rootPath+`output/social-design/design-kit/lights/panorama-cyan-0${post}.svg`} alt="" style={{position:'absolute',width:5400,height:1350,maxWidth:'none',left:-(n-1)*1080,top:0}}/></div>}
function Cover({post}:{post:number}){return <section className="post-slide post-cover" id={`post-${post}-1`}><img data-approved-cover={String(post).padStart(2,'0')} alt={`Portada del post 0${post}${post===1?' · órbita y halo completos':''}`} src={rootPath+(post===1?'output/social-design/design-kit/ui/cover-01-soft-edge.png':`output/social-design/grid-polished/carousel-1080x1350/cover-0${post}.png`)} style={{display:'block',width:1080,height:1350}}/>{post===1&&<div className="post-cover-grade" aria-hidden="true"/>}<Glow post={post} n={1}/></section>}
function Slide({n,post,children}:{n:number,post:number,children:React.ReactNode}){return <section className="post-slide" id={`post-${post}-${n}`}><Glow post={post} n={n}/><Text y={96} size={24} color="#8AA0C8" face="Space Mono">SOFÍA BRACHO</Text><Text x={860} y={96} w={140} size={24} color="#22D3EE" face="Space Mono">{String(n).padStart(2,'0')} / 05</Text>{children}<Text y={1220} size={23} color="#8AA0C8" face="Space Mono">{post===1?'DISEÑO + CÓDIGO':'EJEMPLO CONCEPTUAL'}</Text></section>}
function Title({children,y=190,size=88,color='#EAF6FF'}:{children:React.ReactNode,y?:number,size?:number,color?:string}){return <Text y={y} size={size} face="Chakra Petch" weight={700} line={1.05} color={color}>{children}</Text>}
function Post({post}:{post:number}){return <main className="post-pages"><Cover post={post}/>{post===1?<>
 <Slide post={1} n={2}><Title>{'Soy Sofía Bracho.'}</Title><Text y={335} size={48}>{'Product engineer y\ndesarrolladora full stack.'}</Text><Text y={492} color="#8AA0C8">Mi base está en el diseño gráfico.</Text><img data-ppt-image="arrow" src={arrow} style={{position:'absolute',left:750,top:540,width:160,height:180}}/><Picture name="compare" x={96} y={768} w={888}/></Slide>
 <Slide post={1} n={3}><Title size={80}>{'Diseño lo que ves.\nDesarrollo lo que pasa.'}</Title><Text y={410} color="#8AA0C8">{'Una interfaz también es lo que ocurre\ncuando alguien la usa.'}</Text><Picture name="profile" x={150} y={616} w={780}/><Text y={1140} size={34} color="#22D3EE">Al guardar: validar, guardar y confirmar.</Text></Slide>
 <Slide post={1} n={4}><Title y={205} size={69}>{'Aquí compartiré\nlo que voy aprendiendo.'}</Title>{[['interface','Decisiones de interfaz','Estados, mensajes y detalles de uso.'],['code','Código y proceso','Qué construí, qué falló y qué cambié.'],['verify','IA aplicada con criterio','Qué propuso y qué tuve que revisar.']].map(([icon,a,b],i)=><React.Fragment key={a}><img data-ppt-image={'icon-'+icon} alt="" src={rootPath+'output/social-design/design-kit/icons/'+icon+'.svg'} style={{position:'absolute',left:96,top:491+i*188,width:82,height:82}}/><Text x={211} y={491+i*188} w={773} size={43} face="Chakra Petch" weight={700} color={i===2?'#FFCE1F':'#EAF6FF'}>{a}</Text><Text x={211} y={563+i*188} w={773} size={32} color="#8AA0C8">{b}</Text>{i<2&&<div data-ppt-rule style={{position:'absolute',left:211,top:625+i*188,width:773,height:1,background:'rgba(138,160,200,.3)'}}/>}</React.Fragment>)}</Slide>
 <Slide post={1} n={5}><Picture name="conversation" x={96} y={164} w={750}/><Text y={1170} size={28} color="#8AA0C8">Encuesta visual · Te leo en comentarios.</Text></Slide>
 </>:<>
 <Slide post={2} n={2}><Title>{'Alguien ya escribió\ntodo esto.'}</Title><Text y={398} size={36} color="#8AA0C8">Si algo falla, no debería empezar de cero.</Text><Picture name="form-default" x={150} y={500} w={780}/><Text y={1136} size={38}>Lo escrito ya costó tiempo.</Text></Slide>
 <Slide post={2} n={3}><Title size={84}>{'Explica qué\nhay que corregir.'}</Title><Text y={398} size={36} color="#8AA0C8">El error va junto al campo.</Text><Picture name="form-invalid" x={150} y={480} w={780}/><Text y={1154} size={36}>El mensaje sigue ahí.</Text></Slide>
 <Slide post={2} n={4}><Title size={80}>{'Conserva lo escrito.\nPermite reintentar.'}</Title><Text y={398} size={34} color="#8AA0C8">Correo corregido. Esta vez falla el envío.</Text><Picture name="form-retry" x={150} y={500} w={780}/><Text y={1140} size={36}>Una salida, sin empezar de nuevo.</Text></Slide>
 <Slide post={2} n={5}><Title size={84}>{'Que el error\npermita continuar.'}</Title><Text y={398} size={36} color="#8AA0C8">Mensaje y comportamiento van juntos.</Text><Picture name="form-summary" x={170} y={480} w={740}/><Text y={1090} size={34} color="#22D3EE">Explica. Conserva. Ofrece una acción.</Text><Text y={1160} size={36} color="#FFCE1F">Guárdalo para tu próximo formulario.</Text></Slide>
 </>}</main>}
function Catalog(){return <main className="catalog"><h1>UI Kit<br/><span>Pixel to Cloud</span></h1><p>Componentes shadcn/ui con clases de marca. Controles simples, una acción principal y mensajes que permiten continuar. Prueba los campos, el guardado y la encuesta.</p><div className="catalog-grid">{Object.entries(assets).map(([name,node])=><section key={name}><h2>{name}</h2><div className="specimen">{node}</div></section>)}</div><footer>Fuente: shadcn/ui · Tema Sofía Bracho · v1.0 · 14 octubre 2026. Demostración local sin servidor ni envío de datos.</footer></main>}
const params=new URLSearchParams(location.search)
if(params.has('asset'))document.body.style.background='transparent'
createRoot(document.getElementById('root')!).render(params.has('asset')?<Asset name={params.get('asset')!}/>:params.has('post')?<Post post={Number(params.get('post'))}/>:<Catalog/>)
