---
title: Component as a selector
subtitle: How to use a component as a nested selector
codeSandboxId: zqrzxlwnvm
contributors:
  - kentcdodds
---

This demonstrates how to use a component as a selector. Right now
`glamorous` doesn't have great support for nested components.
This is actually intentional because it's not a pattern you should
generally follow (one of the nice parts of css-in-js is that it
allows you to not worry about the cascade of CSS).

To work around this isn't too challenging however. In this example,
we add a `className` to `FooterHeader` and then reference this in
the CSS of the `Footer` component.

