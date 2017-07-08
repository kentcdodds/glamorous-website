---
title: Instalación
subtitle: Cualquier cosa
---

Este módulo se distribuye a través de [npm](https://www.npmjs.com/) que viene incluido con [node](https://nodejs.org) y debe ser instalado como una de las `dependencias` de tu proyecto:

```bash
npm install --save glamorous
```

También depende de `React` y `glamor` por lo que también los necesitarás en tu proyecto (si no los tienes ya):

```bash
npm install --save react glamor
```

> NOTA: Si estás utilizando React v15.5 o superior, también necesitarás tener
> `prop-types` instalado: `npm install --save prop-types`

Puedes utilizar uno de los siguientes formatos de módulos:

- `main`: `dist/glamorous.cjs.js` - se exporta como un módulo CommonJS
- `global`: `dist/glamorous.umd.js` y `dist/glamorous.umd.min.js` - se exporta como un módulo umd que es consumible en varios entornos, el más notable es como global.
- `jsnext:main` y el módulo: `dist/glamorous.es.js` - se exporta usando la especificación de módulos ES, necesitará configurar webpack para hacer uso de este archivo, puedes hacerlo utilizando la propiedad resolve.mainFields.

El caso de uso más común es consumir este módulo a través de CommonJS:

```js
const glamorous = require('glamorous')
const {ThemeProvider} = glamorous
// etc.
```

Si estás transpilando (y/o usando jsnext:main):

```js
import glamorous, {ThemeProvider} from 'glamorous'

// también puedes importar Componentes Glamorous específicos (consulta la sección siguiente sobre los componentes "Incorporados")
import {Div, H2} from 'glamorous'

// las etiquetas con el mismo nombre que los objetos JavaScript incorporados son importables con un sufijo Tag
import {MapTag, ColorProfile} from 'glamorous'
```

Si deseas utilizar la opción global:

```html
<!-- Agrega las dependencias -->
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/prop-types/prop-types.js"></script>
<script src="https://unpkg.com/glamor/umd/index.js"></script>
<!-- Agrega la librería -->
<script src="https://unpkg.com/glamorous/dist/glamorous.umd.js"></script>
<script>
// Y usa window.glamorous aquí...
const glamorous = window.glamorous
const {ThemeProvider} = glamorous
</script>
```
