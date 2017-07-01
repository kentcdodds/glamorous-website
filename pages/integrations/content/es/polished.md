---
title: '[`✨ polished`](https://polished.js.org/)'
codeSandboxId: 9Qo9kMgRZ
contributors:
  - bhough
---
`glamorous` works with `✨ polished` mixins, helpers, and shorthands:

```js
const MyStyledParagraph = glamorous.p({
  fontSize: 20,
  color: lighten(0.5, '#000'),
})
```

You can also use object spread properties to apply more complex ✨ polished mixins directly onto glamorous components:

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