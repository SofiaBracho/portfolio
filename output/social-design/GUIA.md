# Sofía Bracho · Tres sistemas visuales para social media

Propuestas del 7 de octubre de 2026; decisión actualizada el 11 de octubre. Referencias: capturas del portafolio y `css/neon.css`. Objetivo: comunicar criterio de diseño e ingeniería mediante contenido tecnológico breve y reconocible.

**Decisión vigente:** usar composición de la primera propuesta, «Notas de producto», con los colores y fuentes del portafolio. Sofía aclaró que el marfil/verde de la maqueta inicial no debía sustituir su identidad. Las imágenes de prueba son exploraciones históricas, no plantillas cromáticas finales. El avatar actual para nuevas piezas es `C:\Code\portfolio\portfolio\3d\avatar_v2.blend`.

## Comparación

Orden de las imágenes mostradas en el chat:

| Propuesta | Personalidad | Recurso reconocible | Aplicación sugerida |
| --- | --- | --- | --- |
| 1 · Notas de producto | Editorial, reflexiva, cercana | Titular grande + subrayado amarillo + anotaciones cian | Base compositiva elegida para toda la cuenta |
| 2 · Pixel to Cloud | Técnica, precisa, experimental | Tipografía angular + cian/amarillo + esquinas técnicas | Desarrollo, aprendizajes al construir y proyectos |
| 3 · Build Bold | Directa, enérgica, gráfica | Titular condensado + bloques azul/amarillo + asterisco | Ideas breves, errores frecuentes y opiniones argumentadas |

**Dirección seleccionada por Sofía: Notas de producto**, primera imagen mostrada en el chat. Se rescatan composición y ritmo, con paleta y tipografía del portafolio. Pixel to Cloud y Build Bold quedan como exploraciones descartadas; no alternarlas en la serie.

## Base compartida

- Lienzo maestro propuesto: 1080 × 1350, proporción 4:5. Los ejemplos generados son referencias raster; comprobar sus dimensiones antes de exportar una pieza final con ese tamaño exacto.
- Retícula: 6 columnas, márgenes de 80 px, separaciones de 24 px. Espaciado en múltiplos de 8 px.
- Jerarquía: firma → titular → idea de apoyo → tres puntos → una invitación final.
- Titulares: 80–112 px; cuerpo: 36–44 px; firma: 24–28 px. Son valores de partida para las plantillas, no medidas verificadas de los PNG.
- Una idea por pieza; aproximadamente 45–65 palabras. Si crece, dividir en carrusel.
- Dos familias principales por plantilla: Chakra Petch y Space Grotesk. Space Mono solo en etiquetas pequeñas. Mantener iguales firma, márgenes y ubicación del cierre en cada serie.
- Firma: «SOFÍA BRACHO / DISEÑO + CÓDIGO». No inventar usuario social ni incorporar datos de contacto sin necesidad.
- Color nunca como única señal: acompañar estados con palabras, números o símbolos.
- Prueba práctica: reducir a 360 px de ancho. Titular y tres ideas deben poder leerse sin ampliar. Revisar acentos y saltos de línea.
- Adaptaciones propuestas: cuadrado 1080 × 1080 y vertical 1080 × 1920. Recomponer; no estirar. En formato alto dejar espacio para controles superpuestos y comprobar la vista previa de la plataforma.

## 1 · Notas de producto, adaptado a identidad del portafolio

### Tokens

| Rol | Valor |
| --- | --- |
| Fondo principal | `#05070F` |
| Fondo alterno | `#0A0E1A` |
| Paneles | `#0E1422`, `#121A2C` |
| Texto | `#EAF6FF` |
| Texto secundario | `#8AA0C8` |
| Acento cian | `#22D3EE` |
| Marcador amarillo | `#FFCE1F` |
| Titulares | Chakra Petch |
| Cuerpo | Space Grotesk |
| Etiquetas | Space Mono |

### Reglas

Oscuro dominante; blanco azulado para lectura; cian para números y anotaciones. Amarillo limitado a una frase, marca o campo grande con texto oscuro. Separadores finos, composición abierta, textura opcional apenas visible. Una anotación curva por pieza como máximo. El avatar se integra como render real del `.blend`, no como personaje nuevo generado en cada imagen.

### Componentes y plantillas

- Cabecera con firma y línea fina.
- Titular Chakra Petch con una frase marcada.
- Lista numerada abierta, sin tarjetas individuales.
- Cierre breve alineado con la retícula.
- Explicación: pregunta → tres criterios → ejemplo.
- Caso: problema → decisión → resultado documentado.
- Carrusel: portada → contexto → criterios → aplicación → pregunta final.
- Avatar: render transparente en capa propia; mantener rostro y ropa consistentes entre posts.

## 2 · Pixel to Cloud

### Tokens

