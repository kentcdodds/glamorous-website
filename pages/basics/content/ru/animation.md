---
title: Анимация
codeSandboxId: 31VMyP7XO
---

Для того, чтобы создавать анимацию с glamorous, вы можете использовать
обычный CSS transitions - для простых вещей, а для продвинутых можете 
использовать `keyframes` из `glamor`'овского `css.keyframes` API.

```interactive
// import * as glamor from 'glamor'

// Задайте стили анимации
const animationStyles = props => {
  const bounce = glamor.css.keyframes({
    '0%': { transform: `scale(1.01)` },
    '100%': { transform: `scale(0.99)` }
  })
  return {animation: `${bounce} 0.2s infinite ease-in-out alternate`}
}

// Создайте элемент
const AnimatedDiv = glamorous.div(animationStyles)

render(
  <AnimatedDiv>
    Bounce.
  </AnimatedDiv>
)
```
