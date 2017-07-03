---
title: Travailler avec un CSS existant
---

Souvent, vous allez ajouter `glamorous` dans un projet existant qui utilise déjà
un CSS global. Pour ce cas, beaucoup d'API de `glamorous` facilitent le plus
possible ce travail.

```callout {title: 'Rappelez-vous de ceci', type: 'warning'}
Le but est de styliser les composants et réutiliser ces composants
en ayant du CSS dans du JS. Avec cela en tête, si vous avez besoin de styliser l'ensemble de votre application
(comme `html`/`body` ou ajouter des styles `reset`), vous ne le ferez pas avec
`glamorous`. Au lieu de cela, vous pouvez utiliser un CSS ordinaire ou l'API de glamor
pour injecter des styles globaux.

En plus, plutôt que d'utiliser du CSS pour styliser une balise `a` avec un CSS global,
vous devriez créer un composant `Link` avec tous les styles dont vous avez besoin et
le réutiliser.
```

```
// TODO
```
