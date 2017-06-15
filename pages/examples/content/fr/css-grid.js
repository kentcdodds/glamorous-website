module.exports = {
  title: 'CSS Grid',
  subtitle: 'La meilleure solution pour la mise en page CSS',
  description: `
    [CSS Grid Layout](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout)
    est un outil de mise en page relativement nouveau pour le web. C'est incroyablement puissant et expressif
    et il permet de nouvelles mises en page qui étaient auparavant très difficiles ou totalement impossibles.

    Dans cet exemple, nous utilisons la fonctionnalité [~@supports~](https://developer.mozilla.org/fr/docs/Web/CSS/@supports)
    du CSS pour choisir CSS Grid dans les navigateurs lorsqu'il est disponible. Soyez conscient que
    tous les navigateurs ne supporteront pas ~@supports~.
  `.replace(/~/g, '`'),
  codeSandboxId: '2k8yll8qj',
  filename: __filename,
}
