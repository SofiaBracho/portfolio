# Avatar de Sofía en el portafolio

Entrega local revisable · 16 de octubre de 2026. Rama existente `dev`. Sin commit, push ni despliegue. Mini app privada fuera de este trabajo.

## Resultado y límites

El hero utiliza el avatar cómic semirrealista aprobado. Mantiene composición, entrada lateral, giro, saludo, reposo y seguimiento del puntero. En pantallas menores de 881 px y con movimiento reducido inicial conserva el diseño existente sin 3D ni descarga de GLB.

**Conectados:** `walk`, `wave`, `idle`. **Pendientes y excluidos del archivo de movimiento de producción:** `thinking`, `texting`. Sus transferencias se pueden revisar, pero la mano de “pensar” queda cerca del cuello en vez del mentón y el agarre del teléfono necesita ajuste fino de dedos/contacto entre ambas manos durante todo el clip. No se presentan como funciones terminadas. En el sitio, Sofía permanece en reposo estable después del saludo.

**Pruebas realizadas:** Chromium 153.0.8010.12 en Windows, seis tamaños, escenarios de carga/pausa y evaluación de la malla exportada durante 1.501 fotogramas. Móvil significa emulación de tamaño/densidad en Chromium; **no hay prueba en teléfono físico, Safari, WebKit ni iPhone real**. La prueba de pestaña oculta usa un evento de visibilidad simulado; la pausa por scroll y por cambio de ancho sí usa eventos reales del navegador. La regla sigue siendo el ancho: un teléfono en horizontal con viewport de 881 px o más puede solicitar 3D y requiere prueba física.

## Cambios

- `index.html`: referencia al modelo nuevo y movimiento separado. Importación diferida tras contenido crítico, solo cuando el hero está visible; evita iniciar durante pestaña oculta y cancela instancias al activar movimiento reducido, incluso durante carga.
- `3d/hero-avatar.js`: normaliza altura a 1,7 m, rota el frontal +X a +Z, ajusta cámara en escritorios altos, conserva culling/unlit de contornos, usa iluminación neutra en el rostro y cian suave en el borde. Limita densidad a 1,5 y render a unos 30 fps; pausa por visibilidad, scroll y ancho; libera geometrías, materiales, texturas, esqueletos y observadores al destruir instancia.
- `3d/Sofia-portfolio-motion.glb`: **solo movimiento**, sin mallas, materiales, texturas ni rig del personaje antiguo. Tres clips horneados en el espacio de reposo del rig de Sofía.
- `scripts/prepare-avatar-motion.py` y `audit_avatar_rest.py`: comparación y preparación reproducible. El otro personaje solo aporta curvas de movimiento; no se importan sus recursos visuales.
- `scripts/avatar-review.html`, `avatar-deformation.html`, `check-avatar.mjs`: herramientas locales de revisión y pruebas, sin funcionalidades de la mini app.

No se modificó CSS ni contenido editorial del sitio. Cambios previos de marca, PDF, imágenes eliminadas y `avatar_v2.blend` quedaron fuera de la intervención. Los archivos fuente aprobados se conservan.

## Compatibilidad del movimiento

Ambos esqueletos tienen 65 huesos y padres equivalentes por nombre. No son rigs intercambiables: el nuevo tiene otro eje frontal, escala, proporciones y orientación anatómica de manos. Se evaluaron matrices mundiales de reposo y curvas originales, incluidas interpolaciones cúbicas; se transfirieron rotaciones con corrección de reposo, se conservó proporción del avatar y se horneó a 30 fps. La pelvis conserva desplazamiento vertical escalado; el desplazamiento lateral lo controla el hero.

Las palmas requirieron correcciones de aproximadamente 108,6° y 105,5°. El giro se distribuye de forma progresiva: brazo 35 %, antebrazo 75 % y mano 100 % de la corrección anatómica, evitando concentrarlo en la muñeca y plegar su contorno. El saludo incluye una corrección de dos huesos para despejar el rostro. La caminata corrige el hundimiento de las suelas en 21 fotogramas, con elevación máxima de pelvis de 0,00729 unidades del modelo. No se certifica plantado milimétrico del pie durante el desplazamiento del hero; no hay solver de contacto con el suelo en tiempo real.