| Rol | Valor |
| --- | --- |
| Fondo | `#070A12` |
| Superficie secundaria | `#101827` |
| Texto principal | `#EDF4FA` |
| Texto secundario | `#A9B8CD` |
| Cian | `#22D3EE` |
| Amarillo | `#FFD21C` |
| Titulares | Chakra Petch, 700 |
| Cuerpo | Space Grotesk, 400/600 |

Chakra Petch y Space Grotesk aparecen en el HTML del portafolio. La paleta es una adaptación visual de las capturas, no una extracción exacta de píxeles.

### Reglas

Oscuro dominante, texto claro y un foco amarillo. Cian para numeración, líneas y detalles. Degradado cian→amarillo reservado para un titular corto; en texto de apoyo usar color sólido. Brillo solo decorativo, nunca necesario para leer. Máximo un recurso protagonista: esquinas técnicas, trayectoria o cinta diagonal. Evitar lluvia de código detrás del cuerpo. Bordes discretos; no convertir cada frase en un panel.

### Componentes y plantillas

- Firma técnica compacta.
- Titular angular con palabra clave amarilla.
- Lista de tres pasos con números cian.
- Banda final amarilla con texto oscuro.
- Tip técnico: problema → tres acciones → recordatorio.
- Proyecto: captura real → decisión técnica → resultado comprobable.
- Antes/después: mismo recorte, etiquetas explícitas y una explicación.
- Carrusel: gancho → problema → solución → ejemplo → checklist.

## 3 · Build Bold

### Tokens

| Rol | Valor |
| --- | --- |
| Azul eléctrico | `#2448FF` |
| Amarillo | `#FFE45C` |
| Negro | `#121212` |
| Blanco | `#FFFFFF` |
| Titulares propuestos | Anton, regular |
| Cuerpo propuesto | Inter, 500/700 |

### Reglas

Dos campos cromáticos grandes, sin degradados ni brillo. Blanco o amarillo sobre azul; negro sobre amarillo. Titular condensado y cuerpo de ancho normal para evitar fatiga. El ejemplo generado condensa también el cuerpo: en una plantilla editable usar Inter según esta regla. Un asterisco grande como firma gráfica; nunca superpuesto al texto. Bloques rectos, números grandes y separadores sencillos.

### Componentes y plantillas

- Cabecera blanca sobre azul.
- Titular de gran escala con frase amarilla.
- Zona inferior amarilla para ideas prácticas.
- Franja blanca final.
- Idea: afirmación → explicación → tres acciones.
- Error frecuente: error → consecuencia → alternativa.
- Checklist: tres a cinco criterios, sin párrafos largos.

## Post común: texto de la imagen

SOFÍA BRACHO / DISEÑO + CÓDIGO

**Tu interfaz también necesita estados de error.**

Diseña la salida, no solo el fallo.

01 · Explica qué pasó.

02 · Conserva lo que escribió.

03 · Ofrece un siguiente paso.

Guárdalo para tu próximo proyecto.

## Texto para acompañar cualquiera de las tres imágenes

Una interfaz también se define por lo que pasa cuando algo falla.

Si una solicitud no se completa, el mensaje debería ayudar a entender qué ocurrió, conservar el trabajo y ofrecer una salida concreta.

Por ejemplo: «No pudimos enviar tu mensaje. Tu texto sigue aquí. Inténtalo de nuevo».

Ese mensaje solo sirve si el producto realmente conserva el texto y permite reintentar. Diseño, comportamiento y código tienen que coincidir.

¿Qué estado de error te ha hecho abandonar una app?

## Texto alternativo

Post de Sofía Bracho titulado «Tu interfaz también necesita estados de error». Propone explicar qué pasó, conservar lo escrito y ofrecer un siguiente paso. Cierre: «Guárdalo para tu próximo proyecto».

## Uso para visibilidad

Hipótesis de contenido: hacer visible tu criterio como profesional que conecta diseño y desarrollo. Tres líneas posibles: decisiones de interfaz, aprendizajes técnicos concretos y casos propios con evidencia. Mantener vocabulario claro y ejemplos reales.

Probar una serie pequeña con el sistema elegido. Comparar guardados e interacciones por impresión, visitas al perfil y conversaciones relevantes cuando esos datos estén disponibles. No atribuir resultados únicamente al diseño: tema, audiencia y distribución también cambian. Esta propuesta optimiza composición y lectura; no demuestra aumento de alcance.

## Entrega y límites

Tres conceptos generados con la herramienta integrada de imágenes a partir de las cuatro capturas. Texto revisado visualmente en el chat; no se han publicado. Tipografías y colores de esta guía son especificaciones para una futura plantilla editable: la generación raster no garantiza fidelidad exacta a familias ni códigos hexadecimales. No se ha realizado auditoría formal de accesibilidad ni prueba de rendimiento social.
