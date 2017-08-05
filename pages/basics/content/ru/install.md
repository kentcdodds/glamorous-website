---
title: Установка
---

Этот модуль распространяется через [npm](https://www.npmjs.com/), связанного с [node](https://nodejs.org) и должен быть 
установлен, как одна из зависимостей (`dependencies`) проекта:

```bash
npm install --save glamorous
```

Также, вам необходимо добавить `react` и `glamor` в ваш проект(если их там ещё нет):

```bash
npm install --save react glamor
```
>Внимание: Если вы используете React v15.5 или выше, вам также необходимо
>установить `prop-types`: `npm install --save prop-types`

Затем вы сможете использовать один из форматов модуля:

- `main`: `dist/glamorous.cjs.js` - экспортируется как CommonJS модуль
- `global`: `dist/glamorous.umd.js` и `dist/glamorous.umd.min.js` - экспортируются как umd модуль, который употребим в 
нескольких контекстах, наиболее значимый из которых - глобальный.
- `jsnext:main` и модуль: `dist/glamorous.es.js` - экспортируются с использованием ES modules спецификации, вам будет нужно настроить webpack, чтобы использовать этот файл, с помощью resolve.mainFields свойства.

Наиболее распространённый способ использования этого модуля через CommonJS:

```js
const glamorous = require('glamorous')
const {ThemeProvider} = glamorous
// итд.
```

Если вы используете transpiling(и/или используете jsnext:main):

```js
import glamorous, {ThemeProvider} from 'glamorous'

// вы можете импортировать нужный Glamorous Components (подробнее в разделе "Встроенные компоненты")
import {Div, H2} from 'glamorous'

// тэги с тем же именем, что и встроенные объекты JavaScript, импортируются с Tag суффиксом
// и имя тэга, содержащее тире, нужно писать в CamelCase
import {MapTag, ColorProfile} from 'glamorous'
```

Если вы хотите использовать глобально:

```html
<!-- Загрузка зависимостей -->
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/prop-types/prop-types.js"></script>
<script src="https://unpkg.com/glamor/umd/index.js"></script>
<!-- загрузка библиотеки -->
<script src="https://unpkg.com/glamorous/dist/glamorous.umd.js"></script>
<script>
// Используй window.glamorous здесь...
const glamorous = window.glamorous
const {ThemeProvider} = glamorous
</script>
```