La distribución original mezcla cabeza/cuello en ojos, boca y delineador: el movimiento horneado mantiene esos huesos como un bloque para evitar cizallamiento facial. Cabello y gafas tenían además pesos hacia hombros/brazos. **Solo en memoria del navegador**, cabello, gafas y sus contornos reciben peso rígido a la cabeza; sus posiciones, UV, materiales y texturas no cambian. El GLB aprobado sigue intacto. El seguimiento del puntero también mueve el bloque de cabeza, con límites de 20°/12°.

Contornos: normales invertidas, material `MeshBasicMaterial` procedente de `KHR_materials_unlit`, `FrontSide`, sin tone mapping ni sombras. Nunca se convierten a doble cara. Los demás materiales conservan sus valores PBR: piel mate, ojos con roughness 0,55 y brillo contenido. La luz del navegador reproduce la intención del estudio; no se promete igualdad píxel a píxel con Blender.

## Medidas de la versión conectada

| Medida | Resultado |
| --- | --- |
| Modelo aprobado | 10.066.040 bytes |
| Movimiento de producción, 3 clips | 698.640 bytes |
| Descarga 3D total en escritorio, sin compresión HTTP | **10.764.680 bytes / 10,76 MB** |
| Archivo de revisión, 5 clips, no solicitado por el sitio | 1.675.968 bytes, solo movimiento |
| Triángulos / llamadas de dibujo en reposo | 26.651 / 27 |
| Geometrías / texturas GPU registradas | 27 / 4 |
| 320, 390, 768 px | Cero peticiones GLB; cero canvas del avatar |
| 881, 1024, 1440 px | Dos peticiones GLB; un solo canvas; cero errores JS/HTTP |
| Inicio de descarga 3D en pruebas locales | Aproximadamente 1,67–3,38 s tras navegación |
| Muestra de render en Chromium local | 87 fotogramas en 3 s: **29 fps**; límite configurado de 30 |
| Tiempo de tareas de la página en esa muestra | 1,113 s en 3 s de pared |
| Heap JS de la página en esa muestra | 6.717.360 bytes |
| Pausa fuera de pantalla | Contador 346 → 346 durante espera |
| Ocultamiento simulado | Contador 377 → 377 durante espera |
| Reducir ancho a 390 y volver a 1440 | Pausa/reanuda sin nuevas peticiones GLB |
| Movimiento reducido | Cero GLB iniciales; destruye canvas al activarse |
| Carga lenta y cambio de preferencia | Destruye instancia pendiente y recrea un solo canvas al reactivar |
| Recurso de movimiento ausente, error inducido | Retira canvas y conserva texto/acciones del hero |
| Escritorio con densidad 2 | Densidad de render limitada a 1,5; seguimiento revisado en ambos extremos |

Tiempo de tareas y heap corresponden a **toda la página**, incluida lluvia de caracteres, y no miden potencia GPU, memoria residente total ni batería. Velocidades corresponden al servidor local sin limitación de red; no son resultados de producción ni de hardware móvil.

Se comprobaron las transiciones `loading → walking → turning → waving → idle`. Los seis tamaños tienen `scrollWidth === innerWidth`. En escritorio alto de 881×1000 se aleja la cámara para mantener rostro y silueta dentro de pantalla. El recorte inferior en escritorio ancho conserva la composición previa.

## Deformación y evidencia

[`deformation.json`](deformation.json) evalúa todos los vértices de las 27 mallas en cada muestra de los cinco clips candidatos, usando los mismos ajustes de accesorios que el hero: 501 fotogramas de reposo, 64 de caminar, 39 de saludo, 187 de pensar y 710 de teléfono. Ningún valor no finito. Ojos, boca, delineador, cabello y gafas quedan prácticamente rígidos, con cocientes máximos de longitud de arista entre 1,00001 y 1,00036. El cuerpo conserva deformación de sus pesos originales; se registran estiramientos locales de hasta 2,23 en aristas de ropa/contorno. La distribución de giro redujo el máximo de aristas de los brazos en reposo a 1,47/1,48 y eliminó los pliegues negros visibles en las muñecas de la primera transferencia. Esto no certifica el rig para cualquier animación o ángulo.

