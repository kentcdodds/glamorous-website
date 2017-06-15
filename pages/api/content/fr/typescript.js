module.exports = {
  title: 'TypeScript',
  subtitle: 'Utilisation des définitions TypeScript de `glamorous`',
  description: `
    Les définitions TypeScript actuelles sont incomplètes et reposent sur les besoins des développeurs qui ont contribué. 
    
    Les pull requests pour les améliorer sont les bienvenues et appréciées. Si vous n'avez jamais contribué à l'open source, vous pouvez trouver cette [vidéo gratuite](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) qui est très utile.
    
    ## Support complet

    ### Config
    - [x] useDisplayNameInClassName

    ### Styles dynamiques

    Pour utiliser des styles dynamiques avec des props personnalisées, utilisez des génériques. Exemple:
    
    ~~~javascript
    const MyStyledDiv = glamorous.div<{noPadding?: boolean}>(
      {
        margin: 1,
      },
      props => ({
        padding: props.noPadding ? 0 : 4,
      })
    )

    <MyStyledDiv /> // styles appliqués : {margin: 1, padding: 4}
    <MyStyledDiv noPadding /> // styles appliqués : {margin: 1, padding: 0}
    ~~~

    ## Support incomplet

    ### Sécurité de propriété CSS

    * les pseudo-classes
    * les pseudo-éléments
    * les sélecteurs de CSS relationnels
    * Les Media Queries

    Tous ceux-là fonctionnent, cependant, vous obtenez seulement une sûreté du typage et intellisense sur les simples clés ccs des props (voir le [typage css](https://github.com/paypal/glamorous/blob/master/typings/css-properties.d.ts)).

    Dans l'avenir cela pourra devenir possible avec [Microsoft/TypeScript#6579](https://github.com/Microsoft/TypeScript/issues/6579)

    Alternativement le support complet pour la sûreté du typage serait possible à l'aide de patterns qui suivent les grandes lignes décrites par http://typestyle.io/.

    ### Fabrique de composant du DOM

    Le support actuel est limité à ~div~ et ~svg~.

    ## Support inconnu

    ### Animations

    Support possible via [les typages de glamors](https://github.com/threepointone/glamor/blob/master/index.d.ts)

    ## Aucun support

    * GlamorousComponents

    ## Problèmes connus

    ### Generation des fichiers de définition

    Lorsque vous utilisez glamorous dans une bibliothèque qui vous génére des fichiers de définition vous devrez inclure l'import et l'export suivants pour contourner un problème de typescript [Microsoft/TypeScript/issues/5938](https://github.com/Microsoft/TypeScript/issues/5938).

    ~~~javascript
    import glamorous, { ExtraGlamorousProps as Unused } from "glamorous"
    export { Unused }
    ~~~
  `.replace(/~/g, '`'),
  filename: __filename,
}
