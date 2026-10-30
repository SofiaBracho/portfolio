# 05 · Antes de tocar CSS, inspecciona

**Objetivo:** enseñar un diagnóstico reproducible de desbordamiento visual. **Formato recomendado:** reel de pantalla con subtítulos y demo real, sin mostrar rostro. **Alternativa opcional:** 5 láminas basadas en el guion siguiente. **Portada:** [cover-05.png](../../../carousel-1080x1350/cover-05.png).

## Reel recomendado · 25–40 segundos

1. **0–4 s:** mostrar el desbordamiento en un viewport móvil. Texto: «Algo se sale. ¿Qué elemento es?»
2. **4–15 s:** grabar la selección del elemento en DevTools. Zoom al box model y a la regla responsable; cursor lento y visible.
3. **15–28 s:** cambiar una sola regla en DevTools y mostrar el resultado en el mismo ancho.
4. **28–40 s:** aplicar la corrección al código y comprobar otro ancho. Cierre: «Inspecciona antes de corregir».

**Audio:** subtítulos suficientes para entenderlo sin sonido. Si Sofía decide usar voz propia o clonada, grabar un texto breve a partir de la demo ya validada y revisar pronunciación y naturalidad. Sin rostro ni avatar animado. La portada 4:5 puede ser miniatura; el video requiere composición vertical propia.

## Alternativa opcional · carrusel

| Lámina | Texto propuesto en imagen | Dirección visual |
| --- | --- | --- |
| 1 | Portada existente: «Antes de tocar CSS, inspecciona». | DevTools ilustrado y cursor grande. |
| 2 | «Síntoma: un elemento se sale del contenedor». | Demo real antes de corregir; marcar borde del viewport y borde que desborda. |
| 3 | «Selecciona el elemento y mira tamaño, box model y regla aplicada». | Captura real del inspector con ampliación legible; señalar la regla que causa este ejemplo concreto. |
| 4 | «Prueba una corrección en DevTools. Mira qué cambia». | Antes/después del mismo viewport; mostrar la regla modificada y el resultado. |
| 5 | «Lleva el cambio al código y verifica otros anchos». | Checklist: ancho inicial, móvil y una interacción horizontal intencional; cierre práctico. |

**Pie de foto propuesto:** «Cuando algo se desborda, primero identifico qué elemento produce el ancho extra y qué regla lo determina. Una corrección que se ve bien en un ancho puede fallar en otro. Por eso cierro comprobando el layout completo».

**Producción:** crear o elegir una demo reproducible y registrar el antes/después. No insinuar que el código dibujado de la portada es una captura real. Preservar cualquier desplazamiento horizontal intencional de la demo.
