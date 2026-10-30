# 02 · Tu interfaz también puede fallar

**Estado actual · 14 octubre 2026:** versión shadcn aprobada y guardada en [Canva](https://www.canva.com/d/1VRUD0LWQCM1xtJ). [Publicación vigente y límites de edición](PUBLICACION.md). El formulario final usa Correo y Mensaje, con error rojo, según el preview aprobado; la propuesta ampliada siguiente se conserva como antecedente. Fuente actual: UI Kit de marca y guía v1.3 / Brandbook 04.

**Propuesta de composición ampliada · 14 de octubre de 2026.** Basada en la guía maestra v1.2, el Brandbook 03 consultado en Canva y la biblioteca de componentes verificada en Canva. Documento para revisión; no representa un carrusel nuevo ya maquetado ni una demo funcional probada.

**Función:** enseñar cómo un formulario permite entender y resolver errores sin perder lo escrito. **Formato propuesto:** cinco láminas de 1080 × 1350. **Portada:** [cover-02.png](../../../carousel-1080x1350/cover-02.png), sin duplicarla.

## Ejemplo único

Formulario ficticio «Enviar mensaje» con campos **Nombre**, **Correo** y **Mensaje**. Usar datos de ejemplo, como «Ana Pérez» y «ana@example.com», nunca datos personales reales. Mantener mismo formulario, ancho, contenido y jerarquía en todas las láminas. Cada cambio de estado debe poder compararse con el anterior. Portada muestra error conceptual; interiores muestran interfaz realista y legible.

| Lámina | Estado y texto visible de interfaz | Enseñanza y dirección visual |
| --- | --- | --- |
| 1 · Portada existente | «Tu interfaz también puede fallar»; ventana conceptual «Algo salió mal». | Gancho visual. Ventana ilustrada no se presenta como captura de app funcional. Sin avatar. |
| 2 · Estado inicial | Campos etiquetados «Nombre», «Correo», «Mensaje» y botón «Enviar mensaje». Texto de apoyo: «Un formulario también necesita estados de error». | Formulario realista como elemento central. Labels persistentes, bordes, foco de teclado visible, texto de ayuda discreto. Base para comparar estados. |
| 3 · Error de campo | Correo de ejemplo: «ana@». Debajo: «Completa el correo: ana@example.com». Botón «Enviar mensaje» disponible para nueva validación. | Error junto al campo, con icono y texto además del color. Nombre y mensaje permanecen. Sin error de servidor aquí. |
| 4 · Error de envío | Correo corregido: «ana@example.com». Aviso: «No pudimos enviar tu mensaje. Lo que escribiste sigue aquí». Botón «Reintentar envío». | Mismo formulario con campos conservados. Error general cerca del botón y foco dirigido al aviso. Mostrar otra vía solo cuando exista una acción real en el producto. |
| 5 · Regla guardable | «Explica qué pasó. Conserva los datos. Ofrece una salida». Microejemplo: «No pudimos enviar tu mensaje. Reintenta; tu texto sigue aquí». Nota técnica: «Respuesta y mensaje: solo lo necesario. Sin datos privados ni detalles internos». | Recorte de misma interfaz junto a tres anotaciones breves. Cierre informativo, sin nueva ilustración. Separar mensaje visible de registro técnico protegido. |

## Pie de foto propuesto

Un error también necesita una salida: explica qué pasó, conserva lo escrito y permite reintentar. Ejemplo conceptual; comprueba el flujo real. Guárdalo para tu próximo formulario.

## Dirección de producción

- Construir formularios, textos, etiquetas, iconos, estados y anotaciones como elementos editables de Canva. No usar imagegen para texto ni capturas de UI; reservarlo para ilustración puntual si una lámina la necesita. No se prevé avatar en este carrusel.
- Usar proporciones y espaciado creíbles: labels visibles, campos de altura consistente, botones con jerarquía, estados diferenciados por texto e icono. Sin texto ilegible ni «lorem ipsum».
- Fondo y acentos según guía maestra. Margen exterior mínimo de 96 px en interiores; formulario ocupa área principal sin tocar bordes. Revisar lectura a 360 px y contraste de campos, errores y foco.
- Secuencia es ejemplo conceptual hasta construir y probar demo. Si se presenta como comportamiento funcional, verificar conservación del texto, validación, reintento, prevención de envíos duplicados y respuesta mínima del servidor.

**Estado:** propuesta revisada. Los JPEG interiores actuales usan dirección ilustrada anterior; no representan esta propuesta.

## Concepto que une las cinco láminas

**De «Algo salió mal» a «Sé cómo continuar».** Seguimos un único formulario y una única tarea: enviar un mensaje. La portada plantea incertidumbre; el interior hace visible qué se conserva, dónde está el problema y cómo continuar. Cada deslizamiento añade información al mismo ejemplo. La continuidad nace de reconocer los mismos campos, datos y posiciones.

Arco de lectura: **fallo → contexto → corrección → recuperación → criterio para revisar**. La lámina 3 trata una validación de correo; la 4, un fallo posterior de envío. El cambio se explica explícitamente para que parezcan dos estados distintos de la misma tarea, no un error que cambia de causa sin explicación. La lámina 5 reúne las decisiones sin inventar un envío exitoso.

El formulario lleva siempre «Nombre: Ana Pérez» y «Mensaje: Hola, quiero consultar disponibilidad». El correo pasa de `ana@` a `ana@example.com` al corregirse. Son datos ficticios. Ninguna pantalla se presenta como captura de un cliente o producto publicado.

## Sistema de composición compartido

| Elemento | Especificación para interiores |
| --- | --- |
| Lienzo | 1080 × 1350, seis columnas; área segura x=96–984, y=96–1254. |
| Retícula de trabajo | Seis columnas de 128 px, cinco calles de 24 px: 888 px útiles. Retícula de alineación invisible; cualquier patrón visible queda al 5–8 % como máximo. |
| Eje editorial | Titular alineado a x=96. Ventana desplazada hacia derecha, dejando un margen de anotación a izquierda. Evitar centrar todos los bloques. |
| Fondo | `#0A0E1A`, coherente con post 02; `#05070F` en zonas de profundidad. Conservar al menos 40 % del lienzo como fondo oscuro libre de texto principal. |
| Texto | `#EAF6FF` principal; `#8AA0C8` secundario. Chakra Petch 700 para titular, Space Grotesk para lectura, Space Mono para etiquetas. |
| Escala inicial | Titular 80–96 px; sección 52–64 px; cuerpo e interfaz 36–44 px; etiquetas de navegación 24–28 px. Microdatos de 8–10 pt solo decorativos, nunca instrucciones esenciales. |
| Estructura | Cian `#22D3EE` para numeración, selección y conectores. Bordes de 1–2 px; marcos abiertos o recortados a 45°. |
| Acción | Amarillo `#FFCE1F` con texto `#05070F` para botón principal. Una acción dominante por lámina. No añadir rojo como token de los interiores. |
| Ritmo | 64 px entre titular y apoyo; alrededor de 80 px antes del ejemplo; 24 px entre icono y texto; ajustes en múltiplos de 8 px. |
| Navegación | Posición constante para `02 / PRODUCTO`, `02–05 / 05` y firma textual «Sofía Bracho». Microetiquetas `[FORMULARIO]` y `[EJEMPLO CONCEPTUAL]` en bordes seguros. Sin estadísticas ficticias. |

Propuesta de bandas: cabecera y titular y=96–320; explicación breve y=352–432; ejemplo y=512–1104; cierre y=1184–1254. Son guías de montaje, no cajas que deban llenarse. Si el texto no cabe, acortarlo antes de reducir tamaño. La lámina 5 cambia distribución para dar aire al cierre.

## Diseño detallado por lámina

### 1 · Portada: la pregunta visual

**Texto existente:** «Tu interfaz también puede fallar».

Conservar [portada aprobada](../../../carousel-1080x1350/cover-02.png): titular grande arriba, ventana inclinada como protagonista debajo y firma inferior. La ventana «Algo salió mal» abre el problema. No agregar subtítulo, avatar ni más objetos.

La portada original contiene serif, alerta roja, esquinas redondeadas y botón cian. Se conserva como arte existente; esos detalles no amplían los tokens ni los componentes para interiores. El vínculo con las páginas nuevas viene del fondo oscuro, texto claro, contorno cian, acento amarillo y motivo de ventana. La transición de ventana inclinada a formulario recto expresa el paso de ilustración a explicación.

### 2 · Contexto: reconocer la tarea

**Titular:** «Alguien ya escribió todo esto».

**Apoyo:** «Si algo falla, no debería empezar de cero».

Mostrar formulario «Enviar mensaje» con nombre, correo incompleto `ana@` y mensaje. Todavía no aparece aviso de validación: representa el momento anterior a enviar. Botón «Enviar mensaje».

Ubicar ventana en columnas 2–6, aproximadamente x=248–984. Reservar columna izquierda para pequeño indicador cian de estado «ANTES DE ENVIAR»; si necesita más ancho, colocarlo encima del marco. Etiquetas de campos persistentes, valores y botón como elementos editables. Usar `inspection-window.svg` como marco, manteniendo su proporción; si limita el espacio, construir marco angular nativo sin estirar el SVG.

Halo cian suave detrás del extremo inferior derecho, lejos del texto. Una anotación breve apunta al mensaje: «Esto ya costó tiempo». Ventana y contenido son protagonistas; no agregar diagrama independiente.

**Conexión:** al deslizar, ventana conserva tamaño y posición. Solo cambia estado del correo.

### 3 · Corrección: localizar el problema

**Titular:** «Explica qué hay que corregir».

**Apoyo:** «El error va junto al campo».

Repetir formulario de lámina 2 sin mover nombre ni mensaje. Bajo `ana@`, mostrar icono `error-state.svg` y texto «Completa el correo: ana@example.com». Rótulo de estado «CORREO INCOMPLETO». Mostrar información por palabras e icono, además del borde; el color no carga solo con significado.

Reservar desde lámina 2 espacio para ayuda debajo del correo, evitando que aparezca un formulario distinto cuando entra el error. Mantener botón «Enviar mensaje» disponible para una nueva validación; no representar un bloqueo sin explicación.

Una única línea cian desde anotación «Aquí está el problema» termina junto al campo. Sin órbita decorativa adicional. Mantener datos idénticos para que la conservación sea visible, no solo declarada.

**Conexión:** siguiente página conserva el marco; cambia únicamente correo corregido y aviso de envío.

### 4 · Recuperación: ofrecer una salida real

**Titular:** «Conserva lo escrito. Permite reintentar».

**Apoyo:** «Correo corregido. Esta vez falla el envío».

Correo pasa a `ana@example.com`. Nombre y mensaje permanecen. Cerca del botón, aviso: «No pudimos enviar tu mensaje. Lo que escribiste sigue aquí». Botón amarillo «Reintentar envío».

Mantener la ventana anclada al mismo lugar. Reservar banda del aviso desde el primer interior para reducir saltos de composición. La atención baja del campo de correo al bloque aviso–acción; una flecha dibujada amarilla del kit puede señalar el botón si aporta claridad. Omitir cualquier otro trazo protagonista.

No inventar causa técnica como falta de conexión. No ofrecer otro canal de contacto inexistente. La escena representa un fallo conocido sin envío confirmado; una demo futura deberá manejar por separado respuestas ambiguas para evitar duplicados.

**Conexión:** último deslizamiento amplía este bloque de aviso, datos conservados y acción.

### 5 · Síntesis: convertir el ejemplo en criterio

**Titular:** «Que el error permita continuar».

Usar ampliación del mismo formulario, no una nueva interfaz. Mostrar solo mensaje conservado, aviso y botón. Recorte ocupa columnas 2–6 y zona central; un riel estrecho a izquierda lleva tres números cian con conectores cortos hacia elementos concretos:

1. **Explica:** «No pudimos enviar tu mensaje».
2. **Conserva:** mensaje escrito todavía visible.
3. **Ofrece una acción:** «Reintentar envío».

Numeración y anotaciones deben leerse a 360 px; si las tres llamadas congestionan el recorte, disponerlas debajo en tres líneas, conservando sus referencias 01/02/03 en la interfaz. No usar tres tarjetas del mismo tamaño.

**Nota visible:** «Ejemplo conceptual. Comprueba que el comportamiento acompañe al mensaje».

**Cierre:** «Guárdalo para revisar tu próximo formulario».

Presentar cierre como texto editorial, no como segundo botón de aplicación. El único botón amarillo sigue siendo «Reintentar envío» dentro del ejemplo. No mostrar check de éxito ni afirmar que el flujo fue probado.

## Cómo se percibe como una sola pieza

La portada atrae con una ventana en tensión; las tres páginas siguientes estabilizan esa ventana y enseñan cambios localizados; el cierre se acerca a lo aprendido. El ritmo es **impacto → contexto → detalle → acción → síntesis**. Cambia la atención, no el lenguaje visual.

Repetir posición de título, firma, contador, luz y marco. Repetir datos y proporciones del formulario en páginas 2–4. Variar solo estado, anotación y foco. La página 5 permite un acercamiento para cerrar sin monotonía. Ninguna frase ni imagen debe quedar partida entre páginas: cada lámina se entiende por separado.

Para conectar con carrusel 01, conservar paleta, familias tipográficas, luces y marco de inspección. Su encuesta, burbujas, tarjetas iguales y excepciones de geometría pertenecen a ese carrusel; aquí manda la relación entre estados del formulario. Elegir fondo sobrio con halo por pertinencia al contenido, sin convertir la excepción de 01 en nueva regla global.

## Componentes concretos y montaje en Canva

| Recurso | Aplicación |
| --- | --- |
| `frames/inspection-window.svg` | Contenedor reconocible en interiores; campos, controles y textos encima como elementos nativos. |
| `lights/halo-cyan.svg` | Un halo principal discreto por página; ubicación estable para continuidad. |
| `icons/error-state.svg` | Identificar aviso con texto en páginas 3 y 4. |
| `traces/arrow-hand-yellow.svg` | Señalar reintento en página 4, solo si mejora lectura. |
| Conectores nativos | Relacionar anotaciones con datos, error y acción en página 5. |

La biblioteca contiene más recursos; no hace falta usarlos todos. Avatar, órbitas y patrones densos no aportan al ejemplo propuesto.

Orden de capas: fondo → halo → marco → campos y valores → estados → anotaciones → título y navegación. Agrupar formulario por estructura, datos y estado para duplicarlo sin mover piezas. Mantener títulos, labels, valores, mensajes, botones y anotaciones editables. SVG importado puede moverse y escalarse; edición interna de trazos no verificada.

## Revisión antes de producir la versión final

- Ver cinco láminas juntas: mismo formulario y progresión comprensible, sin confundir validación con fallo de envío.
- Revisar cada interior a 360 px: campos, mensajes y acciones legibles; 96 px de seguridad; suficiente aire; sin colisiones entre llamadas.
- Comprobar contraste sin halos; al menos 40 % oscuro libre de texto principal; un protagonista por página.
- Revisar paleta y fuentes reales de Canva, no inferirlas del PDF importado. Portada preservada como excepción existente.
- Si se construye demo: verificar conservación de campos, validación, foco y aviso accesible, reintento y prevención de duplicados. Mantener datos internos fuera de mensajes públicos.
- Exportar solo después de revisar montaje editable. Las imágenes anteriores no constituyen validación de esta propuesta.

## Fuentes consultadas

- [Brandbook 03 en Canva](https://www.canva.com/design/DAHX7EKLbng/edit), contenido consultado el 14 de octubre de 2026.
- [Componentes en Canva](https://www.canva.com/folder/FAHX69KBGpU), inventario consultado en esta sesión; incluye flecha amarilla incorporada después del inventario local de 14 recursos.
- [Guía maestra v1.2](../../../../GUIA-MAESTRA-MARCA-Y-SISTEMA.md): autoridad para tokens, márgenes, composición y excepciones.
- [Biblioteca UI](../../../../design-kit/README.md), [gramática de diagramas](../../../../design-kit/DIAGRAMAS.md) y [registro de Canva](../../../../design-kit/CANVA.md).
- [Plan de feed](../../../../PLAN-FEED-INICIAL.md): tema, formato y propósito editorial. La guía maestra prevalece en decisiones visuales.
