---
title: Working with existing CSS
contributors:
  - kentcdodds
---

Often you'll bring `glamorous` into an existing project which is already
using global CSS. Many of the `glamorous` APIs make working with this
as easy as possible.

`glamorous` works out of the box with CSS modules too. It Just Works™.

Here's an example using [Bootstrap](https://getbootstrap.com):

```jsx
// source https://v4-alpha.getbootstrap.com/components/alerts/

import React from 'react';
import { render } from 'react-dom';
import glamorous from 'glamorous';

const Alert = glamorous.div('alert', props => `alert-${props.type}`);

function App() {
  return (
    <glamorous.Div maxWidth={600} margin="70px auto" fontSize={24}>
      <Alert type="success">
        <strong>Success!</strong> Tada! 🎉
      </Alert>
      <Alert type="info">
        <strong>Heads up!</strong> Some info here ℹ️
      </Alert>
      <Alert type="warning">
        <strong>Warning!</strong> Something's up ⚠️
      </Alert>

      <Alert type="danger">
        <strong>Oh snap!</strong> This is not good 🚨
      </Alert>
    </glamorous.Div>
  );
}

render(<App />, document.getElementById('root'));
```

> Try this out in your browser [here](https://codesandbox.io/s/73W7nZ6BQ)!

If <Alert success /> suits your fancy better than <Alert type="success" /> that's simple:

```jsx
// source https://v4-alpha.getbootstrap.com/components/alerts/

import React from 'react';
import { render } from 'react-dom';
import glamorous from 'glamorous';

const Alert = glamorous.div('alert', props => {
  const types = ['success', 'info', 'warning', 'danger'];
  return types.reduce((all, t) => {
    if (props.hasOwnProperty(t)) {
      all = `${all} alert-${t}`;
    }
    return all;
  }, '');
});

function App() {
  return (
    <glamorous.Div maxWidth={600} margin="70px auto" fontSize={24}>
      <Alert success>
        <strong>Success!</strong> Tada! 🎉
      </Alert>
      <Alert info>
        <strong>Heads up!</strong> Some info here ℹ️
      </Alert>
      <Alert warning>
        <strong>Warning!</strong> Something's up ⚠️
      </Alert>
      <Alert danger>
        <strong>Oh snap!</strong> This is not good 🚨
      </Alert>
    </glamorous.Div>
  );
}

render(<App />, document.getElementById('root'));
```

> Try this out in your browser [here](https://codesandbox.io/s/mwVv89V5O)!

```callout {title: 'Remember this', type: 'warning'}
With CSS in JS, the goal is to style components and reuse those
components. With this in mind, if you need to style your entire application
(like `html`/`body` or add some `reset` styles), you wont do this with
`glamorous`. Instead you can use regular CSS or use glamor's API for
injecting global styles.

In addition, rather than using CSS to style an `a` tag with global CSS,
you should create a `Link` component with all the styles you need and
reuse that.
```
