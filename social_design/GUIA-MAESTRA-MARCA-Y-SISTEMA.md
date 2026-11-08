---
schema: brand-system/v1
brand: "Sofía Bracho"
signature: "SOFÍA BRACHO / DISEÑO + CÓDIGO"
positioning: "Product engineer y desarrolladora full stack con base en diseño gráfico"
service: "Diseño y desarrollo de productos digitales; contenido sobre producto, código e IA aplicada"
audience_primary: "Developers y diseñadores de producto hispanohablantes que construyen proyectos"
audience_secondary: "Estudiantes de producto y tecnología, colegas y posibles colaboradores"
language_default: es
style: "Pixel to Cloud del portafolio: tecnología editorial, precisa y humana"
theme_default: dark
composition:
  layout: asymmetric_hud
  negative_space_min: 0.40
  metadata_required: true
  metadata_size_pt: "8-10"
  frame_shape: chamfer_45_or_open
  frame_stroke_px: "1-2"
  panel_opacity: "0.10-0.20"
  grid_opacity_max: 0.08
colors:
  background: "#05070F"
  background_alt: "#0A0E1A"
  surface: "#0E1422"
  surface_raised: "#121A2C"
  text: "#EAF6FF"
  text_muted: "#8AA0C8"
  accent_cyan: "#22D3EE"
  accent_yellow: "#FFCE1F"
  error: "#FF6B6B"
fonts:
  heading: "Chakra Petch"
  body: "Space Grotesk"
  label: "Space Mono"
ui_kit:
  source: "output/social-design/design-kit/ui/"
  foundation: "shadcn/ui"
  style: "base-nova"
  primitives: "Base UI + @shadcn/react"
  theme: css_variables
  classes: "sb-*"
  control_radius_px: 6
  card_bubble_radius_px: 12
  error_color: "#FF6B6B"
  canva_ui_export: png_transparent
logos:
  dark_background_primary: "img/logo.png"
  light_background_primary: "img/logo-light-split.png"
  light_background_mono: "img/logo-dark.png"
tone_tags: [claro, curioso, cercano, preciso, verificable]
avatar_reference: "3d/avatar_v2.blend"
avatar_final_treatment: "Retoque por inpainting de rostro, gestos, manos y calidad; preservar identidad"
---

# Sofía Bracho — guía maestra de marca y sistema de diseño

**Versión:** 1.3 · 14 de octubre de 2026\
**Uso:** portafolio, contenido profesional y componentes de interfaz.  
**Dirección vigente:** Pixel to Cloud, alineada con los colores y fuentes reales del portafolio. La selección previa de composición «Notas de producto» en `GUIA.md` y `PLAN-FEED-INICIAL.md` queda reemplazada para nuevas piezas por esta decisión. Esos archivos siguen siendo referencia temática y de producción, no autoridad visual cuando discrepen de esta guía.

> **En una frase:** de píxel a nube, explicar decisiones de diseño, código y producto con ejemplos que se puedan comprobar.

---

## 1. Visión y tono

### Misión

Hacer visible cómo Sofía diseña y construye productos digitales: explicar la decisión, mostrar su aplicación y reconocer el límite de lo comprobado. Compartir aprendizajes útiles sobre desarrollo, experiencia de producto e IA aplicada con una voz clara y cercana.

### Posicionamiento y audiencia

| Campo | Definición para humanos | Regla para agentes |
| --- | --- | --- |
| Quién habla | Sofía Bracho, product engineer y desarrolladora full stack con experiencia en diseño gráfico. | Escribir desde experiencia documentada. No ampliar credenciales. |
| Qué ofrece | Criterio y trabajo en diseño y desarrollo de productos digitales; contenido profesional que muestra ese proceso. | No convertir la marca en una agencia, curso o SaaS inexistente. |
| Para quién | Developers y diseñadores de producto hispanohablantes que construyen proyectos. También estudiantes, colegas y posibles colaboradores. | Presuponer interés técnico, explicar la consecuencia humana de cada decisión. |
| Idioma | Español principal; términos técnicos en inglés cuando sean los habituales. | No duplicar automáticamente cada pieza en inglés. |
| Promesa editorial | «Construir mejores productos, entender lo que usamos y compartir lo que aprendemos por el camino». | Tratarla como dirección editorial, no como resultado garantizado. |

