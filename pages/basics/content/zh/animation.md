---
title: 动画
codeSandboxId: 31VMyP7XO
---

要用glamorous做动画的话，简单的可以用CSS transition做，如果是复杂的工作你可以通过`glamor`的`css.keyframes`API用`keyframes`做。

```interactive
// import * as glamor from 'glamor'

// 定义动画的样式
const animationStyles = props => {
  const bounce = glamor.css.keyframes({
    '0%': { transform: `scale(1.01)` },
    '100%': { transform: `scale(0.99)` }
  })
  return {animation: `${bounce} 0.2s infinite ease-in-out alternate`}
}

// 定义组件
const AnimatedDiv = glamorous.div(animationStyles)

render(
  <AnimatedDiv>
    Bounce.
  </AnimatedDiv>
)
```
