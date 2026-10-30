# Referencias musicales → Tripo Studio

16 PNG individuales de 1024 × 1024 con transparencia. Generados con la herramienta integrada image_gen; no consumieron créditos de Tripo. Originals conserva imágenes originales de 1280 px. Las exportaciones normalizan escala máxima al 80% y base al 88% del lienzo. Los archivos WebP de ../48, ../96 y ../144 sirven para probar las imágenes directamente en la app; ../256 incluye las tres piezas grandes.

Estos PNG son referencias visuales y renders 2D. No contienen geometría, materiales editables ni animaciones. La reconstrucción 3D todavía no se ha probado. Materiales generados incluyen algo más de brillo y pequeños acentos dorados en metrónomo/cuaderno; ajustar al material final si se requiere cumplimiento estricto del brief. Las variantes metal quedan a cargo del usuario.

## Pasos en Studio

1. Abre https://studio.tripo3d.ai/ e inicia sesión con la cuenta que contiene tus 200 créditos.
2. En generación selecciona Image to 3D. La ayuda actual describe dos entradas: Best Quality / HD Model (H Series), o Clean Topology / Smart Mesh (P Series). También aparecen desde 3D Workspace.
3. Sube UN PNG, por ejemplo trofeo.png. No subas una lámina con varios objetos. La imagen debe mostrar un solo objeto completo.
4. Revisa el coste que muestra Studio con los ajustes elegidos. La cifra de 40 créditos de nuestro plan anterior correspondía a text-to-model P1 en la API: no debe usarse para estimar image-to-3D en Studio. No se ha verificado el precio dentro de tu cuenta.
5. Genera primero un solo objeto con los ajustes básicos. Deja los extras de pago desactivados inicialmente. Si solo necesitas malla para aplicar materiales tú, desactiva textura cuando la opción esté disponible; para conservar el aspecto de estas referencias, usa textura básica. Comprueba siempre el precio antes de confirmar.
6. Pulsa Generate / Generate Model. Espera y gira el resultado: mira frente, lados, parte trasera y base. Comprueba asas del trofeo, huecos del candado y auriculares, e interior del cofre abierto. La parte posterior es reconstruida por IA y puede diferir.
7. Si el resultado sirve, abre Export / Download y selecciona GLB si tu cuenta lo permite. Conserva texturas incluidas. Usa el ID como nombre: trofeo.glb, cofre.glb, etc. GLB conserva color/materiales; STL no los conserva.
8. Anota gasto real y saldo restante. Continúa con el siguiente objeto mientras alcance el presupuesto. No repitas toda la tanda automáticamente por un resultado imperfecto.

## Orden sugerido para tus créditos

Trofeo → cofre cerrado → nota → metrónomo → auriculares. Guarda el cofre abierto como referencia adicional. Para que abierto/cerrado sean estados exactos del mismo objeto, conviene abrir la tapa del mismo modelo en un editor 3D; dos reconstrucciones independientes no garantizan geometría idéntica.

Resto: cuaderno, banderín, llama, estrella, candado, teclado, móvil, micrófono, vinilo y moneda. El teclado de referencia tiene siete teclas blancas y cinco negras en grupos de dos y tres: comprobar que la conversión lo conserve. La moneda incluye XP; revisar que no deforme las letras.

## Para la app

Si el uso final son iconos estáticos, puedes usar los WebP ya exportados. Si necesitas rotación, animación o nuevos materiales, continúa a GLB y renderiza desde una cámara común. Un GLB generado no queda automáticamente optimizado para web/móvil: revisar geometría y texturas antes de integrarlo.

Los PNG actuales comparten dirección visual, pero el ángulo de cada objeto es aproximado: la generación por imágenes no garantiza una cámara 3D exacta. El encuadre 80%/88% sí se normalizó durante la exportación.

Fuentes verificadas: [Image to 3D — ayuda oficial](https://www.tripo3d.ai/help/features/how-to-use-the-image-to-3d-feature), [tutorial oficial](https://www.tripo3d.ai/tutorials/tripo-ai-image-to-3d-tutorial).
