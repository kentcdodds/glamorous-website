---
title: '[`preact`](https://preactjs.com/)'
contributors:
  - marzelin
---

This library supports preact out of the box. Just change module name from `glamorous` to `glamorous/preact` and you're all set.

If you don't want to type `glamorous/preact` every time, you can use [webpack's resolve.alias](https://webpack.js.org/configuration/resolve/#resolve-alias) or [babel's resolver plugin](https://github.com/tleunen/babel-plugin-module-resolver/) to shorten the module name to your liking.

```js
import { render, h } from "preact"
import { H1, Span } from "glamorous/preact"

const Heart = <Span color="tomato">❤</Span>

const App = () =>
  <H1 textDecoration="underline">
    glamorous {Heart} preact
  </H1>

render(
  <App/>,
  document.body
)
```