### Tres pilares de voz

| Pilar | Definición humana | Palabras y estructuras preferidas | Restricción estricta para IA |
| --- | --- | --- | --- |
| **Claridad útil** | Cada pieza deja una idea aplicable. Explica el problema antes de la solución. | «qué pasó», «por qué», «prueba», «siguiente paso», verbos concretos como «revisa», «conserva», «compara». | Una idea central por pieza. Evitar jerga sin contexto, frases grandilocuentes y titulares que prometen más que el contenido. |
| **Curiosidad con criterio** | Explora herramientas, IA y decisiones técnicas sin fingir certeza. | «probé», «observé», «en este caso», «queda por comprobar», «esto cambió». | Distinguir hecho, experiencia, hipótesis y opinión. Fechar noticias y comprobarlas antes de redactar afirmaciones actuales. |
| **Cercanía profesional** | Habla como alguien que construye junto a otros; admite errores y usa humor situacional. | Primera persona cuando existe experiencia propia; segunda persona para pasos prácticos; preguntas específicas al cierre. | Evitar superioridad, ridiculizar usuarios o colegas, fórmulas de engagement y entusiasmo artificial. |

### Patrón de redacción

**Problema concreto → decisión o prueba → efecto observado o límite → siguiente paso útil.** Titular breve; cuerpo con ejemplos. Para portada social, preferir 4–8 palabras y una sola idea. Para casos de portafolio, nombrar el problema, la decisión implementada y el resultado que pueda documentarse.

### Biblioteca de pocos ejemplos

| Uso | No aprobado / fuera de marca | Aprobado / en marca | Cambio estructural |
| --- | --- | --- | --- |
| Estado de error | «¡Transforma tu UX con mensajes revolucionarios!» | «Tu interfaz también puede fallar. Explica qué pasó, conserva lo escrito y ofrece un siguiente paso.» | Promesa vaga → problema y tres acciones concretas. |
| IA aplicada | «La IA hace todo el trabajo por ti. Úsala y programa diez veces más rápido.» | «La IA propuso el código. Revisé los estados vacíos y probé el formulario antes de usarlo.» | Resultado inventado → uso realista y verificación. |
| Caso de producto | «Diseñé una experiencia perfecta que aumentó la conversión.» | «En este formulario, hice visible el error junto al campo y mantuve los datos al reintentar. Falta medir el efecto en finalización.» | Superlativo y métrica sin fuente → decisión observable y límite explícito. |

---

## 2. Sistema visual

### Principio de composición: Pixel to Cloud

Fondo oscuro dominante. Titular angular y amplio. Cian para estructura, numeración y líneas de conexión. Amarillo para una llamada principal o un énfasis breve. Elementos técnicos —esquinas, nodos, trayectorias o ventana— explican la idea; no se acumulan como adorno. El brillo aporta atmósfera y nunca sostiene la legibilidad.

La imagen `output/social-design/pixel-to-cloud.png` es referencia de **dirección y composición**. Sus letras rasterizadas, degradados y medidas no prueban valores tipográficos o cromáticos exactos. Para nuevas piezas, prevalecen los tokens del CSS del portafolio.

### Directivas de composición y maquetación · Neon Tech

**Contrato para agentes:** aplicar las cuatro reglas siguientes en cada composición nueva. Mantener al menos el 40 % del lienzo como espacio negativo oscuro libre de texto principal. Distribuir titular, imagen y datos en pesos desiguales; no convertir cada página en una cuadrícula de tarjetas idénticas.

