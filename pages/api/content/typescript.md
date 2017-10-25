---
title: TypeScript
subtitle: Using the `glamorous` TypeScript definitions
---

The bundled typescript definitions are based around the needs of the developers who contributed them and may be missing recent features.

Pull requests to improve them are welcome and appreciated. If you've never contributed to open source before, then you may find [this free video course](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) helpful.

## Using the typings

The glamorous definitions require typescript version 2.4 or above.

### glamorousComponentFactory

```tsx
// Creating your own
glamorous(Component)(/* styleArgument */)
glamorous('div')(/* styleArgument */)

// Using built-in
glamorous.div<Props>(/* styleArgument */)

// Using shouldClassNameUpdate
glamorous(Component, {
  shouldClassNameUpdate: (props, prevProps, context, prevContext) => props !== prevProps
})(/* styleArgument */)

// Using shouldClassNameUpdate with Context
glamorous<Props, Context>(Component, {
  shouldClassNameUpdate: (props, prevProps, context, prevContext) => context !== prevContext
})(/* styleArgument */)

// Using withProps
glamorous(Component, {
  withProps: {primaryColor: 'red'}
})((props) => ({/* props = { primaryColor: string } */})

const WithPropsComponent = glamorous(Component)(/* styleArgument */).withProps(withProps: {primaryColor: 'red'})
...
<WithPropsComponent primaryColor='' /> // primaryColor is an optional prop of string type based on the above
```

#### glamorousComponentFactory arguments

By providing the typings for Props and Theme to Glamorous when setting up your component factory they will be typed on the props argument for function arguments automatically.

```tsx
interface Props {
  noPadding?: boolean,
  theme: { color: string }
}

const MyStyledDiv = glamorous.div<Props>(
  {
    margin: 1,
  },
  ({noPadding, theme}) => ({
    padding: noPadding ? 0 : 4,
    color: theme.color,
  })
)

<MyStyledDiv /> // styles applied: {margin: 1, padding: 4}
<ThemeProvider theme={{color: 'red'}}>
  <MyStyledDiv noPadding /> // styles applied: {margin: 1, padding: 0, color: red}
</ThemeProvider>
```

## Incomplete support

### CSS property safety

* pseudo-class
* pseudo-element
* Relational CSS Selectors
* Media Queries

All of these work, however you only get typesafety and intellisense on simple css key props (see the [css typings](https://github.com/paypal/glamorous/blob/master/typings/css-properties.d.ts)).

In the future this may become possible with [Microsoft/TypeScript#6579](https://github.com/Microsoft/TypeScript/issues/6579)

Alternatively support for full typesafety would be possible using patterns along the lines of http://typestyle.io/.

## Known Issues

### Built-in Glamorous Components

Whilst you have typesafety on known properties, any misspelt or missing CSSProperties will pass validation.

ie.
```ts
<P bakgroundColor="...">
```

### Generating Definition files

When using glamorous in a library that you are generating definition files for you may need to include the following import and export to get around a typescript issue [Microsoft/TypeScript/issues/5938](https://github.com/Microsoft/TypeScript/issues/5938).

```ts
import glamorous, { GlamorousComponent  } from 'glamorous'
export { GlamorousComponent }
```
