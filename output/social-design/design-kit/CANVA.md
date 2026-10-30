# Pixel to Cloud · colección en Canva

[Carpeta principal de marca](https://www.canva.com/folder/FAHX7ERhzuQ) · [índice local de fuentes](../README.md). La colección ordena importaciones para trabajar en Canva; el repositorio conserva una sola fuente local de cada imagen.

| Sección | Contenido | Fuente local |
| --- | --- | --- |
| [Brandbook 04 · vigente](https://www.canva.com/d/bp9YZTSauPf0daf) | 14 páginas; incluye shadcn, radios UI, rojo de error y preservación de ilustraciones. Sustituye edición 03 como guía vigente. | [`output/pdf/sofia-bracho-brand-book.pdf`](../../pdf/sofia-bracho-brand-book.pdf) |
| [Logos provisionales · por fondo](https://www.canva.com/folder/FAHX7IR6kos) | Tres variantes nombradas por fondo: oscuro principal, claro principal y claro monocromático. | [`img/logo.png`](../../../img/logo.png), [`logo-light-split.png`](../../../img/logo-light-split.png), [`logo-dark.png`](../../../img/logo-dark.png) |
| [Componentes](https://www.canva.com/folder/FAHX69KBGpU) | 14 SVG: luces, trazos, patrón, marco e iconos. | Este `design-kit/`. |
| [UI Kit · shadcn](https://www.canva.com/folder/FAHYBdiWUPY) | Ocho PNG independientes: botones/estados, perfil, formulario inicial, validación, reintento, conversación/Questionnaire, comparación y alerta conceptual. | [`ui/`](ui/README.md), con fuentes React y tema compartido. |
| [Personaje · referencias](https://www.canva.com/folder/FAHX7LF5v9Y) | Ocho vistas de la hoja de personaje. | [`character_sheet/`](../character_sheet/README.md) |
| [Feed inicial · grilla y portadas](https://www.canva.com/folder/FAHX7Fc6970) | Grilla aprobada, doce portadas 4:5 y portada piloto editable. | [`grid-polished/`](../grid-polished/README.md) |

La guía maestra define los valores exactos: `#05070F`, `#0A0E1A`, `#0E1422`, `#121A2C`, `#EAF6FF`, `#8AA0C8`, `#22D3EE`, `#FFCE1F` y el rojo semántico aprobado `#FF6B6B`; Chakra Petch para titulares, Space Grotesk para cuerpo y Space Mono para etiquetas. El PDF importado sirve de referencia visual. **Estos valores y fuentes no están configurados como Brand Kit nativo**: la biblioteca de recursos y el tema de código son el kit de trabajo; no se creó un Brand Kit nativo ni un Brand Template. La fuente local define los valores exactos.

## Uso

Los SVG de `lights/`, `traces/`, `patterns/`, `frames/` e `icons/` se cargan como elementos individuales. En una composición se pueden mover, escalar y combinar. La edición interna de cada trazo o degradado después de la importación no está comprobada; si se necesita cambiarlo, editar el SVG fuente y volver a importarlo. Desde el 14 de octubre, los controles UI se exportan desde shadcn como PNG por composición independiente; el código conserva la edición interna. Los titulares y anotaciones editoriales permanecen como texto editable de Canva. Las portadas conservan sus textos e imágenes separados.

Mantener una sola fuente local para cada componente. Canva es la biblioteca de uso, no una segunda copia dentro del repositorio. El avatar se toma de `3d/avatar_v2.blend` o de los renders existentes, según la guía maestra; no se copia al kit.

## Diseños existentes

### Vigentes · 14 octubre 2026

- [Post 01 · UI Kit shadcn](https://www.canva.com/d/TonJJrD6pb4gJPo), ID `DAHYBmkm3ds`: cinco páginas de 1080 × 1350; portada con cuatro textos y cinco imágenes independientes. Slide 4 conserva iconos y separadores. Cierre con Message, MessageScroller y Questionnaire.
- [Post 02 · UI Kit shadcn](https://www.canva.com/d/1VRUD0LWQCM1xtJ), ID `DAHYBo5sd1E`: cinco páginas de 1080 × 1350; portada ilustrada con cinco textos y seis imágenes independientes. Interiores con error rojo y datos conservados.
- [Brandbook 04](https://www.canva.com/d/bp9YZTSauPf0daf), ID `DAHYBnXlShQ`: 14 páginas.

Ambos posts están guardados en Feed inicial. Fuentes importadas: cuatro interiores PPTX por post; las portadas provienen de sus diseños existentes con capas separadas. El conector confirmó 30 elementos de texto editable por carrusel. UI interna rasterizada por componente según autorización de Sofía.

**Revisión:** fuente HTML aprobada por Sofía; importación y montaje confirmados por Canva; dimensiones y elementos verificados. Se obtuvieron vistas de las láminas 4/01 y 3/02, pero su inspección visual por navegador quedó bloqueada por permiso denegado. No se afirma revisión visual completa del editor. Sin publicación.

### Antecedentes

- [Carrusel 01 · V2 corregida](https://www.canva.com/design/DAHX8NYQ3GU/edit): antecedente de cinco páginas 1080 × 1350, sustituido por versión shadcn. Conservado como referencia.

- [Carrusel 01 completo · 1080 × 1350](https://www.canva.com/design/DAHX7zOIVuE/edit): cinco páginas; versión del 13 de octubre de 2026. Textos interiores editables; portada y varios gráficos son imágenes independientes. [Detalle y límites](../grid-polished/posts/carousels/01-diseno-codigo-aprendo/PUBLICACION.md).

- [Portada piloto editable](https://www.canva.com/design/DAHX6FbyMLk/edit), aprobada como referencia del carrusel 01.
- [Prueba anterior de interiores](https://www.canva.com/design/DAHX6aSUc54/edit), rechazada; no usar como plantilla.

La próxima plantilla de interior debe tomar la portada piloto y las reglas de la guía maestra como referencia. Primero conviene probar una lámina informativa y una lámina con interfaz realista, revisar ambas juntas y solo entonces convertirlas en bases repetibles. La conexión disponible en esta sesión no ofrece creación de **Brand Templates**; un diseño normal de Canva puede duplicarse para reutilizarlo, pero no debe llamarse Brand Template.

## Estado de la integración

Actualización del 14 de octubre: guardados ambos carruseles de cinco páginas en Feed inicial, Brandbook 04 de 14 páginas en carpeta principal y ocho recursos UI en la nueva subcarpeta shadcn de Componentes. Los recursos anteriores de logos, SVG y personaje siguen como referencias de marca. [Registro de entrega](ui/CANVA-DELIVERY.json) contiene IDs y comprobaciones. La guía maestra y las fuentes locales siguen definiendo color, medida y comportamiento.
