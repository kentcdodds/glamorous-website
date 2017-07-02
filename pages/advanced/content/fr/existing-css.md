---
title: Travailler avec un CSS existant
---
Souvent, vous allez ajouter `glamorous` dans un projet existant qui utilise déjà un CSS global. Pour ce cas, beaucoup d'API de `glamorous` facilitent le plus possible ce travail.

```callout {title: 'Remember this', type: 'warning'} With CSS in JS, the goal is to style components and reuse those components. With this in mind, if you need to style your entire application (like `html`/`body` or add some `reset` styles), you wont do this with `glamorous`. Instead you can use regular CSS or use glamor's API for injecting global styles.

In addition, rather than using CSS to style an `a` tag with global CSS, you should create a `Link` component with all the styles you need and reuse that.

    <br />

// TODO ```