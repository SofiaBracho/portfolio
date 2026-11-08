# Pixel to Cloud · biblioteca visual para posts

Fuentes SVG reutilizables para el sistema de Sofía Bracho. Colores y tipografías salen de la [guía maestra](../GUIA-MAESTRA-MARCA-Y-SISTEMA.md); este directorio añade composición y componentes para 1080 × 1350. [Catálogo visual](catalog.html) · [tokens CSS](tokens.css) · [estado Canva](CANVA.md).

## Componentes

**UI Kit vigente:** [shadcn/ui con tema de marca](ui/README.md) · [preview HTML](ui/preview.html) · [recursos en Canva](https://www.canva.com/folder/FAHYBdiWUPY). Los formularios, mensajes, preguntas y controles se componen desde esta fuente; pueden exportarse como PNG independientes. Los SVG de esta biblioteca conservan su función editorial.

| Familia | Archivos | Uso |
| --- | --- | --- |
| Luz | `lights/halo-cyan.svg`, `halo-yellow.svg`, `edge-beam.svg` | Dar profundidad detrás de una interfaz, avatar o gráfico. Un halo principal por lámina. No detrás de párrafos. |
| Trazos | `traces/orbit-route.svg`, `annotation-loop.svg`, `underline-yellow.svg` | Conectar elementos, señalar una región o enfatizar una frase. Un trazo protagonista por lámina. |
| Patrón | `patterns/signal-gutters.svg` | Actividad visual discreta en extremos de la composición; deja libre el área de lectura. |
| Marco | `frames/inspection-window.svg` | Enmarcar ejemplo de interfaz o anotación. El contenido real se coloca como texto y campos editables encima. |
| Iconos | `icons/need.svg`, `interface.svg`, `code.svg`, `verify.svg`, `error-state.svg`, `ai-review.svg` | Vocabulario propio de necesidad, interfaz, implementación, revisión y estados. Dibujos de 96 × 96, trazo común de 4 px. |
| Avatar | [fuente 3D](../../../3d/avatar_v2.blend) y [renders existentes](../grid-polished/renders/) | Solo cuando aporte a narración. Referenciar fuente; no copiar a esta carpeta. |

## Retícula y espaciado · 1080 × 1350

Para nuevos interiores usar **96 px** por lado y arriba/abajo, según la guía maestra. Área de contenido: `x=96…984`, `y=96…1254`. Portadas originales conservan composición propia. Ningún texto, control o icono crítico entra en banda de seguridad. Fondo y halos sí pueden desbordar.

| Relación | Medida inicial | Regla |
| --- | ---: | --- |
| Titular → subtítulo/cuerpo | 64 px | Más aire tras titular que entre líneas del mismo bloque. |
| Bloque introductorio → ejemplo o diagrama | 80 px | Cambia función; debe sentirse como sección nueva. |
| Encabezado de sección → contenido | 48 px | Mantiene relación sin pegar elementos. |
| Dos módulos hermanos | 32 px | Separación visible incluso a 360 px de vista previa. |
| Icono → texto asociado | 24 px | Icono de 56–80 px; nunca sustituye texto. |
| Interior de panel | 40–48 px | Ajustar por densidad; evitar panel dentro de panel. |
| Último contenido → pie/firma | 64 px | Si no cabe, recortar texto o aumentar número de láminas. |

Usar escalones de 8 px para ajustes. Tipografía social inicial de guía: titular Chakra Petch 80–112 px; sección 52–72 px; cuerpo Space Grotesk 36–44 px; etiqueta Space Mono 24–28 px. Serif de portadas originales sigue como excepción local; no se incorpora al sistema principal. Revisar cada composición completa y reducida a 360 px.

## Composición

Nueva anotación reutilizable: [`traces/arrow-hand-yellow.svg`](traces/arrow-hand-yellow.svg), flecha amarilla dibujada para señalar contenido. Se usa en carrusel 01 junto a dos tarjetas alineadas. Para ese carrusel, aplicar excepción de guía maestra: solo luces como fondo, sin retícula ni curvas decorativas ni logo en pie. Reutilizar `inspection-window.svg` y avatar existente; burbujas y encuesta son componentes de contenido, no adornos del fondo.

1. Una idea y un elemento visual dominante por lámina: avatar **o** interfaz **o** diagrama. Luz y trazo apoyan protagonista.
2. Halo nunca lleva significado solo; comprobar lectura del texto sin él. Mantener luz lejos de párrafos y controles.
3. Cian describe ruta, foco o sistema. Amarillo marca decisión, resultado o acción. No pintar cada elemento con ambos.
4. Iconos comparten vista de 96 × 96, trazo de 4 px, extremos redondos y un acento amarillo. Usar con label.
5. Formularios: campos, estados y mensajes se construyen desde el kit shadcn de marca. Se autorizan PNG por composición UI para Canva, conservando el código editable y el texto editorial por separado. `inspection-window.svg` mantiene su función de marco editorial cuando se necesite. Error rojo `#FF6B6B`, acción amarilla y foco cian.
6. Para Canva, insertar cada SVG como elemento aislado. Es escalable y movible; no asumir edición individual de sus trazos. Mantener texto fuera de SVG.
7. Para avatar, mantener rasgos y procedencia del `.blend`; no usarlo de forma repetitiva. Si se genera o retoca imagen, dejar fuente separada y revisar identidad.

## Diagramas

Consultar la [gramática de diagramas](DIAGRAMAS.md) antes de componer una lámina explicativa. La forma visual nace de la relación del contenido: estados, bifurcaciones, comparación, causa y efecto o mapa de actores. No convertir automáticamente cada idea en una lista de tres pasos.

**Estado:** biblioteca inicial. Revisar variantes después de usarlas en dos o tres piezas reales; evitar crear iconos por anticipación sin función editorial.
