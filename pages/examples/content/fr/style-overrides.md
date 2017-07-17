---
title: Accepter les surcharges de style
subtitle: Comment exposer une API pour surcharger les styles d'un composant
contributors:
  - kentcdodds
  - igitscor
---

Voici une explication de comment, avec un composant réutilisble, exposer
un mécanisme pour surcharger le style d'autres composants à l'aide d'une
propriété `styleOverrides`.

La partie essentielle est de passer `styleOverrides` à la propriété `theme` du
`ThemeProvider` glamorous. Parce que le `theme` sera utilisé pour d'autres éléments
de votre application, il est toujours bon de rajouter un namespace
(comme le montre cet exemple).

Ensuite vous pouvez écrire un helper (`getStyleOverrides`) pour
ajouter cette fonctionalité de surcharge à tous vos composants glamorous.
Cela fonctionne aussi avec la propriété `css` !
