# UI Kit · Pixel to Cloud

## Catálogo de componentes · 8 de noviembre de 2026

Abre `preview.html` y elige **Componentes**. El catálogo reúne 74 muestras interactivas en nueve familias, con búsqueda por nombre. Incluye los 64 componentes instalables de Base Nova, las composiciones Date Picker, Data Table, Form y Typography, y componentes propios en **Social**. Continuidad y los dos posts tienen sus propias vistas.

**Social** incluye `ReactionBar` para alternar reacciones, `SocialPoll` para votar y ver resultados, y `CommentThread` para abrir una conversación. Los componentes viven en `src/components/social/` y reciben sus estados por props. Para una escena de video, pasa los datos del fotograma para elegir qué reacción está activa, cuándo aparecen los resultados o qué comentarios se ven. Los ejemplos del catálogo guardan los cambios en memoria mientras están abiertos.

`PostCTA` compone cierres de post con una invitación y su acción. En **Social** puedes elegir el próximo caso, proponer un mensaje de error alternativo y guardar una prueba de 30 segundos. El bloque recibe las acciones y sus estados como contenido, así puedes reutilizar el cierre en un carrusel o mostrar un estado concreto en video.

El catálogo funciona desde un archivo local. Para editarlo, ejecuta `npm ci` y `npm run dev`, y abre `/?view=components`. Ejecuta `npm run preview` para actualizar solo el catálogo dentro de `preview.html` y `npm run check:preview` para probarlo con Microsoft Edge. Los ejemplos viven en `src/catalog/` y usan los componentes reutilizables de `src/components/ui/` con los tokens de `src/brand.css`.

Esta ampliación está disponible para revisión local. La entrega histórica de carruseles y recursos se registra en `CANVA-DELIVERY.json`.

Retoque aprobado y guardado en Canva · 15 de octubre de 2026: portada 01 con órbita cian completa y halo amarillo sin corte; fondo derecho degradado a `#05070F`, igual que lámina 2. Original conservado. Variante `cover-01-soft-edge.png` y acabado de borde en `src/brand.css`; el panorama continuo se conserva. En Canva: cuatro textos nativos y seis capas visuales, incluido degradado de 12 px bajo la luz panorámica al 18%. Recurso editable `DAHYHO6EQlI` guardado en carpeta del kit. Post 02 conserva la versión aprobada, sin cambios nuevos.

Aprobado por Sofía y transferido a Canva el 14 de octubre de 2026. Recurso canónico: componentes React en `src/components/ui/`, tema en `src/brand.css` y composiciones en `src/main.tsx`.

Corrección aprobada y guardada en Canva: fondos con contenido fantasma sustituidos por un panorama de luz de 5400×1350 por post: `../lights/panorama-cyan-01.svg` y `panorama-cyan-02.svg`. Cinco recortes consecutivos de 1080×1350 al 18%, detrás de interiores; portadas conservan ilustraciones/textos y reciben luz como capa separada. Diez tramos guardados y verificados en sus páginas. Ambos carruseles en orden 01/02/03/04/05. Vista inicial «Continuidad» muestra cinco láminas juntas, sin espacios. Descripciones del gráfico 4/01 separadas; exportador comprueba cruces entre cajas editoriales incluyendo 10 px adicionales del PPTX. Estado, recursos y confirmaciones en `CANVA-DELIVERY.json`.

Base descargada con CLI oficial shadcn 4.21.5, estilo `base-nova`: Button, Input, Textarea, Label, Card, Alert, Badge, Avatar, Message, Bubble, MessageScroller y Questionnaire. Las clases `sb-*` aplican el estilo de marca; los componentes conservan sus primitivas y estructura. No se modificó el sitio del portafolio.

Referencias solicitadas: [Message](https://ui.shadcn.com/docs/components/base/message), [MessageScroller](https://ui.shadcn.com/docs/components/base/message-scroller) y [Questionnaire](https://ui.shadcn.com/docs/components/base/questionnaire). La distribución usa Base UI; MessageScroller y Questionnaire usan primitivas de `@shadcn/react`. La conversación contiene mensajes, pregunta con Diseño / Código / Ambos y respuesta libre, más burbuja del lector escribiendo.

Tema basado en el flujo oficial de [Theming](https://ui.shadcn.com/docs/theming): `cssVariables: true` en `components.json`, tokens semánticos con pares de fondo/texto, puente `@theme inline`, modo `.dark` y escala derivada de `--radius`. `--primary` es amarillo; `--ring` es cian; `--destructive` es rojo. Las clases propias ajustan composición y tamaños sin duplicar componentes por post.

## Colores y geometría

Paleta existente: `#05070F`, `#0A0E1A`, `#0E1422`, `#121A2C`, `#EAF6FF`, `#8AA0C8`, `#22D3EE`, `#FFCE1F`. Rojo semántico aprobado por Sofía el 14 de octubre de 2026: `--brand-error: #FF6B6B`; se aplica a iconos, bordes y mensajes de error. Amarillo para acción principal; cian para foco y estructura. Radio 6 px para controles, 12 px para tarjetas y burbujas. Sin glow dentro de controles.

## Uso

`npm ci`, `npm run dev` para revisar; `npm run build` y `npm run export` para generar `preview.html`, PNG transparentes de componentes, capturas de carruseles y PPTX con textos editoriales separados de las imágenes de UI. Las exportaciones PNG se pueden cargar como elementos independientes en Canva; el código sigue siendo editable aquí. No confundir PNG con controles nativos editables de Canva.

`preview.html` incluye fuentes e imágenes. Las vistas de carruseles son estáticas. La vista Componentes y la demostración React local permiten probar estados, validación y respuestas en el navegador.

Durante la revisión se incorporaron Message, MessageScroller y Questionnaire por solicitud de Sofía. La preferencia nueva de rojo para errores reemplaza el amarillo en esos estados; el amarillo conserva su función de acción. Las dependencias y sus versiones exactas quedan en `package-lock.json`.

Corrección de preservación visual, 14 de octubre: portada 02 vuelve a usar la ilustración aprobada completa como referencia en HTML, igual que portada 01. En Canva se debe reutilizar su diseño con capas separadas; los PPTX contienen únicamente los cuatro interiores de cada post. El slide 4 del post 01 recupera los iconos existentes de interfaz, código y revisión, los separadores horizontales y el énfasis amarillo del tercer tema. Este gráfico editorial no se sustituye por controles shadcn.

## Entrega en Canva

- [Post 01](https://www.canva.com/d/TonJJrD6pb4gJPo) · [Post 02](https://www.canva.com/d/1VRUD0LWQCM1xtJ): cinco páginas por carrusel; portadas con capas separadas, texto editorial editable e imágenes UI independientes.
- [UI Kit de marca](https://www.canva.com/folder/FAHYBdiWUPY): ocho recursos PNG; el resumen reutiliza el mismo componente de reintento.
- [Brandbook 04](https://www.canva.com/d/bp9YZTSauPf0daf): 14 páginas; guía maestra y PDF locales sincronizados.
- Portada 02 aprobada y gráfico editorial del slide 4/01 conservados.

Comprobado: HTML aprobado, compilación/exportación, validación, reintentos con datos conservados, respuesta libre, lectura de 390 px, dimensiones y elementos de Canva. Inspección visual completa del editor no comprobada: navegador bloqueó el acceso a sus imágenes por permiso denegado. No publicado; cuenta social sin conectar.
