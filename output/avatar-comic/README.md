# Sofía · avatar cómic semirrealista 3D

Entrega local del 15 de octubre de 2026. Versión estilizada del modelo recuperado solicitado por Sofía. Renders reales de Blender 5.2.2 LTS.

## Archivos

- Original conservado: `3d/Sofia-segmented-rigged-eyelashes-eyeliner-RECOVERED.blend`.
- Nuevo editable: `3d/Sofia-comic-semirealista.blend`.
- Export móvil: `3d/Sofia-comic-semirealista.glb`.
- Evidencia y números: `output/avatar-comic/audit.json`.
- Comparación bajo la misma iluminación: `before-face.png` y `comic-face-front.png`; `before-full.png` y `comic-full-front.png`.
- Vistas adicionales: `comic-face-threequarter.png`, `comic-full-threequarter.png`.
- Referencia Cycles corregida: `comic-face-cycles.png`.
- Verificación del GLB reimportado: `glb-reimport-face.png`, `glb-reimport-full.png`.
- Poses diagnósticas: `rig-check-arms.png`, `rig-check-knee-twist.png`. Son pruebas estáticas, no clips finales de animación.

## Estilo aplicado

- Piel mate: roughness 0,76, especular 0,20, metallic 0, sin capa de barniz. Relieve normal reducido al 18 %.
- Ojos: roughness 0,55 frente a 0,12 original, especular 0,16, coat 0 frente a 0,30 original. Textura e iris originales conservados.
- Pelo, tejido y calzado con respuesta mate y normales suaves; colores, rizos, gafas, ropa y pestañas originales conservados.
- Contornos oscuros finos mediante geometría de normales invertidas: grosor 0,00055–0,001 unidades del modelo según pieza. Copian rig y pesos para acompañar deformación. No se aplicaron a ojos, boca, pestañas ni delineador para evitar ruido y manchas faciales.
- Materiales Principled/PBR portables y estudio neutro. Acabado cómic semirrealista con luz continua: no depende de Shader to RGB, compositor, Freestyle ni bandas de cel shading exclusivas de Eevee.
- Las caras internas del contorno se vuelven transparentes en Cycles; también se evita que el contorno proyecte sombra sobre el cuerpo. El GLB usa culling y material unlit para representar ese contorno.

## Preservación y revisión

La comparación programática con el archivo recuperado confirmó coincidencia exacta de posiciones, caras, UVs, pesos, jerarquía y matrices de reposo de huesos de las 18 piezas originales. Cambiaron materiales y suavizado de superficies; se añadieron mallas de contorno. Se retiraron duplicados históricos ocultos y objetos de respaldo solo de la copia nueva.

- 65 huesos originales.
- 17.555 triángulos base y 9.096 de contorno: 26.651 en total.
- Cero vértices sin peso en las piezas originales.
- El rig fuente llega a seis influencias por vértice; las sumas de pesos difieren de 1 en menos de 0,000001. El GLB conserva las cuatro influencias más fuertes y las normaliza. Revisar deformación del export en movimiento antes de validarlo para producción.
- Sin acciones guardadas ni shape keys faciales. No hay un set de gestos listo para reproducir.
- Renders Eevee frontales y de tres cuartos revisados. Dos poses estáticas de brazos/cabeza y rodilla/tronco revisadas: sin separaciones grandes visibles en esas vistas. Esto no certifica todos los ángulos, movimientos ni contacto entre piezas.
- Se detectó y corrigió el oscurecimiento de la malla de contorno en Cycles; referencia final revisada.
- GLB final reimportado en Blender y renderizado; vista de rostro revisada. Verificados contornos de una cara con `KHR_materials_unlit`, un esqueleto y ausencia de animaciones. Esto no sustituye una prueba en navegador.

No se ha probado Mixamo, retargeting de una biblioteca completa, parpadeo/beso/sonrisa ni Safari/iPhone real. Para afirmar que el rig está preparado para la mini app, completar las pruebas pedidas en `PROMPT-02-MINIAPP-PRIVADA.md`.

## Integración del GLB

El export reduce atlas de color a 2048 px, normales a 1024 px y ojos a 512 px; conserva versiones de alta resolución dentro del editable. Incluye un esqueleto y contornos vinculados; no incluye luces ni cámara de revisión ni animaciones inventadas.

Tamaño aproximado: editable 86,4 MB; GLB 10,1 MB. GLB con 27 mallas, 8 materiales, 3 imágenes y un esqueleto. Es una base ligera para integración, con presupuesto de draw calls y pruebas de animación todavía por revisar.

Mantener contornos de una sola cara y unlit. Si se cambia a material de doble cara aparecerá una carcasa oscura que tapa al personaje. Evitar activar sombras del contorno. Materiales PBR reaccionan a la iluminación de la aplicación: ajustar luz y exposición mirando las referencias, en vez de prometer coincidencia exacta entre motores.

Se optimizó estructura y resolución de texturas; rendimiento, consumo y calidad final de navegador siguen pendientes de integración. No decimar pestañas, articulaciones o rostro solo por tamaño. Revisar draw calls y alternativas de contorno si el dispositivo objetivo lo exige.

## Próximas conversaciones

1. `PROMPT-01-ACTUALIZAR-AVATAR-WEB.md`: sustitución del antiguo avatar del portafolio.
2. `PROMPT-02-MINIAPP-PRIVADA.md`: auditoría de deformación, comparación gratuita de animación y web app privada.

`3d/avatar_web.glb` pertenece a otro personaje. No usarlo como fuente visual ni asumir que comparte rig. El portafolio y la mini app son trabajos separados.

## Referencias para decisiones futuras

[Mixamo FAQ](https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html) declara acceso gratuito con Adobe ID. Eso no valida automáticamente la calidad de deformación de este avatar.

[Políticas de Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/common-policies/) permite plantear lista de correos exactos; el prompt exige verificar la configuración, assets, origen, caché y revocación. No hay alojamiento ni protección configurados en esta entrega.

Si este mismo avatar se publica en el portafolio, su representación pública podrá descargarse; la privacidad de la mini app debe proteger sus páginas, contenido exclusivo y acceso, sin prometer secreto de un modelo publicado por separado.
