---
title: react-transition-group
subtitle: An example of using glamorous together with react-transition-group
codeSandboxId: rm7r6z22xm
contributors:
  - knpwrs
---

This shows how to combine `glamorous` with the [`TransitionGroup`] and
[`CSSTransition`] components from [`react-transition-group`]. When done
properly, simply by mounting and unmounting your components you will get
entrance _and_ exit animations (CSS animations alone only provide a way to
animate mounting components, not unmounting components).

Mounting a component in the embedded example works as such:

1. The component is mounted.
1. The `fade-enter` class is applied and the `opacity` is set to `0`.
1. The `fade-enter-active` class is applied and the `opacity` transitions to
   `1`.
1. Once the transition is done, both the `fade-enter` and `fade-enter-active`
   classes are removed.

Unmounting a component works similarly:

1. The `fade-exit` class is applied to the mounted component. The opacity
   remains at `1`. Technically, you don't need a selector for this class since
   it doesn't do anything for us, but it's a good idea to be explicit when
   dealing with [`react-transition-group`].
1. The `fade-exit-active` class is applied to the mounted component and the
   `opacity` transitions to `0`.
1. Once the transition is done, the component is unmounted.

[`CSSTransition`]: https://reactcommunity.org/react-transition-group/#CSSTransition
[`TransitionGroup`]: https://reactcommunity.org/react-transition-group/#TransitionGroup
[`react-transition-group`]: https://reactcommunity.org/react-transition-group
