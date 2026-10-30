"""Vector master for Canva import. Generated previews stay outside the Git repository."""
from pathlib import Path
import sys
import io
import subprocess
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).resolve().parents[6]
OUT = Path(sys.argv[1])
OUT.mkdir(parents=True, exist_ok=True)
for name in ['ChakraBold','ChakraSemi','Grotesk','GroteskSemi','Mono']:
    pdfmetrics.registerFont(TTFont(name, str(ROOT/'tmp/pdfs/fonts'/f'{name}.ttf')))
W,H=1080,1350
BG='#05070F'; WHITE='#EAF6FF'; MUTED='#8AA0C8'; CYAN='#22D3EE'; YELLOW='#FFCE1F'; PANEL='#0E1422'
c=canvas.Canvas(str(OUT/'carousel-01.pdf'),pagesize=(W*.75,H*.75),pageCompression=1)
c.scale(.75,.75)
c.setTitle('Sofía Bracho · Diseño, código y lo que aprendo')
c.setAuthor('Sofía Bracho')

def text(s,x,y,size=40,font='Grotesk',color=WHITE):
    c.setFillColor(HexColor(color));c.setFont(font,size)
    c.drawString(x,H-y-size*.83,s)

def lines(rows,x,y,size=40,font='Grotesk',color=WHITE,leading=None):
    for i,s in enumerate(rows):text(s,x,y+i*(leading or size*1.22),size,font,color)

def line(x,y,x2,y2,color=CYAN,width=2,alpha=1):
    c.saveState();c.setStrokeColor(HexColor(color));c.setStrokeAlpha(alpha);c.setLineWidth(width)
    c.line(x,H-y,x2,H-y2);c.restoreState()

def rect(x,y,w,h,fill=PANEL,stroke=None,width=1):
    c.setFillColor(HexColor(fill));c.setLineWidth(width)
    if stroke:c.setStrokeColor(HexColor(stroke))
    c.rect(x,H-y-h,w,h,fill=1,stroke=bool(stroke))

def panel(x,y,w,h,stroke=CYAN):
    cut=16;p=c.beginPath();p.moveTo(x+cut,H-y)
    for px,py in [(x+w,y),(x+w,y+h-cut),(x+w-cut,y+h),(x,y+h),(x,y+cut)]:p.lineTo(px,H-py)
    p.close();c.setFillColor(HexColor(PANEL));c.setStrokeColor(HexColor(stroke));c.setLineWidth(1.5);c.drawPath(p,fill=1,stroke=1)

def dot(x,y,r=5,color=CYAN):
    c.setFillColor(HexColor(color));c.circle(x,H-y,r,fill=1,stroke=0)

def end_page():
    c.showPage();c.scale(.75,.75)

def svg(relative,x,y,w,h):
    source=ROOT/'output/social-design/design-kit'/relative
    sharp='C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp'
    code="require(process.argv[1])(process.argv[2],{density:144}).resize(Number(process.argv[3]),Number(process.argv[4]),{fit:'fill'}).png().toBuffer().then(b=>process.stdout.write(b))"
    data=subprocess.check_output(['node','-e',code,sharp,str(source),str(round(w*2)),str(round(h*2))])
    c.drawImage(ImageReader(io.BytesIO(data)),x,H-y-h,w,h,mask='auto')

def bubble(x,y,w,h,color=PANEL):
    c.setFillColor(HexColor(color));c.roundRect(x,H-y-h,w,h,20,fill=1,stroke=0)

def route(y,flip=False):
    c.saveState();p=c.beginPath();p.moveTo(-40,H-y)
    p.curveTo(270,H-y-170,600,H-y+190,1130,H-y+35)
    for width,alpha in [(24,.025),(10,.05),(2.2,.7)]:
        c.setStrokeColor(HexColor(CYAN));c.setStrokeAlpha(alpha);c.setLineWidth(width);c.drawPath(p)
    c.restoreState()

def base(n,label,glow=(900,750)):
    rect(0,0,W,H,BG)
    c.saveState();p=c.beginPath();p.rect(0,0,W,H);c.clipPath(p,stroke=0)
    c.radialGradient(glow[0],H-glow[1],650,[HexColor('#10323C'),HexColor(BG)],positions=[0,1])
    c.restoreState()
    text('SOFÍA BRACHO',96,99,25,'Mono',MUTED)
    text(f'{n:02d} / 05',859,99,23,'Mono',CYAN)
    line(96,1187,984,1187,MUTED,1,.3)
    text(label,96,1215,22,'Mono',MUTED)

def icon(kind,x,y):
    svg('icons/'+{'ui':'interface.svg','code':'code.svg','check':'verify.svg'}[kind],x-10,y-10,82,82)

# Approved cover is referenced once, unchanged. It remains raster in Canva.
c.drawImage(str(ROOT/'output/social-design/grid-polished/carousel-1080x1350/cover-01.png'),0,0,W,H)
end_page()

