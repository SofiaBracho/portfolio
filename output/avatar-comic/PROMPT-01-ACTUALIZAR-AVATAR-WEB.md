# Actualizar avatar del portafolio

Trabaja en `C:/Code/portfolio/portfolio`. Quiero sustituir el personaje antiguo de mi portafolio por mi nuevo avatar de Sofía, con acabado cómic semirrealista 3D.

Lee `AGENTS.md`, `output/social-design/CONTEXTO-PARA-AGENTES.md` y `output/avatar-comic/README.md`. Inspecciona estado de Git y cambios locales antes de editar: existen cambios ajenos a esta tarea. Conserva identidad, gafas, rizos, ropa y texturas del avatar aprobado.

Fuentes:
- Modelo original recuperado: `3d/Sofia-segmented-rigged-eyelashes-eyeliner-RECOVERED.blend`.
- Nuevo editable estilizado: `3d/Sofia-comic-semirealista.blend`.
- Export preparado para integración: `3d/Sofia-comic-semirealista.glb`; revisa sus límites y validaciones en el README antes de usarlo.
- Avatar web antiguo: `3d/avatar_web.glb`. ES OTRO PERSONAJE. No copiar su geometría, rostro, materiales ni rig sobre el nuevo modelo.
- Integración existente: `3d/hero-avatar.js`; encuentra también sus importaciones, estilos, carga de recursos y configuración del sitio.

Sustituye el avatar manteniendo comportamiento y composición del portafolio. Primero comprueba orientación, altura, encuadre, materiales mate, ojos con brillo contenido, gafas, pestañas y contornos. Los contornos son geometría invertida vinculada al mismo rig: deben conservar backface culling y acabado unlit. No convertirlos en superficies de doble cara. Reproduce la intención visual de los renders, ajustando iluminación del navegador.

No asumir que las cinco animaciones del avatar antiguo funcionan en el nuevo: compara jerarquías, ejes, pose de reposo y proporciones. Evalúa transferir exclusivamente movimiento mediante retargeting y horneado; revisa saludo, caminar, reposo, pensar y teléfono. Si faltan acciones en el nuevo GLB, prepara las necesarias y comprueba deformación real antes de conectarlas. Conserva los archivos originales; usa copias para pruebas. Si no puedes completar una animación, deja un estado visual estable y explica la función pendiente; no simules que funciona.

Verifica carga y comportamiento en móvil, escritorio y Safari/iPhone cuando exista acceso. Mide tamaño de descarga, errores, encuadre, transiciones, carga diferida, consumo y pausa al ocultar la pestaña. No sacrifiques rostro o silueta solo para reducir tamaño. No dupliques modelos o texturas pesados sin necesidad.

Entrega cambios locales revisables, capturas y resultados concretos; distingue pruebas de navegador de pruebas en iPhone real. No hagas commit, push ni despliegue sin mi autorización explícita. Esta tarea solo actualiza el portafolio; la mini app privada se desarrolla aparte.