| Regla | Aplicación humana | Restricción verificable para IA |
| --- | --- | --- |
| Asimetría dinámica | Cargar el contenido principal a un lado y equilibrarlo con imagen, metadatos o señal visual al otro. | No centrar todos los elementos ni repetir columnas de idéntico peso. Reservar ≥ 40 % de fondo oscuro libre de texto principal. |
| Metadatos perimetrales | Colocar lecturas monoespaciadas en esquinas o bordes como parte del marco visual. | Incluir al menos dos etiquetas de 8–10 pt, por ejemplo `[TIMESTAMP: 2026.10.13]` y `[STATUS: ACTIVE]`. Usar datos reales cuando la etiqueta parezca factual; si es decorativa, usar nombres de sistema sin fingir mediciones. |
| Marcos angulares editoriales | Usar esquinas recortadas a 45° o marcos abiertos cuando el contenido editorial lo pida. | Esta geometría no se impone a controles UI. Formularios, tarjetas y mensajes usan el kit shadcn: radio de 6 px en controles y 12 px en tarjetas/burbujas, sin glow funcional. |
| HUD funcional | Integrar cruces `+`, corchetes `[ ]`, barra segmentada, diana o porcentaje como acentos de navegación y jerarquía. | Colocarlos en uniones de marcos o márgenes. Nunca competir con el titular ni simular un dato medido inexistente. |
| Retícula técnica | Dibujar líneas o puntos gris oscuro / azul medianoche para alinear contenido. | Opacidad máxima 5–8 %. La cuadrícula queda detrás de textos, imagen y marcos. No convertirla en ruido ni reducir contraste. |

**Orden de construcción:** 1) fijar eje de retícula, 2) colocar titular y protagonista de forma asimétrica, 3) medir espacio negativo, 4) trazar marcos angulares, 5) añadir metadatos y micro-HUD, 6) revisar legibilidad sin efectos. El espacio negativo se mide sobre el lienzo completo y debe permanecer libre de texto principal, aunque pueda contener retícula y microseñales de baja intensidad.

```css
:root {
  --brand-hud-cut: 12px;
  --brand-frame-width: 1px;
  --brand-panel-opacity: 0.16;
  --brand-grid-opacity: 0.06;
  --brand-meta-size: 8pt;
}

.brand-hud-panel {
  padding: 1.25rem;
  background: rgba(14, 20, 34, var(--brand-panel-opacity));
  clip-path: polygon(
    var(--brand-hud-cut) 0, 100% 0,
    100% calc(100% - var(--brand-hud-cut)),
    calc(100% - var(--brand-hud-cut)) 100%,
    0 100%, 0 var(--brand-hud-cut)
  );
}
```

El recorte CSS define la geometría; añadir el trazo de 1–2 px con un SVG o seudoelemento que siga la misma ruta. No usar `border-radius` como sustituto. Los metadatos de 8–10 pt son detalles visuales; información esencial debe seguir la escala de texto legible del producto.

### Tokens de color · tema oscuro

| Color núcleo | Hex / RGBA | Variable semántica | Intención humana |
| --- | --- | --- | --- |
| Noche principal | `#05070F` | `--brand-bg` | Lienzo dominante; crea profundidad sin negro puro. |
| Noche alterna | `#0A0E1A` | `--brand-bg-alt` | Cambia ritmo entre secciones o piezas. |
| Panel | `#0E1422` | `--brand-surface` | Ventanas, módulos y áreas de contenido. |
| Panel elevado | `#121A2C` | `--brand-surface-raised` | Segundo plano de paneles, solo cuando la jerarquía lo pide. |
| Texto principal | `#EAF6FF` | `--brand-text` | Titulares y lectura sobre fondos oscuros. |
| Texto secundario | `#8AA0C8` | `--brand-text-muted` | Metadatos y apoyo; comprobar contraste en cada tamaño final. |
| Cian de sistema | `#22D3EE` | `--brand-accent-cyan` | Números, conexiones, anotaciones y foco técnico. |
| Amarillo de acción | `#FFCE1F` | `--brand-accent-yellow` | Énfasis principal, subrayado o CTA puntual. |
| Rojo de error | `#FF6B6B` | `--brand-error` / `--destructive` | Bordes, iconos y mensajes de error. Siempre acompañado de explicación; no sustituye el amarillo de acción. |
| Línea sutil | `rgba(120, 180, 255, 0.15)` | `--brand-line` | Separadores sobre oscuro; nunca como única señal de estado. |

