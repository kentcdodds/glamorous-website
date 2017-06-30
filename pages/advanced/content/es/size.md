---
title: Optimizando el tamaño de la distribución
---

Si la cantidad de kilobytes es una prioridad para tu aplicación, considera
usar la versión "tiny" de `glamorous`.
Esta es una versión "miniatura" con algunas limitaciones:

1. No incluye fábricas de componentes (`glamorous.article({/* styles */ }) `)
Tienes que crear tú mismo las que necesites (`glamorous('article')({/* styles */ }) `)
2. No incluye los componentes de `glamorous` por defecto (`glamorous.Span`)
3. No incluye filtración automática de props para estilos dinámicos.  En su lugar, tienes que
colocar estos estilos en una prop `glam` especial (mira el ejemplo debajo).
4. Si necesitas usar `ThemeProvider` o `withTheme` los tienes que importar manualmente.
No son exportados dentro de `glamorous tiny` como lo son en `glamorous`

Este es un ejemplo de lo que puedes lograr con `glamorous tiny`.

```jsx
import React from 'react'
import glamorous from 'glamorous/dist/glamorous.es.tiny'

const Comp = glamorous('div')({
  color: 'red'
}, (props) => ({
  fontSize: props.glam.big ? 20 : 12
}))
function Root() {
  return (
    <Comp
      glam={{ big: true }}
      estoSeraReenviadoYReactMostraraUnaAdvertencia
    >
      Hola
    </Comp>
  )
}

export default Root
```

```callout {title: 'Una mejor experiencia', type: 'success'}
Recomendamos usar ya sea
[`babel-plugin-module-resolver`](https://github.com/tleunen/babel-plugin-module-resolver)
o la opción [`resolve.alias`](https://webpack.js.org/configuration/resolve/#resolve-alias)
en la configuración de Webpack para que no tengas que importar desde el path completo.

Tienes las siguientes opciones disponibles:

1. `glamorous/dist/glamorous.es.tiny.js` - elige esta si usas Webpack@>=2 o Rollup
2. `glamorous/dist/glamorous.cjs.tiny` - elige esta si no estás transpilando ESModules
3. `glamorous/dist/glamorous.umd.tiny.js` - elige esta si estás incluyéndola como un script (también hay una versión `.min.js`)

El tamaño actual de `glamorous/dist/glamorous.umd.tiny.min.js` es: [![tiny size][tiny-size-badge]][unpkg-dist]
[![tiny gzip size][tiny-gzip-badge]][unpkg-dist]

```callout {title: 'Aviso importante', type: 'danger'}
Ten en cuenta que `glamorous` depende de `glamor`. A la hora de añadir `glamorous`
considera el tamaño total de las dos librerias, si aún no usas `glamor`.
```

[tiny-gzip-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.tiny.min.js?compression=gzip&label=gzip%20size&style=flat-square
[tiny-size-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.tiny.min.js?label=size&style=flat-square
[unpkg-dist]: https://unpkg.com/glamorous/dist/
[glamor-gzip-badge]: http://img.badgesize.io/https://unpkg.com/glamor/umd/index.min.js?compression=gzip&label=gzip%20size&style=flat-square
[glamor-size-badge]: http://img.badgesize.io/https://unpkg.com/glamor/umd/index.min.js?label=size&style=flat-square
[unpkg-glamor]: https://unpkg.com/glamor/umd/