base(2,'DISEÑO + DESARROLLO',glow=(960,865))
text('Soy Sofía',96,207,104,'ChakraBold')
text('Bracho.',96,315,104,'ChakraBold',YELLOW)
lines(['Product engineer y','desarrolladora full stack.'],100,493,46,'GroteskSemi',leading=59)
text('Mi base está en el diseño gráfico.',100,642,36,'Grotesk',MUTED)
# Equal-width cards, 32px gutter. Arrow is a content annotation, not background.
svg('traces/arrow-hand-yellow.svg',745,345,218,360)
panel(96,775,428,337,stroke='#31475C')
panel(556,775,428,337,stroke='#31475C')
icon('ui',140,818);icon('code',600,818)
text('Diseñar',140,921,46,'ChakraSemi')
text('Construir',600,921,46,'ChakraSemi')
lines(['Cómo se entiende','y se usa.'],140,992,33,'Grotesk',MUTED,44)
text('Cómo funciona.',600,992,33,'Grotesk',MUTED)
end_page()

base(3,'DEL PÍXEL AL COMPORTAMIENTO',glow=(160,850))
lines(['Diseño lo que ves.', 'Desarrollo lo que pasa.'],96,205,66,'ChakraBold',leading=79)
lines(['Una interfaz también es lo que ocurre','cuando alguien la usa.'],98,412,37,'Grotesk',MUTED,48)
# Realistic editable interface specimen and direct annotation.
# Reuse canonical inspection-window at its original aspect ratio.
svg('frames/inspection-window.svg',66,551,948,611)
text('PERFIL / EJEMPLO ILUSTRATIVO',257,605,21,'Mono',MUTED)
text('Editar perfil',139,710,43,'ChakraSemi')
text('Nombre',139,798,28,'Grotesk',MUTED)
rect(139,845,483,69,'#0A0E1A','#49617D')
text('Sofía Bracho',162,864,31)
rect(139,970,274,72,YELLOW)
text('Guardar cambios',160,993,27,'GroteskSemi',BG)
line(432,1006,671,1006,CYAN,2)
dot(432,1006,5,YELLOW)
text('Al guardar:',713,792,29,'GroteskSemi',YELLOW)
lines(['validar,','guardar y','confirmar.'],713,853,34,'Grotesk',WHITE,49)
line(671,1006,671,831,CYAN,2)
end_page()

base(4,'NOTAS DE TRABAJO',glow=(1030,800))
lines(['Aquí compartiré', 'lo que voy aprendiendo.'],96,205,69,'ChakraBold',leading=82)
# Editorial topics. Unequal widths and open rules, no repeated card grid.
icon('ui',105,501)
text('Decisiones de interfaz',211,491,43,'ChakraSemi')
text('Estados, mensajes y detalles de uso.',211,551,32,'Grotesk',MUTED)
line(211,625,984,625,MUTED,1,.3)
icon('code',105,686)
text('Código y proceso',211,678,43,'ChakraSemi')
text('Qué construí, qué falló y qué cambié.',211,738,32,'Grotesk',MUTED)
line(211,813,984,813,MUTED,1,.3)
icon('check',105,879)
text('IA aplicada con criterio',211,867,43,'ChakraSemi',YELLOW)
text('Qué propuso y qué tuve que revisar.',211,927,32,'Grotesk',MUTED)
end_page()

base(5,'TE LEO EN LOS COMENTARIOS',glow=(190,960))
# Messaging UI: a visual poll, not a claim of native Instagram interaction.
c.saveState();p=c.beginPath();p.circle(150,H-219,50);c.clipPath(p,stroke=0)
rect(100,169,100,100,'#121A2C')
c.drawImage(str(ROOT/'output/social-design/character_sheet/face-front-glasses.png'),100,H-269,100,100,mask='auto')
c.restoreState()
text('Sofía Bracho',224,175,40,'GroteskSemi')
text('Una conversación para empezar',224,230,26,'Grotesk',MUTED)
line(96,299,984,299,MUTED,1,.25)
bubble(96,337,714,136)
lines(['Quiero compartir también','las decisiones.'],128,365,38,'Grotesk',WHITE,49)
bubble(96,489,785,166)
lines(['Los intentos, las correcciones','y lo que queda por comprobar.'],128,529,36,'Grotesk',WHITE,47)
bubble(96,675,785,443)
text('¿Desde dónde llegas tú?',128,706,39,'GroteskSemi',YELLOW)
text('ELIGE UNA OPCIÓN',128,763,20,'Mono',MUTED)
for y,label in [(823,'Diseño'),(882,'Código'),(941,'Ambos')]:
    c.setStrokeColor(HexColor(CYAN));c.setLineWidth(2);c.circle(143,H-y,12,fill=0,stroke=1)
    text(label,180,y-16,33)
    line(180,y+28,846,y+28,MUTED,1,.17)
# Fourth option, free-text field, remains inside same conversational poll.
c.setStrokeColor(HexColor(CYAN));c.setLineWidth(2);c.circle(143,H-1026,12,fill=0,stroke=1)
text('Otra:',180,1010,30,'GroteskSemi',CYAN)
text('Cuéntame desde dónde…',180,1060,28,'Grotesk',MUTED)
line(180,1098,839,1098,MUTED,1,.45)
# Opposite-side incoming reply/typing indicator from reader.
text('Tú',793,1139,23,'Grotesk',MUTED)
bubble(839,1129,145,44,'#123A44')
for x in [878,909,940]:dot(x,1151,5,CYAN)
c.showPage()
c.save()
print(OUT/'carousel-01.pdf')
