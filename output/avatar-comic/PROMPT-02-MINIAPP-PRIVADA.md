# Mini app privada con avatar para mi novio

Quiero crear una web app para iPhone, instalable en pantalla de inicio, como regalo privado para mi novio. Tendrá mi avatar Sofía en 3D y botones para reproducir gestos y animaciones. Solo él debe tener acceso de uso; yo necesito acceso de administración y pruebas. Construye una primera versión pequeña y revisable, empezando por validar el modelo y la ruta de animación.

Contexto del avatar disponible en `C:/Code/portfolio/portfolio`:
- Lee `AGENTS.md`, `output/social-design/CONTEXTO-PARA-AGENTES.md` y especialmente `output/avatar-comic/README.md` y `audit.json`.
- Fuente estilizada: `3d/Sofia-comic-semirealista.blend`.
- Export para integración: `3d/Sofia-comic-semirealista.glb`.
- Original de respaldo: `3d/Sofia-segmented-rigged-eyelashes-eyeliner-RECOVERED.blend`.
- `3d/avatar_web.glb` ES OTRO PERSONAJE y no representa este avatar.
- Preserva cara, gafas, rizos, ropa, texturas, UVs y estilo cómic semirrealista: materiales mate, ojos sin brillo excesivo, contornos finos que acompañan al rig.

Primero identifica un espacio de trabajo separado del portafolio. No alteres su integración web para construir esta app. Aprovecha assets mediante copia controlada y registra procedencia. Si falta una preferencia que impide crear ese espacio, pregunta mientras avanzas en inspección y diseño técnico.

1. Audita rig, pesos, topología y presupuesto móvil antes de prometer que el modelo está listo. Comprueba pose de reposo, escala, ejes, transformaciones, jerarquía, influencias por vértice, suma de pesos, piezas rígidas, pestañas, gafas y pelo. Examina costuras entre piezas segmentadas, hombros, axilas, codos, muñecas, caderas y rodillas. Comprueba existencia de controles faciales o shape keys para parpadeo, sonrisa y beso; no confundas movimiento de cabeza con expresión facial.

2. Investiga opciones gratuitas actuales con fuentes oficiales y sus condiciones. Compara al menos Mixamo y animación/retargeting en Blender; añade otra alternativa gratuita solo si aporta una ventaja concreta. Separa coste, calidad de movimiento, compatibilidad del rig, licencia, privacidad al subir mi modelo y esfuerzo de corrección. No pagar ni contratar servicios por defecto. No decidir por la fluidez de un preview: prueba el mismo saludo, flexión de codo, giro de hombro y flexión de rodilla sobre ESTE modelo. Usa retargeting que preserve el rig cuando sea viable; conserva original antes de cualquier nuevo rigging. El antecedente de ActorCore fue un resultado de animación malo, por lo que no lo consideres validado.

3. Recomienda una ruta basándote en los resultados. Considera Mixamo para movimientos generales y Blender para correcciones y gestos personales, pero no lo declares ganador sin comprobar adaptación. Presenta una prueba corta real con hoja de poses y reproducción. Mide pesos inválidos, estiramiento y colapso de articulaciones; inspecciona visualmente clipping y costuras. Corrige problemas confirmados. No prometas ausencia de deformaciones en movimientos que no se probaron.

4. Primer alcance: reposo y saludo; después beso, celebración y un gesto de cariño. Un beso creíble puede requerir trabajo facial adicional. Mantén un solo avatar cargado, clips nombrados, transiciones suaves y retorno a reposo. Decide comportamiento ante pulsaciones repetidas. Optimiza texturas, materiales, draw calls y contornos antes de reducir geometría que sostiene articulaciones o rostro. Define un presupuesto inicial medible; verifica rendimiento, memoria y temperatura en iPhone real cuando sea posible. Etiqueta lo no verificado.

5. Diseña acceso privado REAL. Un enlace oculto o contraseña comprobada solo en JavaScript no cumple. Evalúa una puerta de acceso como Cloudflare Access con lista de correos exactos y código de un solo uso, o autenticación de servidor equivalente. Verifica coste vigente y restricciones antes de elegir. Solicita su correo solo cuando sea necesario para configuración y no lo publiques en el repositorio. Sin registro público ni aprobación por dominio completo. Protege también GLB, texturas, audio, API y rutas auxiliares, y bloquea acceso directo al origen o a URLs alternativas del proveedor. Usa HTTPS, sesiones seguras, expiración, cierre y revocación. No guardes secretos en el frontend.

6. Prueba acceso autorizado, correo no autorizado, sesión expirada, cierre de sesión, URL directa al GLB/textura y bypass del origen. Define caché y service worker: para la primera versión prioriza control de acceso verificable sobre funcionamiento offline. No afirmar revocación inmediata de contenido ya descargado; explica ese límite brevemente. No incluyas datos íntimos en páginas o assets públicamente accesibles. Este mismo avatar podrá aparecer en mi portafolio público: protege la app y su contenido exclusivo sin prometer que un modelo publicado por separado sea secreto.

Implementa una primera versión local y prepara una propuesta concreta de alojamiento y acceso. Continúa con lo que no dependa de mis datos mientras esperas respuestas. Publicación, configuración de dominio y acceso externo requieren mi autorización sobre el resultado concreto. Entrega código local, evidencia visual, comparación de métodos con fuentes, auditoría del rig, decisiones de seguridad y una lista corta de lo que necesita prueba en mi iPhone.

Fuentes iniciales para volver a verificar:
- Mixamo FAQ: https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html
- Blender: https://docs.blender.org/manual/en/latest/
- Cloudflare Access: https://developers.cloudflare.com/cloudflare-one/access-controls/policies/common-policies/
- Web apps en iOS: https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/
