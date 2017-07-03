---
title: Aceptar modificaciones de estilo
subtitle: Cómo exponer una API para reemplazar los estilos en un componente
contributors:
  - kentcdodds
---

Esto demuestra una forma en la que podrías tomar un componente reutilizable y exponer
un mecanismo para reemplazar estilos para componentes dentro del componente
usando un prop llamado `styleOverrides`.

El bit clave aquí es pasar `styleOverrides` al prop `theme`
de `ThemeProvider`. Porque es posible que todavía necesites usar el `theme`
para otras cosas, es bueno para el espacio de nombres de estos (como se muestra en este ejemplo).

A continuación, puedes escribir una pequeña función auxiliar (`getStyleOverrides`) Para añadir
esta capacidad de modificación a cada uno de sus componentes glamorous.
Incluso funciona con el prop `css`!
