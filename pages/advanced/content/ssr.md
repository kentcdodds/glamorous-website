---
title: Server Side Rendering
---

Because both `glamor` and `react` support SSR, glamorous does too! I actually do this
on [my personal site](https://github.com/kentcdodds/kentcdodds.com) which is generated at build-time
on the server. Learn about rendering
[`react` on the server](https://facebook.github.io/react/docs/react-dom-server.html) and
[`glamor` too](https://github.com/threepointone/glamor/blob/5e7d988211330b8e2fca5bb8da78e35051444efd/docs/server.md).

To perform server-side rendering, use `renderStatic` from <a href="">glamor</a>, which takes a callback. Render your component inside the callback and all of the calls to `css()` will be collected and generated html and css will be returned. This will also return an array of ids to rehydrate the styles for fast startup.

To perform rehydration, call `rehydrate` with the array of ids returned by `renderStatic`.

Example -

```jsx
import { renderStatic } from 'glamor/server';
import { rehydrate } from 'glamor';
import { render } from 'react-dom';
import ReactDOMServer from 'react-dom/server';

let { html, css, ids } = renderStatic(() => ReactDOMServer.renderToString(<App />))

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

### [](#usage-with-nextjs)Usage with Next.js

Check out [this](https://github.com/zeit/next.js/tree/master/examples/with-glamorous) example on how to use glamorous with [Next.js](https://github.com/zeit/next.js)

### [](#using-rehydrate)Using rehydrate

Glamorous might add duplicate styles to the page due to the intricate nature of es6 imports.

For example -

```js
import App from './App';

rehydrate(${JSON.stringify(ids)}); // ids returned by renderStatic

```

As import statements get transpiled before other statements, so `rehydrate` will be called after regardless of what order you list the statements. This will result in duplicate styles because `App` is imported first, so all the styles are added before `rehydrate` runs.

To tackle this problem, use a `require()` call to order the statements.

```js
rehydrate(${JSON.stringify(ids)});

const App = require('./App');
```

Or `rehydrate` must be run before any other style code if you use any other solution.
