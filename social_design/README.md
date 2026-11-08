# Sofía Bracho · centro de marca y contenido

Este directorio reúne las guías, fuentes visuales y producción social. Cada imagen pesada tiene una sola ubicación canónica; los enlaces de esta página permiten encontrarla sin hacer copias. **Pixel to Cloud** es la dirección vigente. Los logos siguen siendo provisionales.

## Abrir primero

| Necesidad | Fuente canónica | Estado |
| --- | --- | --- |
| Reglas de marca, colores, fuentes, logos, voz y composición | [Guía maestra](GUIA-MAESTRA-MARCA-Y-SISTEMA.md) | Vigente; fuente de verdad del sistema. |
| Versión visual para lectura y presentación | [Brandbook PDF](../pdf/sofia-bracho-brand-book.pdf) | Exportación de la guía; regenerar desde `tmp/pdfs/build_brand_book.py` tras cambios. |
| Logos transparentes | [`logo.png`](../../img/logo.png), [`logo-light-split.png`](../../img/logo-light-split.png), [`logo-dark.png`](../../img/logo-dark.png) | Provisionales; permanecen en `img/` porque la web los usa directamente. [Reglas de fondo](GUIA-MAESTRA-MARCA-Y-SISTEMA.md#logotipo-provisional--variantes-de-fondo). |
| Identidad del personaje | [Hoja de personaje](character_sheet/README.md) y [modelo 3D de trabajo](../../3d/avatar_v2.blend) | Referencias de rasgos y pose; no mover ni copiar el `.blend` al kit. |
| Grilla inicial aprobada | [Grilla pulida](grid-polished/grid-polished.png) | Vista conjunta aprobada de las doce portadas. |
| Portadas 4:5 finales | [12 PNG de 1080 × 1350](grid-polished/carousel-1080x1350/) | Serie canónica; las propuestas de posts enlazan aquí. |
| Kit de luces, trazos, marcos e iconos | [Biblioteca de componentes](design-kit/README.md) | Fuentes SVG reutilizables; también organizadas en [Canva](design-kit/CANVA.md). |
| UI Kit shadcn de marca | [Código y reglas del kit](design-kit/ui/README.md) · [recursos Canva](https://www.canva.com/folder/FAHYBdiWUPY) | Base UI, clases `sb-*`, tema por variables y errores rojos. Aprobado el 14 de octubre de 2026; ocho composiciones PNG reutilizables. |
| Colección de trabajo en Canva | [Carpeta Pixel to Cloud](https://www.canva.com/folder/FAHX7ERhzuQ) y [estado de la integración](design-kit/CANVA.md) | Logos, personaje, grilla, portadas, componentes y brandbook. La paleta y fuentes se consultan en el brandbook; no existe Brand Kit nativo configurado. |
| Plan editorial y piezas individuales | [Índice de posts](grid-polished/posts/README.md) | Propuestas y borradores; revisar estado de cada pieza antes de publicar. |

## Otras referencias

- [Dirección visual Pixel to Cloud](pixel-to-cloud.png): referencia de composición; no extraer hex ni fuentes de sus píxeles.
- [Grilla anterior](grid.png): etapa previa; la aprobada es `grid-polished/grid-polished.png`.
- [Guía social anterior](GUIA.md) y [plan inicial](PLAN-FEED-INICIAL.md): contexto editorial. Si discrepan en estilo, prevalece la guía maestra.
- [Renders de poses](grid-polished/renders/) y [avatar editorial](brand-book/avatar-editorial-yellow-chair.png): recursos de producción, no una nueva fuente de identidad.
- `grid-polished/references/` y portadas originales en `grid-polished/cover-*.png`: referencias de proceso. Para publicar usar `carousel-1080x1350/`.

## Regla de archivos

No copiar logos, portadas, personaje, renders ni el modelo 3D entre carpetas de posts. Una propuesta enlaza a la fuente canónica. Las doce copias exactas de portadas que habían reaparecido dentro de `posts/` se retiraron tras comparar SHA-256; las láminas interiores son archivos distintos y permanecen en sus carpetas. El ZIP de 28 MB se retiró porque repetía la serie canónica; generarlo solo al preparar una entrega. Los originales de mayor resolución en `grid-polished/cover-*.png` son fuentes distintas y se conservan.
