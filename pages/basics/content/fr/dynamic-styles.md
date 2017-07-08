---
title: Styles dynamiques + Styles statiques
---

Un des points agréables de glamorous, c'est qu'il vous permet de faire une séparation
claire entre vos styles dynamiques et statiques en vous forçant à choisir
entre un objet littéral et une fonction. Voici un exemple ayant à la fois
des styles dynamiques et statiques :

~~~js
const MyLink = glamorous.a(
  {
    color: 'blue',
    textDecoration: 'none',
  },
  ({size = 'small'}) => ({
    fontSize: size === 'big' ? 24 : 16,
  }),
  // vous pouvez continuer de fournir un nombre quelconque d'arguments
  // et ~glamor~ les fusionnera. En cas de conflit de
  // style, le dernier gagne.
)
~~~

Vous pouvez voir un aperçu en direct de cet exemple sur [codesandbox](https://codesandbox.io/s/mZkpo0lKA).

<details>
<summary>Remarquez que vous pouvez également utiliser des tableaux de styles si vous en avez besoin :</summary>

~~~js
const MyDiv = glamorous.div(
  [
    {
      [phoneMediaQuery]: {
        lineHeight: 1.2,
      },
    },
    {
      [phoneMediaQuery]: {
        lineHeight: 1.3, // celui-ci gagnera car il vient après
      },
    },
  ],
  ({big, square}) => {
    const bigStyles = big ?
    {
      [phoneMediaQuery]: {
        fontSize: 20,
      },
    } :
      {}

    const squareStyles = square ?
    {
      [phoneMediaQuery]: {
        borderRadius: 0,
      },
    } :
    {
      [phoneMediaQuery]: {
        borderRadius: '50%',
      },
    }
    // remarquez que je retourne ici un tableau
    return [bigStyles, squareStyles]
  },
)

// le résultat de <MyDiv big={true} square={false} /> sera :
// @media (max-width: 640px) {
//   .css-1bzhvkr,
//   [data-css-1bzhvkr] {
//     line-height: 1.3;
//     font-size: 20px;
//     border-radius: 50%;
//   }
// }
//
// <div
//   class="css-1bzhvkr"
// />
~~~

</details>
