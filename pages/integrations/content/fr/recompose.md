---
title: '[`recompose`](https://github.com/acdlite/recompose)'
contributors:
  - kentcdodds
  - igitscor
---

`glamorous` crée des composants simples, si vous souhaitez complexifier
ces composants, vous pouvez le faire facilement en les incluants dans un autre
composant:

```interactive {clickToRender: true, summary: 'Exemple d\'inclusion d'un composant glamorous'}
const Anchor = glamorous.a(props => ({
  color: props.dark ? 'darkblue' : 'blue',
}))

const DarkAnchor = props => <Anchor {...props} dark={true} />

render(
  <div>
    <Anchor href="#">Ancre normale</Anchor>
    <br />
    <DarkAnchor href="#">Ancre sombre</DarkAnchor>
  </div>
)
```

Si cela est un peu trop abstrait pour vous, alors vous pouvez utiliser [`recompose`](https://github.com/acdlite/recompose).
