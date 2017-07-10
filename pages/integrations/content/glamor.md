---
title: '[`glamor`](https://github.com/threepointone/glamor)'
contributors:
  - paulmolluzzo
---

You can use `glamor` to define CSS and use the `className` to apply styles to a `glamorous` component. This is pretty handy for creating reusable style objects, or doing fun things like keyframe animations.

```interactive
const { css } = glamor

// make the keyframes with glamor
const bounce = css.keyframes({
  '0%': { transform: `scale(1.1)` },
  '100%': { transform: `scale(0.9)` }
})

// create a component with style
const AnimatedDiv = glamorous.div({
  fontSize: 50,
  width: '100%',
  textAlign: 'center',

  // animate the div with the keyframes
  animation: `${bounce} 0.25s infinite ease-in-out alternate`
})

render(
  <AnimatedDiv>😎</AnimatedDiv>
)
```
