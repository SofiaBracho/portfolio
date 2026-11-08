# Instagram · Posts 03–04

Tanda para revisión en orden de publicación. Los posts 01 y 02 ya están programados, según Sofía.

| Post | Formato | Archivos en orden |
| --- | --- | --- |
| 03 · Era un cambio de cinco minutos | Imagen única, 1080 × 1350 | [Portada aprobada](03-cinco-minutos.png) |
| 04 · La IA lo escribió. ¿Lo revisaste? | Carrusel, 8 láminas de 1080 × 1350 | [01 · Portada](../../carousel-1080x1350/cover-04.png) · [02](04-02.png) · [03](04-03.png) · [04](04-04.png) · [05](04-05.png) · [06](04-06.png) · [07](04-07.png) · [08 · CTA](04-08.png) |

## 03 · Humor dev

**Caption aprobado**

Moví un botón. El login, los permisos y la navegación se tomaron el día libre.

**Texto alternativo**

Sobre fondo amarillo, el avatar de Sofía mira la terminal con sorpresa y decepción, sentada en una silla azul de terciopelo. El navegador muestra un 403 y la terminal marca «3 errores» después de ejecutar las pruebas. La firma negra «SOFÍA BRACHO» aparece sobre el fondo amarillo.

La revisión se hizo con imagegen a partir de la portada original. Se pidió una expresión de sorpresa y decepción con cejas sutiles, la silla azul de referencia, dos ventanas de desarrollo legibles y la firma negra directamente sobre amarillo.

## 04 · IA práctica

**Caption**

La IA terminó el cambio. Antes de integrarlo, abre el diff y comprueba que resolvió lo que pediste.

Prueba la ruta habitual y los casos límite. Si cambió la interfaz, recorre el flujo en el navegador, tanto en escritorio como en móvil. Corre el linter, el análisis estático y las pruebas relevantes. Después, comparte el diff con un compañero, otro agente o una sesión nueva para que lo revise con el objetivo y la evidencia a mano.

¿Qué comprobación te ha ahorrado más problemas?

**Texto alternativo por lámina**

1. Una hoja de código ampliada y marcada en amarillo acompaña la pregunta «La IA lo escribió. ¿Lo revisaste?».
2. Terminal con un git diff en `src/access.ts`. La condición para editar cambia de tener usuario a tener el rol «editor».
3. Cuatro tarjetas de casos límite. Muestra un estado vacío, bloquea acciones sin permisos, conserva lo escrito si falla la red y guarda una sola vez ante un doble envío.
4. Una ventana de navegador muestra el error al guardar un perfil en escritorio y móvil. Revisa carga, error y éxito con teclado y pantalla táctil.
5. Panel de CI con dos comprobaciones. ESLint aprueba y el chequeo de tipos falla. Abre el resultado fallido para ubicar el tipo incompatible.
6. La misma prueba de regresión aparece como FAIL antes del arreglo y PASS después.
7. Chat de revisión. La otra persona confirma que tiene el diff y las pruebas. Sofía pregunta «¿Qué podría romperse y cómo lo comprobarías?».
8. «Guárdalo para tu próxima revisión». Tres iconos muestran Me gusta, Comentar y Guardar. El marcador de Guardar está relleno de amarillo. «¿Qué paso agregarías? Cuéntamelo en comentarios».
