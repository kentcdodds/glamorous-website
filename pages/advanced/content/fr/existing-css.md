---
title: Working with existing CSS
---
Often you'll bring `glamorous` into an existing project which is already using global CSS. Many of the `glamorous` APIs make working with this as easy as possible.

```callout {title: 'Remember this', type: 'warning'} With CSS in JS, the goal is to style components and reuse those components. With this in mind, if you need to style your entire application (like `html`/`body` or add some `reset` styles), you wont do this with `glamorous`. Instead you can use regular CSS or use glamor's API for injecting global styles.

In addition, rather than using CSS to style an `a` tag with global CSS, you should create a `Link` component with all the styles you need and reuse that.

    <br />

// TODO ```