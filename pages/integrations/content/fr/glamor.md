---
title: '[`glamor`](https://github.com/threepointone/glamor)'
contributors:
  - paulmolluzzo
  - igitscor
---

Vous pouvez utiliser `glamor` pour définir un style CSS et utiliser l'attribut
`className` pour l'appliquer à un composant `glamorous`. Ceci est très pratique
pour créer des objets réutilisable pour du la gestion du style ou faire des choses
amusantes comme des animations et la gestion des keyframes.

```interactive
const { css } = glamor

// Déclaration des keyframes avec glamor
const bounce = css.keyframes({
  '0%': { transform: `scale(1.1)` },
  '100%': { transform: `scale(0.9)` }
})

// Création d'un composant utilisant le style défini auparavant
const AnimatedDiv = glamorous.div({
  fontSize: 50,
  width: '100%',
  textAlign: 'center',

  // Animer le div avec les keyframes
  animation: `${bounce} 0.25s infinite ease-in-out alternate`
})

render(
  <AnimatedDiv>😎</AnimatedDiv>
)
```
