---
title: Breadcrumbs
subtitle: Component that adds 'complex' pseudo elements
codeSandboxId: 64rowp6z53
contributors:
  - kristian-puccio
---

Here is an exaple of creating a `Breadcrumb` style list of naviation links.
It is using css selectors based on the `this` selector `&` to style it's sub elements based on the position in the list.
It also adds pseudo elements to seperate the links.

Note I had to do some funky specificity hacks to get the color of the link applied.
