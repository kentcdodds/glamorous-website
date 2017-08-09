---
title: Оптимизация размера
---

Если в вашем проекте размер является важным ограничением, вам стоит рассмотреть возможность использования "tiny" версии `glamorous`.
Это миниатюрная версия `glamorous` с рядом ограничений:

1. Отсутствие встроенных фабрик компонентов
(`glamorous.article({/* styles */ }) `)
  Так что вам придется создавать свои.
  (`glamorous('article')({/* styles */ }) `)
2. Отсутствие встроенных компонентов glamorous  (`glamorous.Span`)
3. Отсутствие фильтрации props для динамических стилей. Вместо этого вам
приедтся передавать их в специальном свойстве `glam` (смотри пример ниже).
4. Если вам нужен `ThemeProvider` или `withTheme`, придется импортировать их
вручную.
  Они не являются частью экспорта `glamorous/ tiny`, в отличие от `glamorous`.

Вот пример того, что вы сможете с этим сделать.

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
      thisWillBeForwardedAndReactWillWarn
    >
      ciao
    </Comp>
  )
}

export default Root
```

```callout {title: 'Улучшенный экспириенс', type: 'success'}

Рекомендуется использовать либо
[`babel-plugin-module-resolver`](https://github.com/tleunen/babel-plugin-module-resolver),
либо [`resolve.alias`](https://webpack.js.org/configuration/resolve/#resolve-alias)
конфигурацию с webpack, чтобы не приходилось импортировать с использованием
полного пути. 

У вас есть следующие варианты импорта:

1. `glamorous/dist/glamorous.es.tiny.js` - используйте вместе с Webpack@>=2 или Rollup
2. `glamorous/dist/glamorous.cjs.tiny.js` - используйте, если вы не делаете транспиляцию ESModules
3. `glamorous/dist/glamorous.umd.tiny.js` - ипользуйте, если хотите добавить через script тег (Также есть `.min.js` версия).
```

Текущий размер `glamorous/dist/glamorous.umd.tiny.min.js`: [![tiny size](http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.tiny.min.js?label=size&style=flat-square)](https://unpkg.com/glamorous/dist/)
[![tiny gzip size](http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.tiny.min.js?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/glamorous/dist/)

```callout {title: 'Важно', type: 'warning'}
Так как `glamorous` зависит от `glamor`, вам следует учитывать полный размер файлов, которые
вы добавите, если в вашем проекте еще нет `glamor`.
Текущий размер `glamor/umd/index.min.js`: [![glamor size](http://img.badgesize.io/https://unpkg.com/glamor/umd/index.min.js?label=size&style=flat-square)](https://unpkg.com/glamor/umd/)
[![glamor gzip size](http://img.badgesize.io/https://unpkg.com/glamor/umd/index.min.js?compression=gzip&label=gzip%20size&style=flat-square)][unpkg-glamor]
```
