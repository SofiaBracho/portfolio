# Set musical MVP — plan de producción

Estado actualizado: usuario confirmó que los 200 créditos están en Tripo Studio, no en la API. Flujo actual: generar 16 referencias PNG individuales mediante image_gen para convertir manualmente en Studio. Las imágenes y exportaciones se entregan en references/; guía en references/LEEME-TRIPO-STUDIO.md. No se han generado modelos GLB ni consumido créditos Tripo. Variantes metal a cargo del usuario.

## Lote anterior de API — sustituido por referencias para Studio

Trofeo, cofre cerrado, cofre abierto, nota y metrónomo: 5 generaciones P1 texturizadas a 40 créditos estimados, máximo total 200. Consultar coste real después de cada generación y no exceder el máximo. Resto pendiente de recarga. Usuario hará las variantes metálicas: no generar ni preparar sus texturas o renders. Las especificaciones metal más abajo se conservan solo como referencia del brief original.

## Dirección común

3D suave de juguete de calidad, juvenil, proporciones reales; superficies lisas mate a satinadas, biseles redondeados. Sin caras, ojos, bocas, mascotas ni proporciones chibi. Tinta #1F1A2E, crema y blanco hueso; dorado para premios. Acento de marca pendiente: usar tinta hasta recibir el HEX. Reservar #0072B2, #009E73, #D55E00 y #CC79A7 exclusivamente para futuras fichas de función, fuera de esta lista.

Render común: cámara ortográfica (equivalente visual a lente larga), elevación 30°, giro 35°, vista desde arriba-izquierda; luz principal arriba-izquierda, relleno suave, sin contraluz. Transparencia real, sin suelo ni sombra de contacto. Extensión máxima visible 80% del lienzo; borde inferior al 88% de altura. Validar visualmente orientación y lectura a 48 px.

## Generación Tripo

Una llamada text-to-model por entrada, endpoint /v3/generation/text-to-model, modelo tripo-p1 / P1-20260311, texture=true, pbr=true, face_limit=15000 (objetivo, no límite garantizado). Preset toy, sin cadena adicional. El ensayo del trofeo fue válido y mostró una única llamada de generación. Conservar GLB nativo; no solicitar conversión STL/FBX.

Prefijo común de prompt: “A standalone premium toy object for a youthful music learning app. Realistic proportions, soft rounded bevels, clean smooth matte to satin surfaces, simple readable silhouette. Dark ink #1F1A2E, cream and bone white; satin gold only for rewards. No face, eyes, mouth, mascot, chibi anatomy, lettering, scenery or pedestal unless specified.”

| ID / archivo | Tipo | Descripción adicional del prompt |
|---|---|---|
| trofeo | pieza | A classic balanced two-handle gold trophy cup on a compact dark ink base. |
| cofre | pieza | A closed cream treasure chest with rounded lid, satin gold trim and a central clasp. |
| cofre-abierto | pieza | The matching cream treasure chest with the lid open about 100 degrees, satin gold trim, visible simple interior; same body proportions as the closed chest. |
| nota | icono | One single eighth musical note, dark ink, rounded solid stem and one clear flag, no extra notes. |
| metronomo | icono | A traditional cream pyramid mechanical metronome with one clearly visible dark pendulum and simplified scale without text. |
| auriculares | icono | A balanced pair of over-ear headphones, dark ink padded cups, cream headband, no cable. |
| cuaderno | icono | A closed bone-white chord notebook with dark ink spine and a simple embossed keyboard symbol, no text. |
| banderin | icono | A single cream triangular challenge pennant on a short dark ink pole, no text. |
| llama | icono | A sculptural satin gold flame with one main upward tip, clean silhouette, no face. |
| estrella | icono | One satin gold five-point star, moderate thickness, rounded edges, no face. |
| candado | icono | A compact dark ink padlock body with bone-white rounded shackle and a clear simple keyhole. |
| teclado | icono | A compact straight keyboard with seven white keys and five raised dark keys in correct groups of two and three. No text or knobs. |
| movil | icono | A modern upright phone, rounded dark ink frame, clean blank cream screen, no logos or interface. |
| microfono | icono | One handheld microphone with dark ink handle and a bone-white rounded grille, simplified grille detail, no cable. |
| vinilo | icono | One dark ink vinyl record with subtle concentric grooves, cream central label and a visible central hole, no text. |
| moneda | icono | One thick satin gold reward coin with a simple embossed lightning symbol, rounded rim, no lettering. |

Los dos cofres deben tener la misma geometría corporal: comprobar el par generado y, si difieren, derivar el abierto del modelo cerrado mediante edición local. No aceptar dos diseños incongruentes como estados finales.

Coste estimado: 16 generaciones text-to-model P1 con textura × 40 créditos = 640 créditos. El coste real debe consultarse por tarea y registrarse al terminar. Sin regeneraciones ni pasos de pago extra sin autorización. Comprobar saldo tras vincular la cuenta.

## Tema metal y exportaciones

Reutilizar exactamente cada malla: reemplazar materiales por cromo pulido con reflejos de estudio en blanco y negro; trofeo, cofres, estrella y moneda en metal anodizado naranja. La llama usa cromo en este tema. Ajustar reflejos mediante tarjetas de estudio sin introducir contraluz. No generar de nuevo la geometría para el tema metal.

- assets/3d-set/<id>.webp: 48 px para iconos; 256 px para piezas.
- assets/3d-set/<id>-metal.webp: mismo tamaño canónico.
- assets/3d-set/48/<id>[ -metal].webp: 48 px, ambos temas, sin espacio en el nombre.
- assets/3d-set/96/<id>[ -metal].webp: 96 px, ambos temas, sin espacio en el nombre.
- assets/3d-set/144/<id>[ -metal].webp: 144 px, ambos temas, sin espacio en el nombre.
- assets/3d-set/256/<id>[ -metal].webp: 256 px para las tres piezas, ambos temas.
- assets/3d-set/sources/: GLB nativos y registro de tareas Tripo.
- assets/3d-set/sources/renders/<id>.png y <id>-metal.png: 1024 px, RGBA.

La entrega web usa imágenes estáticas; las mallas son fuentes editables. Registrar dimensiones, transparencia, peso por archivo y créditos reales. Revisar siluetas a 48 px, alineación de base, ausencia de sombra, coherencia de cámara y legibilidad del teclado. Los controles y la barra inferior quedan fuera del set.