Estos valores reflejan el tema oscuro de `css/neon.css`. No sustituirlos por los valores aproximados de la propuesta raster «Pixel to Cloud» (`#070A12`, `#FFD21C`, etc.). El portafolio también tiene tema claro; este bloque especifica la dirección **oscura** para piezas nuevas. Si se diseña un componente con tema claro, partir de `html[data-theme="light"]` en `css/neon.css` y validar la combinación final.

```css
:root {
  --brand-bg: #05070F;
  --brand-bg-alt: #0A0E1A;
  --brand-surface: #0E1422;
  --brand-surface-raised: #121A2C;
  --brand-text: #EAF6FF;
  --brand-text-muted: #8AA0C8;
  --brand-accent-cyan: #22D3EE;
  --brand-accent-yellow: #FFCE1F;
  --brand-error: #FF6B6B;
  --brand-line: rgba(120, 180, 255, 0.15);
  --brand-hud-cut: 12px;
  --brand-frame-width: 1px;
  --brand-panel-opacity: 0.16;
  --brand-grid-opacity: 0.06;
  --brand-meta-size: 8pt;

  --brand-font-heading: "Chakra Petch", system-ui, sans-serif;
  --brand-font-body: "Space Grotesk", system-ui, sans-serif;
  --brand-font-label: "Space Mono", monospace;
}
```

**Uso de color:** texto principal sobre fondo oscuro. Texto casi negro sobre campo amarillo; usar `#05070F` para esa combinación. Cian y amarillo sirven como señales de énfasis; acompañar estados con texto, icono o número. El degradado cian → amarillo se reserva para un titular corto o una pieza protagonista; el cuerpo siempre usa color sólido. Comprobar contraste real en el componente exportado.

### Logotipo provisional · variantes de fondo

Los tres PNG transparentes son una misma firma «SB» de 80 × 80 px en variantes de color. Sus archivos canónicos viven en `img/`, porque el portafolio los usa directamente; el [índice de marca](README.md) y Canva los referencian sin copiarlos al directorio social. **Provisional** significa que aún pueden revisarse, no que deban redibujarse en cada pieza.

| Fondo | Archivo | Uso |
| --- | --- | --- |
| Oscuro (`#05070F`, `#0A0E1A`, superficies oscuras) | [`img/logo.png`](../../img/logo.png) | Variante normal y principal: blanco con amarillo. Es la que muestra la web en modo oscuro. |
| Claro (blanco, gris muy claro, superficies claras) | [`img/logo-light-split.png`](../../img/logo-light-split.png) | Variante principal para tema claro: azul oscuro con acento ámbar. Es la que muestra la web en modo claro. |
| Claro o campo amarillo suficientemente contrastado | [`img/logo-dark.png`](../../img/logo-dark.png) | Alternativa monocromática azul oscuro cuando el acento ámbar se pierde o la pieza pide menos color. |

No colocar `logo.png` sobre blanco: su parte blanca desaparece. No colocar las variantes con azul oscuro sobre fondo oscuro: se pierde el monograma. No poner la variante dividida sobre amarillo o naranja sin comprobar contraste. Conservar proporción 1:1, transparencia y un área libre de otros elementos alrededor; como punto de partida, dejar 20 px de despeje a cada lado cuando el archivo mida 80 px. No estirar, invertir con filtros, añadir contornos o glow, ni usar los tres en la misma pieza. Probar la versión elegida sobre el fondo final y a tamaño de uso.

Los píxeles amarillos y ámbar de estos PNG provisionales no coinciden exactamente con `#FFCE1F`; son parte del arte original del logo, **no** nuevos tokens de la paleta. No recolorearlos automáticamente ni extraer de ellos colores para otros componentes. Una futura revisión del logo deberá decidir si se alinean con el token maestro y actualizar simultáneamente web, guía, PDF y Canva.

