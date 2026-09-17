# CiberCellHN Mobile

Proyecto académico en NativeScript + Angular para catálogo de celulares.

## Requisitos incluidos
1. ListView con plantilla anidada y FlexboxLayout.
2. Navegación a detalle con RouterExtensions.navigate().
3. Botón de actualización que agrega celulares aleatorios; puede adaptarse al plugin PullToRefresh según la versión instalada.
4. Diálogo action para modificar categorías.
5. Toast de confirmación.
6. Two-way binding con [(ngModel)] en búsqueda y formulario.
7. Directiva personalizada appMinProductName para validar mínimo de 3 caracteres.
8. Gesto longPress en cada producto.
9. Animación rotate en el botón de detalle.
10. Splash screen Android personalizado en App_Resources.

## Instalación
1. Instala Node.js LTS y NativeScript CLI: `npm install -g nativescript`.
2. Abre esta carpeta en VS Code.
3. Ejecuta `npm install`.
4. Ejecuta `ns doctor` para revisar Android Studio, SDK y variables de entorno.
5. Ejecuta `ns run android`.

## Nota de compatibilidad
NativeScript y sus plugins cambian entre versiones. Si tu CLI usa otra versión de Angular/NativeScript, ejecuta `ns create prueba --ng` para identificar la versión compatible y ajusta las dependencias.
