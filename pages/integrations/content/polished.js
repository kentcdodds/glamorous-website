module.exports = {
  title: '[`✨ polished`](https://polished.js.org/)',
  subtitle: '',
  description: `
    ~glamorous~ works with ~✨ polished~ mixins, helpers, and shorthands:
    ~~~js
    const MyStyledParagraph = glamorous.p({
      fontSize: 20,
      color: lighten(0.5, '#000'),
    })
    ~~~
    You can also use object spread properties to apply more complex ✨ polished mixins directly onto glamorous components:
    ~~~js
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
    ~~~
     You can play more with ~✨ polished~ and ~glamorous~ [here](https://codesandbox.io/s/9Qo9kMgRZ).
  `.replace(/~/g, '`'),
  filename: __filename,
}