### Escala tipográfica

| Rol | Familia / peso | Web · punto de partida | Social 1080 × 1350 · punto de partida | Tracking y lectura |
| --- | --- | --- | --- | --- |
| Titular principal | Chakra Petch 700 | `clamp(44px, 8.4vw, 104px)` | 80–112 px | `-0.01em`; interlínea 0.94–1.05. Ajustar saltos manualmente. |
| Título de sección | Chakra Petch 600–700 | `clamp(26px, 4vw, 46px)` | 52–72 px | `-0.01em` a `0`; frases cortas. |
| Cuerpo | Space Grotesk 400–600 | 16–18 px | 36–44 px | `0`; interlínea 1.4–1.7 en web, 1.25–1.4 en social. |
| Etiqueta / firma / número | Space Mono 400 | 12–14 px | 24–28 px | `0.04em` a `0.18em` solo en etiquetas breves; evitar mayúsculas largas. |

Los tamaños sociales son especificaciones iniciales del sistema previo, no mediciones del PNG. Ajustarlos al contenido y revisar a 360 px de ancho. El portafolio carga Chakra Petch en 400/500/600/700, Space Grotesk en 400/500/600/700 y Space Mono en peso normal; no pedir pesos inexistentes al clonarlo. Si una variante de fuente falla, conservar el orden de fallback del CSS.

### Gramática de componentes

| Componente | Construcción | Límite |
| --- | --- | --- |
| Portada | Firma compacta → titular de 4–8 palabras → imagen o diagrama protagonista → acento amarillo puntual. | Un protagonista y una idea; no saturar de paneles. |
| Lista técnica | Números cian, texto principal claro y separadores discretos. | Usarla solo cuando el contenido sea una secuencia real. La cantidad de puntos responde a la idea; no imponer tres pasos por plantilla. |
| Diagrama editorial | Nodos, conexiones y anotaciones con significado; cian para relaciones y amarillo para la decisión o cambio principal. | Elegir la forma según el contenido: estados, causa y efecto, comparación, ramificación o mapa de producto. Evitar tres nodos lineales si la idea no es una secuencia. |
| Marco / ventana HUD | Superficie oscura al 10–20 %, borde cian o amarillo de 1–2 px, corte a 45° o esquinas abiertas, etiqueta Space Mono. | Usarla cuando agrupe contenido real; evitar radio redondeado estándar. |
| CTA | Campo amarillo, texto `--brand-bg`, verbo concreto. | Una acción principal por vista. |
| Caso | Captura real → anotación cian → decisión → resultado verificable o límite. | Identificar claramente la captura y no inventar métricas. |
| Avatar | Usar `3d/avatar_v2.blend` como guía de identidad y pose; refinar la imagen final por inpainting. Integrarla como capa propia. | Mejorar rostro, gesto, manos y calidad general sin perder rasgos reconocibles, gafas, cabello ni vestimenta. En pose sentada, incluir el sillón amarillo y apoyar la mano libre sobre la pierna u objeto real. Revisar cada resultado. |

Para posts 4:5, partir de 1080 × 1350 y retícula de 6 columnas. En láminas interiores nuevas, respetar un área segura de 96 px en cada borde (`x=96…984`, `y=96…1254`); las portadas existentes conservan su composición aprobada. Usar 24 px como unidad mínima de separación entre icono y texto, y escalones de 8 px para ajustes. Recomponer para otros formatos; no estirar. Mantener espacio libre alrededor del titular, a lo sumo una trayectoria o recurso técnico protagonista, y evitar código decorativo tras el cuerpo.

### Biblioteca visual y ritmo entre láminas

Los componentes fuente están en [`design-kit/`](design-kit/README.md), con [catálogo visual](design-kit/catalog.html), [tokens CSS](design-kit/tokens.css), [gramática de diagramas](design-kit/DIAGRAMAS.md) y [estado de Canva](design-kit/CANVA.md). Esta guía decide las reglas; el kit contiene los SVG reutilizables. Referenciar `3d/avatar_v2.blend` y sus renders existentes sin duplicar archivos pesados.

