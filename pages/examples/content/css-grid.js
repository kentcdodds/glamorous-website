module.exports = {
  title: 'CSS Grid',
  subtitle: 'The best solution for CSS layout',
  description: `
    [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
    is a relatively new layout tool for the web. It's incredibly powerful and expressive
    and enables new layouts that were previously very difficult or altogether impossible.

    In this example, we use the [~@supports~](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)
    feature of CSS to opt-into CSS Grid in browsers where this is available. Be warned that
    not all browsers will support ~@supports~.
  `.replace(/~/g, '`'),
  codeSandboxId: '2k8yll8qj',
  filename: __filename,
}
