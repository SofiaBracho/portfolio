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
colors:
  background: "#05070F"
  background_alt: "#0A0E1A"
  surface: "#0E1422"
  surface_raised: "#121A2C"
  text: "#EAF6FF"
  text_muted: "#8AA0C8"
  accent_cyan: "#22D3EE"
  accent_yellow: "#FFCE1F"
fonts:
  heading: "Chakra Petch"
  body: "Space Grotesk"
  label: "Space Mono"
tone_tags: [claro, curioso, cercano, preciso, verificable]
avatar_reference: "3d/avatar_v2.blend"
avatar_final_treatment: "Retoque por inpainting de rostro, gestos, manos y calidad; preservar identidad"
---

# Sofía Bracho — guía maestra de marca y sistema de diseño

**Versión:** 1.0 · 11 de octubre de 2026  
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
  --brand-line: rgba(120, 180, 255, 0.15);

  --brand-font-heading: "Chakra Petch", system-ui, sans-serif;
  --brand-font-body: "Space Grotesk", system-ui, sans-serif;
  --brand-font-label: "Space Mono", monospace;
}
```

**Uso de color:** texto principal sobre fondo oscuro. Texto casi negro sobre campo amarillo; usar `#05070F` para esa combinación. Cian y amarillo sirven como señales de énfasis; acompañar estados con texto, icono o número. El degradado cian → amarillo se reserva para un titular corto o una pieza protagonista; el cuerpo siempre usa color sólido. Comprobar contraste real en el componente exportado.

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
| Lista técnica | Números cian, texto principal claro y separadores discretos. | Tres pasos por defecto; no comprimir párrafos en una imagen. |
| Tarjeta / ventana | Superficie `--brand-surface`, borde `--brand-line`, etiqueta Space Mono. | Usarla cuando agrupe contenido real. |
| CTA | Campo amarillo, texto `--brand-bg`, verbo concreto. | Una acción principal por vista. |
| Caso | Captura real → anotación cian → decisión → resultado verificable o límite. | Identificar claramente la captura y no inventar métricas. |
| Avatar | Usar `3d/avatar_v2.blend` como guía de identidad y pose; refinar la imagen final por inpainting. Integrarla como capa propia. | Mejorar rostro, gesto, manos y calidad general sin perder rasgos reconocibles, gafas, cabello ni vestimenta. En pose sentada, incluir el sillón amarillo y apoyar la mano libre sobre la pierna u objeto real. Revisar cada resultado. |

Para posts 4:5, partir de 1080 × 1350, retícula de 6 columnas, márgenes de 80 px y separaciones de 24 px. Son reglas de plantilla que deben adaptarse si la pieza o el canal cambia. Recomponer para otros formatos; no estirar. Mantener espacio libre alrededor del titular, a lo sumo una trayectoria o recurso técnico protagonista, y evitar código decorativo tras el cuerpo.

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
- Hacer que el avatar parezca fotografía documental de un hecho real; es una representación ilustrada de Sofía.
- Cambiar rasgos del avatar sin revisar identidad. Usar el `.blend` como guía y refinar con inpainting cuando aparezca en una pieza final.
- Copiar una interfaz ajena como caso propio ni fabricar capturas de proyectos reales.
- Crear titulares clickbait, clichés de productividad, superlativos como «perfecto» o llamadas vacías como «revoluciona tu UX».
- Tratar «pixel to cloud» como afirmación literal de arquitectura técnica de cada proyecto; es una idea de marca.
- Publicar, conectar una cuenta o atribuir rendimiento social por el solo hecho de crear un diseño.

### Cómo revisar una pieza

1. **Verdad:** comprobar identidad, proyecto, fecha, captura, cita y métrica. Cambiar a «propuesta», «ejemplo» o «pendiente de medir» si falta evidencia.
2. **Voz:** leer en voz alta. Quitar promesas vagas y dejar problema, decisión y consecuencia.
3. **Sistema:** cotejar colores y fuentes con los tokens. Verificar que cian y amarillo cumplen una función.
4. **Lectura:** probar el tamaño final y una vista de 360 px. Revisar acentos, cortes de línea, contraste y texto alternativo.
5. **Salida:** conservar editable la fuente, separar avatar/fondo/texto y exportar el formato requerido.

### Override humano

Una persona responsable puede cambiar cualquier regla para una pieza concreta. Debe dejar una nota breve en el archivo o brief: **qué se cambió, por qué, dónde aplica y cuándo revisar la excepción**. Una excepción local no modifica el sistema completo. Si el cambio debe repetirse, actualizar en este orden el YAML, la tabla de tokens, el CSS clonable y los ejemplos; después revisar las piezas afectadas. Cuando una instrucción explícita y reciente de Sofía contradiga documentación anterior, esa instrucción define la dirección de la nueva pieza.

---

## 4. Fuentes y alcance

- `css/neon.css` e `index.html`: valores cromáticos y fuentes implementados en el portafolio.
- `output/social-design/pixel-to-cloud.png`: dirección de composición, no muestra exacta de tokens.
- `output/social-design/GUIA.md` y `PLAN-FEED-INICIAL.md`: temas, audiencia, avatar y reglas prácticas; registran una elección visual anterior.
- `output/social-design/MASTER-PROMPT-CONTINUIDAD.md`: descripción profesional y alcance del contenido.

Esta guía define una dirección de marca y reglas de producción. No documenta una auditoría formal de accesibilidad ni resultados de publicaciones.