| Relación en una lámina interior | Espaciado inicial |
| --- | ---: |
| Titular → subtítulo o cuerpo | 64 px |
| Introducción → ejemplo o diagrama | 80 px |
| Encabezado de sección → contenido | 48 px |
| Módulos hermanos | 32 px |
| Icono → texto asociado | 24 px |
| Relleno interior de un panel | 40–48 px |
| Último contenido → pie o firma | 64 px |

Una lámina tiene una idea y un protagonista visual: interfaz, diagrama o avatar cuando este aporte a la narración. Los halos cian/amarillo, trazos, patrón lateral y marco angular del kit dan profundidad y continuidad, pero no deben competir con el contenido ni sostener la legibilidad. Como punto de partida, usar un halo principal y un trazo protagonista como máximo; reducirlos si la lámina ya contiene una interfaz densa. Los controles se componen desde el kit shadcn y pueden exportarse como PNG independientes para Canva. Los titulares y anotaciones editoriales siguen siendo texto separado. Conservar código fuente editable; un PNG de UI no equivale a controles nativos editables en Canva.

En los carruseles 01 y 02, el glow cian conecta las cinco láminas: diseñar una luz panorámica de 5400 × 1350 y dividirla en cinco recortes consecutivos de 1080 × 1350. Mantener altura, intensidad y dirección en cada unión derecha/izquierda. No repetir un halo aislado en la misma posición de cada página. Luz detrás del contenido interior y como capa independiente en las portadas, conservando ilustraciones y textos. Revisar siempre las cinco láminas juntas, sin separaciones, además de su lectura individual. Fuentes: `design-kit/lights/panorama-cyan-01.svg` y `panorama-cyan-02.svg`.

### UI Kit de marca · shadcn/ui

**Decisión de Sofía, 14 de octubre de 2026:** reutilizar componentes oficiales shadcn/ui con el tema Pixel to Cloud. Fuente canónica: [`design-kit/ui/`](design-kit/ui/README.md); [preview aprobado](design-kit/ui/preview.html). Evitar redibujar interfaces de manera diferente en cada post.

| Sistema | Regla |
| --- | --- |
| Base | Estilo `base-nova`, primitivas Base UI y `@shadcn/react`. Componentes fuente copiados con CLI oficial; versiones exactas en `package-lock.json`. |
| Tema | `cssVariables: true`, tokens semánticos con pares de fondo/texto y puente `@theme inline`. Las clases `sb-*` ajustan el estilo común; no crear variantes arbitrarias por publicación. |
| Acción | `--primary: #FFCE1F`, `--primary-foreground: #05070F`. Una acción principal. |
| Foco y estructura | `--ring: #22D3EE`. Foco visible de teclado; el cian no representa un error. |
| Error | `--destructive: #FF6B6B`. Icono y texto explican el problema y la recuperación. Mantener los datos al reintentar. |
| Superficies | Fondo `#05070F`, tarjeta `#0E1422`, apoyo `#121A2C`, texto `#EAF6FF` y secundario `#8AA0C8`. |
| Geometría | Controles 6 px, alertas 8 px, tarjetas y burbujas 12 px. Radios derivados de `--radius`; sin glow dentro de los controles. |
| Componentes | Button, Input, Textarea, Label, Card, Alert, Badge y Avatar. Mensajería: Message + Bubble + MessageScroller. Preguntas: Questionnaire con opciones y respuesta libre. |
| Ilustraciones y gráficos | Conservar portadas aprobadas y gráficos editoriales existentes. shadcn estandariza los controles, no elimina la ilustración ni los iconos de la marca. |
| Exportación Canva | PNG transparentes por componente o composición UI, colocados como imágenes independientes. Titulares y texto editorial separados; conservar las portadas con sus capas de Canva. |

Las capturas son ejemplos conceptuales. El preview React permite probar estados en el navegador local; no representa un servicio de mensajería ni envíos reales. La encuesta del post es visual: respuestas en comentarios de Instagram. Reducir textos antes de bajar el tamaño de letra.

