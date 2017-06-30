---
title: Animación
codeSandboxId: 31VMyP7XO
---

Para hacer animaciones con glamorous, puedes usar las transiciones regulares de CSS para cosas sencillas,
y para cosas más avanzadas, puedes usar `keyframes` a través de la API `css.keyframes` de `glamor`.

```interactive
// import * as glamor from 'glamor'

// Definimos los estilos de animación
const animationStyles = props => {
  const bounce = glamor.css.keyframes({
    '0%': { transform: `scale(1.01)` },
    '100%': { transform: `scale(0.99)` }
  })
  return {animation: `${bounce} 0.2s infinite ease-in-out alternate`}
}

// Definimos el elemento
const AnimatedDiv = glamorous.div(animationStyles)

render(
  <AnimatedDiv>
    Bounce.
  </AnimatedDiv>
)
```
