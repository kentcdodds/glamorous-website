---
title: Рендеринг на сервере
---

Так как и `glamor` и `react` поддерживают рендеринг на сервере (SSR), то и glamorous его поддерживает!
Я использую это на [своем личном сайте](https://github.com/kentcdodds/kentcdodds.com), который генерируется во время билда на сервере. Узнайте больше о рендеринге
[`react` на сервере](https://facebook.github.io/react/docs/react-dom-server.html) и
[`glamor`](https://github.com/threepointone/glamor/blob/5e7d988211330b8e2fca5bb8da78e35051444efd/docs/server.md).

Для рендера на сервере используйте `renderStatic` из `glamor`, который принимает колбэк (функцию обратного вызова). При рендере вашего компонента в колбэке, все вызовы `css()` будут собраны, после чего будет возвращен сгенерированный html и css. Также будет возвращен массив id для регидрации стилей, необходимой для быстрого запуска.

Для регидрации, вызовите `rehydrate` с массивом id, возвращенным из `renderStatic`, в качестве аргумента.

Пример -

```jsx
import {renderStatic} from 'glamor/server'
import {rehydrate} from 'glamor'
import {render} from 'react-dom'
import ReactDOMServer from 'react-dom/server'

let {html, css, ids} = renderStatic(() => ReactDOMServer.renderToString(<App />))

return `
  <html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="./bundle.js"></script>
      <script>
        rehydrate(${JSON.stringify(ids)});
        render(<App />, document.getElementById('app'));
      </script>
    </body>
  </html>
`
```

### Использование с Next.js

Посмотрите на [этот](https://github.com/zeit/next.js/tree/master/examples/with-glamorous) пример использования glamorous с [Next.js](https://github.com/zeit/next.js)

### Использование rehydrate

Из-за сложной природы es6 импортов, glamorous может добавлять дубликаты стилей на страницу.

Например:

```js
import App from './App';

rehydrate(${JSON.stringify(ids)}) // id, полученные из renderStatic
```

Так как import транспилируется раньше остальных выражений, то `rehydrate` будет вызван после него, не зависимо, в каком порядке вы указываете выражения. Это приводит к созданию дублированных стилей, потому что первым импортируется `App` и все стили добавляются прежде, чем будет выполнен `rehydrate`.

Чтобы избежать этой проблемы, используйте `require()` для выполнения выражений в определенном порядке.

```js
rehydrate(${JSON.stringify(ids)});

const App = require('./App');
```

Если же вы используете какое-то другое решение, `rehydrate` должен всегда вызываться раньше любого другого кода, связанного со стилями.
