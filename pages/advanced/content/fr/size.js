module.exports = {
  title: 'Optimisation de la taille du paquet',
  description: `
    Si pour votre cas d'utilisation, la taille est vraiment une contrainte, alors vous pourriez envisager d'utiliser la "minuscule" version de glamorous pour votre application.
    C'est une version miniature de ~glamorous~ avec quelques restrictions :

    1. Aucune fabrique de composant intégrée (~glamorous.article({/* styles */ }) ~)
      Donc, vous devez créer les votres (~glamorous('article')({/* styles */ }) ~)
    2. Aucun composant intégré de glamorous (~glamorous.Span~)
    3. Aucune prop de filtrage pour les styles dynamiques, au lieu de cela, vous les placerez sur une
      prop ~glam~ (voir l'exemple ci-dessous).
    4. Si vous avez besoin de ~ThemeProvider~ ou de ~withTheme~, vous devrez les importer manuellement.
      Ils ne sont pas exportés comme faisant partie de ~glamorous/ tiny~ à l'inverse de ~glamorous~.

    Voici un exemple de ce que vous pouvez faire avec lui.

    ~~~jsx
    import React from 'react'
    import glamorous from 'glamorous/dist/glamorous.es.tiny'

    const Comp = glamorous('div')({
      color: 'red'
    }, (props) => ({
      fontSize: props.glam.big ? 20 : 12
    }))
    function Root() {
      return (
        <Comp
          glam={{ big: true }}
          thisWillBeForwardedAndReactWillWarn
        >
          ciao
        </Comp>
      )
    }

    export default Root
    ~~~

    ~~~callout {title: 'Expérience améliorée', type: 'success'}
    Il est recommandé d'utiliser soit
    [~babel-plugin-module-resolver~](https://github.com/tleunen/babel-plugin-module-resolver)
    ou le [~resolve.alias~](https://webpack.js.org/configuration/resolve/#resolve-alias)
    de config avec webpack afin de ne pas
    importer depuis ce chemin complet.

    Vous disposez des options disponibles suivantes pour cette importation :

    1. ~glamorous/dist/glamorous.es.tiny.js~ - à utiliser si vous utilisez Webpack@>=2 ou Rollup
    2. ~glamorous/dist/glamorous.cjs.tiny~ - à utiliser si vous n'utilisez pas la transpilation ESModules
    3. ~glamorous/dist/glamorous.umd.tiny.js~ - à utiliser si vous l'incluez dans un balise script. (Il y a aussi une version ~.min.js~).

    La taille actuelle de ~glamorous/dist/glamorous.umd.tiny.min.js~ est : [![tiny size][tiny-size-badge]][unpkg-dist]
    [![tiny gzip size][tiny-gzip-badge]][unpkg-dist]

    ~~~callout {title: 'Remarque importante', type: 'danger'}
    Comme ~glamorous~ dépend de ~glamor~, si vous n'avez pas encore ~glamor~, vous devrez tenir compte
    de la taille globale en l'ajoutant à votre application.
    La taille actuelle de ~glamor/umd/index.min.js~ est : [![glamor size][glamor-size-badge]][unpkg-glamor]
    [![glamor gzip size][glamor-gzip-badge]][unpkg-glamor]
    ~~~

    [tiny-gzip-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.tiny.min.js?compression=gzip&label=gzip%20size&style=flat-square
    [tiny-size-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.tiny.min.js?label=size&style=flat-square
    [unpkg-dist]: https://unpkg.com/glamorous/dist/
    [glamor-gzip-badge]: http://img.badgesize.io/https://unpkg.com/glamor/umd/index.min.js?compression=gzip&label=gzip%20size&style=flat-square
    [glamor-size-badge]: http://img.badgesize.io/https://unpkg.com/glamor/umd/index.min.js?label=size&style=flat-square
    [unpkg-glamor]: https://unpkg.com/glamor/umd/
  `.replace(/~/g, '`'),
  filename: __filename,
}
