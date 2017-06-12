module.exports = {
  title: 'Optimizing Bundle Size',
  subtitle: '',
  description: `
    If your use case is really size constrained, then you might consider using the "tiny" version of glamorous for your application.
    It is a miniature version of ~glamorous~ with a few limitations:

    1. No built-in component factories (~glamorous.article({/* styles */ }) ~)
      So you have to create your own (~glamorous('article')({/* styles */ }) ~)
    2. No built-in glamorous components (~glamorous.Span~)
    3. No props filtering for dynamic styles, instead, you place them on a special
      ~glam~ prop (see the example below).
    4. If you need ~ThemeProvider~ or ~withTheme~, you must import those manually.
      They are not exported as part of ~glamorous/ tiny~ like they are with ~glamorous~.

    Here's an example of what you're able to do with it.

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

    It's recommended to use either [~babel- plugin - module - resolver~][babel-plugin-module-resolver]
    or the [~resolve.alias~][resolve-alias] config with webpack so you don't have
    to import from that full path. You have the following options available for this
    import:

    1. ~glamorous/ dist / glamorous.es.tiny.js~ - use if you're using Webpack@>=2 or Rollup
    2. ~glamorous/ dist / glamorous.cjs.tiny~ - use if you're not transpiling ESModules
    3. ~glamorous/ dist / glamorous.umd.tiny.js~ - use if you're including it as a script tag. (There's also a ~.min.js~ version).

    The current size of ~glamorous/ dist / glamorous.umd.tiny.min.js~ is: [![tiny size][tiny-size-badge]][unpkg-dist]
    [![tiny gzip size][tiny-gzip-badge]][unpkg-dist]

    > IMPORTANT NOTE ABOUT SIZE: Because ~glamorous~ depends on ~glamor~, you should consider the full size you'll be adding
    > to your application if you don't already have ~glamor~.
    > The current size of ~glamor/ umd / index.min.js~ is: [![glamor size][glamor-size-badge]][unpkg-glamor]
    > [![glamor gzip size][glamor-gzip-badge]][unpkg-glamor]
  `.replace(/~/g, '`'),
  filename: __filename,
}
