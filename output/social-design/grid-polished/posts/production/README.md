# Interiores de carrusel 01 y 02

## Carrusel 01 · versión actual

`carousel-01-v2.html` contiene láminas 02–05 del carrusel de presentación. `render-01-v2.mjs` exporta cuatro JPEG de 1080 × 1350 a `../carousels/01-diseno-codigo-aprendo/slides/`. `contact-sheet-01.mjs` compone portada original e interiores lado a lado en ruta local indicada. Se importó HTML a [Canva](https://www.canva.com/d/kMYe0OKbhucXZXm); conector confirmó cuatro páginas y texto editable. Portada editable permanece en [piloto separado](https://www.canva.com/d/COkW1wBqcGRIYyR).

Ejecutar desde raíz: `node output/social-design/grid-polished/posts/production/render-01-v2.mjs`.

## Borrador anterior y carrusel 02

`carousel-interiors.html` conserva composiciones de dirección anterior. `render.mjs` exporta solo láminas 02–05 del carrusel 02 y no toca carrusel 01. Carrusel 02 todavía necesita interiores nuevos según propuesta revisada.

Las primeras láminas son los archivos existentes [`cover-01.png`](../../../carousel-1080x1350/cover-01.png) y [`cover-02.png`](../../../carousel-1080x1350/cover-02.png). El post 03 usa [`cover-03.png`](../../../carousel-1080x1350/cover-03.png). Ninguna portada se copia a carpetas de posts. Interiores actuales del carrusel 01 usan tipografía, tarjetas y trayectorias editables, sin avatar adicional. Los valores de color vienen de guía maestra. Serif de titulares mantiene continuidad con portada; revisar excepción tipográfica antes de publicar.

Siete fondos de versiones anteriores están en `art-local/`, excluidos de Git para evitar duplicación. `carousel-01-v2.html` no depende de ellos y puede renderizarse desde un clon que conserve fuentes en `tmp/pdfs/fonts/`. `render.mjs` del carrusel 02 sí requiere esos fondos locales. Secuencia visual anterior en [`PROMPTS-INTERIORES.md`](PROMPTS-INTERIORES.md).

La lámina 02/03 muestra ejemplo conceptual, sin demo funcional. Revisar mensaje y comportamiento real antes de presentarlo como prueba. Nada se publicó.
