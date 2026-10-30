# Portadas del grid — versión pulida

Fecha: 11 de octubre de 2026.

## Entrega

- `carousel-1080x1350/`: doce portadas PNG, verificadas a 1080 × 1350 px, proporción 4:5.
- `posts/`: plan editorial por formato (carruseles, imágenes únicas y reels), con enlaces a las portadas finales; sin copias de imágenes dentro de los planes.
- Para entregar las doce portadas juntas, comprimir `carousel-1080x1350/` cuando haga falta; el ZIP no se guarda en Git porque duplicaba 28 MB de PNG.
- `grid-polished.png`: vista conjunta; mismo orden que el grid original, 12 arriba a la izquierda y 01 abajo a la derecha.
- `cover-01.png` a `cover-12.png`: originales generados, antes de normalizar dimensiones. No son archivos 4K: 01 mide 1092 × 1440; los demás, 1122 × 1402.
- `avatar-grid-poses.blend` y `renders/`: escena de trabajo y seis renders nuevos del avatar original.
- `PROMPTS-FINAL.json`: instrucciones exactas de generación y correcciones.
- `PROMPTS-CLEANUP.json`: retoque posterior solicitado por Sofía: fondos limpios en 02, 09 y 10, sin grunge ni símbolos residuales. Se conservan el collage de periódico de 09 y las flechas intencionales.

## Dirección aplicada

Para producir estas portadas se usó `../grid.png` como referencia de composición, titulares serif, collage, objetos, gestos e iluminación. No se reutilizaron imágenes, escenas ni plantillas de `production-test`.

Esta sección describe cómo se produjeron las imágenes existentes. Para diseñar piezas nuevas, prevalece `../GUIA-MAESTRA-MARCA-Y-SISTEMA.md`: sus tokens y fuentes no se infieren del grid ni de los PNG. La serif visible en estas portadas requiere revisión frente a la guía maestra o una excepción documentada antes de publicación.

Identidad usada en esta producción: `../avatar_v2.blend`, `../character_sheet/face-front-glasses.png` y `../character_sheet/body-front.png`. El `.blend` de esta carpeta social conserva la fuente histórica de las portadas; el archivo de trabajo actual es `../../../3d/avatar_v2.blend`. Sus hashes ya no coinciden, así que no deben tratarse como copias intercambiables.

## Método y límites

Blender 5.2.2 produjo seis referencias transparentes nuevas, con poses aproximadas e iluminación cálida/cian. La herramienta integrada de imágenes recompuso cada portada usando su recorte del grid, el render correspondiente y la ficha de identidad. Corrigió rostro, ojos, cabello, manos, articulaciones y expresiones en la imagen final.

Las portadas son composiciones con retoque generativo guiado por el modelo 3D; no son renders Blender intactos ni inpainting con una máscara que garantice conservación píxel a píxel. La expresión de sorpresa y los contactos precisos de manos se resolvieron durante el retoque. Las mejoras 2D no modifican el rig ni sus texturas.

Se conservaron los originales generados y se exportó sin deformación. La portada 01 necesita márgenes laterales discretos del color del fondo para alcanzar 4:5 conservando toda la imagen; las otras requieren únicamente una normalización mínima de tamaño.

## Revisión realizada

- Inspección visual de las doce portadas, de los renders de referencia y del grid final.
- Comprobación de titulares, acentos, firma, identidad, gestos y anatomía visible.
- Correcciones adicionales en el selector de tema de 07, los números del inspector de 05 y el texto ilegible del panel de 04.
- Comprobación automática: doce archivos finales, todos exactamente 1080 × 1350.
- Fuente Blender original intacta, comprobada mediante SHA256.

Los paneles de código, periódico y sitio web siguen siendo ilustraciones editoriales; no documentan una interfaz ejecutándose ni un artículo periodístico real. Textos y colores están rasterizados, sin garantía de familia tipográfica o valor hexadecimal exactos. No se publicó nada ni se probó el recorte dentro de Instagram. Se entregan las portadas, no las páginas interiores de los carruseles.

## Correspondencia

| Número | Portada |
| --- | --- |
| 01 | Diseño, código y lo que aprendo. |
| 02 | Tu interfaz también puede fallar. |
| 03 | Era un cambio de cinco minutos. |
| 04 | La IA lo escribió. ¿Lo revisaste? |
| 05 | Antes de tocar CSS, inspecciona. |
| 06 | Un buen update ahorra preguntas. |
| 07 | Detrás de esta interfaz. |
| 08 | Funciona. No sé por qué. |
| 09 | IA: qué cambia y qué no. |
| 10 | Un formulario, cuatro estados. |
| 11 | Dale contexto antes de pedir código. |
| 12 | Lo pequeño también es producto. |

La escena Blender guarda poses en fotogramas 10 (señalar), 20 (teclado), 30 (laptop), 40 (sorpresa), 50 (saludo sentado), 60 (de pie). Estos renders son referencias de producción y conservan limitaciones del modelo; no sustituyen las portadas retocadas.
