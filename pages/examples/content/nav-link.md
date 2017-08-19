---
title: nav link
subtitle: An example of integrating with a component that have built in classNames already.
codeSandboxId: 6v950z9vrn
contributors:
  - kristian-puccio
---

This shows styling of a react-router NavLink.
The [NavLink component](https://reacttraining.com/react-router/web/api/NavLink) sets a class on the component when it's in it's active state. You can configure the class that gets set and by default it's `.active`.
As glamorous generates dynamic classNames I haven't found a way to pass a name to it. So instead the appoach shown here is to create a selector to target the className that the NavLink component adds.

With glamorous you can still use traditional css selectors! Just put the selector inside a ['.my-sector'] and put the styles you want applied inside an object. Just the same as you would for things like ':hover'.


