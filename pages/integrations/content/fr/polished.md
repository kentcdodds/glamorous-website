---
title: '[`✨ polished`](https://polished.js.org/)'
codeSandboxId: 9Qo9kMgRZ
contributors:
  - bhough
---

`glamorous` fonctionne avec les mixins, les helpers et les raccourcis de `✨ polished` :

```js
const MyStyledParagraph = glamorous.p({
  fontSize: 20,
  color: lighten(0.5, '#000'),
})
```

Vous pouvez aussi utiliser l'[opérateur de décomposition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateur_de_d%C3%A9composition) sur les propriétés d'un objet pour appliquer des mixins de ✨ polished plus complexes directement sur des composants glamorous :

```js
function GlamorousLogo() {
  return (
    <glamorous.Div
      width={400}
      height={400}
      border="2px solid"
      borderColor={mix(0.5, '#fff', '#000')}
      {...borderRadius('top', '5px')}
    >
    </glamorous.Div>
  );
}
```