En diagramas, escribir primero la relación que se quiere explicar. Para un formulario de error, mostrar estados y transición; para una decisión de producto, una bifurcación con criterio; para un proceso de trabajo, actores y entregables; para una comparación, dos condiciones y la diferencia relevante. Usar conectores con dirección clara, nombres concretos, pocas palabras por nodo y una lectura inequívoca a tamaño de móvil. Aplicar los mismos colores, tipografías, márgenes y geometría angular a los diagramas creados en Lucidchart; exportarlos o llevarlos a Canva solo después de revisar legibilidad y editabilidad del resultado.

---

## 3. Guardrails de contenido y revisión

### El agente nunca debe

- Inventar proyectos, clientes, cargos, experiencia, pruebas, resultados, métricas, testimonios o disponibilidad.
- Presentar una hipótesis, opinión o maqueta como resultado medido o situación vivida.
- Afirmar que una herramienta de IA produjo código correcto sin revisión y pruebas descritas.
- Publicar noticias o detalles de plataformas como hechos actuales sin verificar fecha y fuente.
- Prometer crecimiento de audiencia, conversión o rendimiento por aplicar este sistema visual.
- Cambiar `#05070F`, `#22D3EE`, `#FFCE1F` u otros tokens maestros por colores extraídos visualmente de un PNG.
- Introducir marfil/verde petróleo, azul eléctrico ajeno, Anton, Inter o serif como identidad principal.
- Mezclar las tres propuestas visuales previas en una sola pieza. Usar Pixel to Cloud como dirección vigente.
- Usar un degradado, glow o color como único portador de texto o estado funcional.
- Poner texto pequeño sobre fotografías, efectos brillantes o campos amarillos sin comprobar lectura y contraste.
- Centrar todos los elementos, llenar el lienzo de texto principal o bajar del 40 % de espacio negativo oscuro.
- Inventar controles fuera del kit shadcn, usar bordes gruesos o convertir la UI en marcos HUD decorativos. Los radios de 6/8/12 px del kit están autorizados.
- Dejar el fondo plano sin cuadrícula técnica o subir la opacidad de la retícula por encima del 8 %.
- Usar HUD como adorno masivo, falsificar porcentajes/estados reales o dejar que compita con el titular.
- Hacer que el avatar parezca fotografía documental de un hecho real; es una representación ilustrada de Sofía.
- Cambiar rasgos del avatar sin revisar identidad. Usar el `.blend` como guía y refinar con inpainting cuando aparezca en una pieza final.
- Copiar una interfaz ajena como caso propio ni fabricar capturas de proyectos reales.
- Crear titulares clickbait, clichés de productividad, superlativos como «perfecto» o llamadas vacías como «revoluciona tu UX».
- Tratar «pixel to cloud» como afirmación literal de arquitectura técnica de cada proyecto; es una idea de marca.
- Publicar, conectar una cuenta o atribuir rendimiento social por el solo hecho de crear un diseño.

### Cómo revisar una pieza

1. **Verdad:** comprobar identidad, proyecto, fecha, captura, cita y métrica. Cambiar a «propuesta», «ejemplo» o «pendiente de medir» si falta evidencia.
2. **Voz:** leer en voz alta. Quitar promesas vagas y dejar problema, decisión y consecuencia.
3. **Sistema:** cotejar colores y fuentes con los tokens. Verificar asimetría, ≥ 40 % de espacio negativo, metadatos perimetrales, marcos angulares, micro-HUD y retícula ≤ 8 %. Confirmar que cian y amarillo cumplen una función.
4. **Lectura:** probar el tamaño final y una vista de 360 px. Revisar acentos, cortes de línea, contraste y texto alternativo.
5. **Salida:** conservar editable la fuente, separar avatar/fondo/texto y exportar el formato requerido.

### Override humano

