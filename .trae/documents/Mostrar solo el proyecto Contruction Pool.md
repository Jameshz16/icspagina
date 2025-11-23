## Cambios en código
- Editar `src/components/ProjectsSection.js` para dejar un único elemento en el arreglo `projects` (`src/components/ProjectsSection.js:5-18`).
- Mantener la imagen existente `'/assets/proyectpool/06le.jpg'` y cambiar el `title` a `Contruction Pool` exactamente como lo solicitaste.
- No modificar encabezados ni estilos; solo la visibilidad de proyectos.

## Implementación propuesta
- Reemplazar el arreglo por: `const projects = [{ title: 'Contruction Pool', image: '/assets/proyectpool/06le.jpg' }];`
- Verificar que el `map` existente renderice una sola tarjeta sin cambios adicionales.

## Verificación
- Iniciar el servidor de desarrollo y abrir la sección de proyectos.
- Confirmar que solo se muestra una tarjeta con el título `Contruction Pool` y la imagen correcta.

## Impacto
- La UI mostrará únicamente el proyecto solicitado en la sección de proyectos.
- No se afectan otras páginas ni lógicas; es un cambio acotado al componente.