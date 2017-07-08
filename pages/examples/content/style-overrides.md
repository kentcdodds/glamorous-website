---
title: Accept style overrides
subtitle: How to expose an API to override styles in a component
codeSandboxId: ERNVNoxEv
contributors:
  - kentcdodds
---

This demonstrates one way that you could take a reusable component and expose
a mechanism for overriding styles for components within the component using
a prop called `styleOverrides`.

The key bit here is passing `styleOverrides` to the `theme` prop of the
glamorous `ThemeProvider`. Because you may still need to use the `theme`
for other things, it's nice to namespace these (like this example does).

Then you can write a little helper function (`getStyleOverrides`) to make
adding this overrides capability to each of your glamorous components.
It even works with the `css` prop!