La suela mínima de caminar coincide con su altura de reposo con diferencia menor de 0,000001 unidades. Las comprobaciones numéricas se complementaron con capturas reales del GLB animado; no sustituyen revisión de contactos de dedos, especialmente en los dos clips excluidos.

- [Escritorio final, 1440 px](portfolio-1440.png) · [881 px](portfolio-881.png) · [1024 px](portfolio-1024.png).
- [Móvil emulado, 390 px / DPR 3](portfolio-390.png) · [320 px](portfolio-320.png) · [768 px](portfolio-768.png).
- [Personaje anterior, antes del cambio](baseline-desktop.png).
- [Hoja de movimientos](motion-contact-sheet.png) · [Galería HTML](review.html). Las dos últimas filas son candidatos pendientes.
- [Prueba de tamaños, red, fases y pausas](browser-tests.json).
- [Puntero a la izquierda, densidad 2](pointer-left-retina.png) · [Puntero a la derecha](pointer-right-retina.png): muñecas y seguimiento revisados con el horneado final.
- [Carga interrumpida, densidad y error de recursos](lifecycle-tests.json).
- [Comparación de reposo](rest-comparison.json) · [Horneado conectado](motion-bake.json) · [Horneado de revisión](motion-review-bake.json).

Capturas provienen de Chromium, no de imágenes generadas. Las referencias de Blender siguen en `../avatar-comic/`.

## Reproducción

Desde la raíz del repositorio, con Blender 5.2 y Playwright disponible en `scripts/node_modules`:

```powershell
& 'C:/Program Files/Blender Foundation/Blender 5.2/blender.exe' --background --factory-startup --disable-autoexec --python-exit-code 1 --python scripts/prepare-avatar-motion.py
& 'C:/Program Files/Blender Foundation/Blender 5.2/blender.exe' --background --factory-startup --disable-autoexec --python-exit-code 1 --python scripts/prepare-avatar-motion.py -- --review-candidates
$env:AVATAR_CHROMIUM='C:/Users/User/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe'
node scripts/check-avatar.mjs --review
node scripts/check-avatar.mjs --audit
node scripts/check-avatar.mjs --test
node scripts/check-avatar.mjs --lifecycle
node scripts/check-avatar.mjs --sheets
```

`AVATAR_CHROMIUM` selecciona el navegador ya instalado; puede omitirse con una instalación de Playwright que incluya su navegador correspondiente. No se agregaron dependencias. `node scripts/check-avatar.mjs --serve` abre servidor local en `http://127.0.0.1:8187/`; no despliega ni publica.

## Preservación y revisión de Git

SHA-256 del modelo aprobado: `5512f90d5e8812381bbc1f5fe17a200cd65764363962a65ce6374e407201e68c`, idéntico al inspeccionado antes de integrar. Modelo antiguo: `22c2a754da39d191a71cf446806aa10acf422a33ea89bcef8367ec83191617c1`, también sin cambios. No se guardó ningún `.blend` en esta tarea.

Movimiento conectado: `c2a7a50ff77a9dc46ccfacb890f1fce431b0e43be09dddc5c7868163a95ffe2e`. Movimiento completo de revisión: `e9161b97183e8db556d2d8a4c1d80eb0a3b80829bdb7a334a2fc5396ff0b1b38`. Las 3 acciones conectadas son exactamente las mismas del archivo de revisión.

Sintaxis de JavaScript y revisión de whitespace de `index.html`/`3d/hero-avatar.js` pasaron. La revisión global de whitespace señala líneas internas del PDF de marca previamente modificado; ese archivo ajeno no se corrigió ni se regeneró. Fuentes nuevas ya estaban sin seguimiento al inicio: su presencia no implica que estén guardadas en un commit remoto.
