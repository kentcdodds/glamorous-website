---
title: Установка
---

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org) and should be installed as one of your project's `dependencies`:

```bash
npm install --save glamorous
```

This also depends on `react` and `glamor` so you'll need those in your project as well (if you don't already have them):

```bash
npm install --save react glamor
```

> NOTE: If you're using React v15.5 or greater, you'll also need to have
> `prop-types` installed: `npm install --save prop-types`

You can then use one of the module formats:

- `main`: `dist/glamorous.cjs.js` - exports itself as a CommonJS module
- `global`: `dist/glamorous.umd.js` and `dist/glamorous.umd.min.js` - exports itself as a umd module which is consumable in several environments, the most notable as a global.
- `jsnext:main` and module: `dist/glamorous.es.js` - exports itself using the ES modules specification, you'll need to configure webpack to make use of this file do this using the resolve.mainFields property.

The most common use-case is consuming this module via CommonJS:

```js
const glamorous = require('glamorous')
const {ThemeProvider} = glamorous
// etc.
```

If you're transpiling (and/or using the jsnext:main):

```js
import glamorous, {ThemeProvider} from 'glamorous'

// you can also import specific Glamorous Components (see section below on "Built-in" components)
import {Div, H2} from 'glamorous'

// tags with the same name as built-in JavaScript objects are importable with a Tag suffix
// and tag names that contain dashes are transformed to CamelCase
import {MapTag, ColorProfile} from 'glamorous'
```

If you want to use the global:

```html
<!-- Load dependencies -->
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/prop-types/prop-types.js"></script>
<script src="https://unpkg.com/glamor/umd/index.js"></script>
<!-- load library -->
<script src="https://unpkg.com/glamorous/dist/glamorous.umd.js"></script>
<script>
// Use window.glamorous here...
const glamorous = window.glamorous
const {ThemeProvider} = glamorous
</script>
```