**Portada 01 · ajuste de Sofía, 15 de octubre de 2026.** Suavizar transición entre láminas 1 y 2 degradando el fondo de portada al mismo `#05070F` del interior. Completar órbita cian y dejar margen para que el halo amarillo se disipe sin cortes rectos. Conservar identidad, textos y luz panorámica. HTML aprobado; ajuste guardado en Canva con textos nativos y recursos visuales separados. Fuente editable de portada `DAHYHO6EQlI` en carpeta del kit; degradado lateral de 12 px bajo el panorama al 18%.

**UI y preservación editorial · Sofía, 14 de octubre de 2026.** Este cambio amplía el sistema completo: usar shadcn/ui con clases de marca, controles simples, rojo para errores y exportaciones UI como recursos independientes en Canva. Mantener ilustración aprobada de portada 02 y el gráfico con tres iconos/separadores del slide 4 del post 01. Esta decisión reemplaza la obligación anterior de construir todos los formularios como formas nativas de Canva y la prohibición general de esquinas redondeadas en UI. No rediseñar las portadas al adoptar el kit. Revisar nuevas variantes con la siguiente pieza que las necesite.

**Carrusel 01 · corrección de Sofía, 13 de octubre de 2026.** En interiores de este carrusel, usar solo luces neón como atmósfera: sin retícula, sin curvas cian decorativas y sin logo en el pie. Lámina 2 usa dos tarjetas de igual ancho y una flecha amarilla dibujada que señala contenido. Lámina 3 reutiliza `design-kit/frames/inspection-window.svg`. Lámina 5 usa conversación inspirada en mensajería: avatar existente junto al nombre, burbujas, encuesta visual con tres opciones y una cuarta libre, más indicador de escritura del lector. Se permiten esquinas redondeadas en burbujas y en el componente existente. Esta excepción local prima sobre reglas generales de retícula y geometría angular; no cambia paleta ni fuentes. Revisar al aprobar este carrusel. La encuesta es representación estática; no implica interacción nativa en una publicación de Instagram. Flecha reutilizable: `design-kit/traces/arrow-hand-yellow.svg`.

Una persona responsable puede cambiar cualquier regla para una pieza concreta. Debe dejar una nota breve en el archivo o brief: **qué se cambió, por qué, dónde aplica y cuándo revisar la excepción**. Una excepción local no modifica el sistema completo. Si el cambio debe repetirse, actualizar en este orden el YAML, la tabla de tokens, el CSS clonable y los ejemplos; después revisar las piezas afectadas. Cuando una instrucción explícita y reciente de Sofía contradiga documentación anterior, esa instrucción define la dirección de la nueva pieza.

---

## 4. Fuentes y alcance

- [Índice de marca y contenido](README.md): acceso ordenado a guía, PDF, logos, personaje, grilla aprobada, portadas y kit sin duplicar imágenes.
- `css/neon.css` e `index.html`: valores cromáticos y fuentes implementados en el portafolio.
- `img/logo.png`, `img/logo-light-split.png`, `img/logo-dark.png`: arte original de las tres variantes provisionales del logotipo; comprobar fondo y contraste antes de usar.
- `output/social-design/character_sheet/`: ocho vistas de referencia del personaje. `3d/avatar_v2.blend` es la fuente 3D de trabajo.
- `output/social-design/grid-polished/grid-polished.png` y `grid-polished/carousel-1080x1350/`: grilla aprobada y doce portadas canónicas.
- `output/pdf/sofia-bracho-brand-book.pdf`: representación visual de esta guía; mantenerla sincronizada al cambiar el sistema.
- `output/social-design/pixel-to-cloud.png`: dirección de composición, no muestra exacta de tokens.
- `output/social-design/GUIA.md` y `PLAN-FEED-INICIAL.md`: temas, audiencia, avatar y reglas prácticas; registran una elección visual anterior.
- `output/social-design/MASTER-PROMPT-CONTINUIDAD.md`: descripción profesional y alcance del contenido.

Esta guía define una dirección de marca y reglas de producción. No documenta una auditoría formal de accesibilidad ni resultados de publicaciones.
