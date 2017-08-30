---
title: glamorous API
---

The `glamorous` function allows you to create your own `glamorousComponentFactory` (see
[below](#glamorousComponentFactory)) for any component you have.

```js  
const MyComponent = props => <div {...props} />
const myGlamorousComponentFactory = glamorous(MyComponent)
const MyGlamorousComponent = myGlamorousComponentFactory({/* styles */})

<MyGlamorousComponent id="i-am-forwarded-to-the-div" />
```
> Try this out in your browser [here](https://codesandbox.io/s/g5kDAyB9)!

You can also provide a few options to help glamorous know how to handle your component:

### displayName
The `displayName` of a React component is used by React in the
[`React DevTools`](https://github.com/facebook/react-devtools) and is really handy for debugging
React applications. Glamorous will do its best to give a good `displayName` for your component,
but, for the example above, the best it can do is: `glamorous(MyComponent)`. If you want to specify
a `displayName`, you can do so with this property.

```js
const MyComponent = props => <div {...props} />
const myGlamorousComponentFactory = glamorous(
  MyComponent,
  {displayName: 'MyGlamorousComponent'}
)
```

> Try this out in your browser [here](https://codesandbox.io/s/P3Lyw5j2)!

>Note: the `displayName` can also included in the className that your components are given which makes
>the development experience a bit nicer. To enable this see the section about `config`. This will likely
>be enabled by default in the next major change.

And now all components created by the `myGlamorousComponentFactory` will have the `displayName` of
`MyGlamorousComponent`.

There is also a [babel plugin](https://www.npmjs.com/package/babel-plugin-glamorous-displayname) that can
monkey-patch the `displayName` onto the components that you create from your component factory.

### rootEl

React has an [Unknown Prop Warning](https://facebook.github.io/react/warnings/unknown-prop.html) that it
logs when you pass spurious props to DOM elements: (i.e. `<div big={true} />`). Because you can style your
components using props, glamorous needs to filter out the props you pass so it doesn't forward these on to
the underlying DOM element. However, if you create your own factory using a custom component, glamorous will
just forward all the props (because the component may actually need them and glamorous has no way of knowing).
But in some cases, the component may be spreading all of the props onto the root element that it renders.
For these cases, you can tell glamorous which element is being rendered and glamorous will apply the same logic
for which props to forward that it does for the built-in factories.

```js
const MyComponent = props => <div {...props} />
const myGlamorousComponentFactory = glamorous(
  MyComponent,
  {rootEl: 'div'}
)

const MyGlamorousComponent = myGlamorousComponentFactory(props => ({
  fontSize: props.big ? 36 : 24,
}))

<MyGlamorousComponent big={true} id="room423" />
// this will render:
// <div id="room423" />
// with {fontSize: 36}
// `big` is not forwarded to MyComponent because the `rootEl` is a `div` and `big`
// is not a valid attribute for a `div` however `id` will be forwarded because
// `id` is a valid prop
```

> Try this out in your browser [here](https://codesandbox.io/s/P18oV4kD2)!

### forwardProps

There are some cases where you're making a `glamorousComponentFactory` out of a custom component that spreads
some of the properties across an underlying DOM element, but not all of them. In this case you should use
`rootEl` to forward only the right props to be spread on the DOM element, but you can also use `forwardProps`
to specify extra props that should be forwarded.

```js
const MyComponent = ({shouldRender, ...rest}) => (
  shouldRender ? <div {...rest} /> : null
)
const MyStyledComponent = glamorous(MyComponent, {
  forwardProps: ['shouldRender'],
  rootEl: 'div',
})(props => ({
  fontSize: props.big ? 36 : 24,
}))
<MyStyledComponent shouldRender={true} big={false} id="hello" />
// this will render:
// <div id="hello" />
// with {fontSize: 24}
// `shouldRender` will be forwarded to `MyComponent` because it is included in
// `forwardProps`. `big` will not be forwarded to `MyComponent` because `rootEl`
// is a `div` and that's not a valid prop for a `div`, but it will be used in
// the styles object function that determines the `fontSize`. Finally `id` will
// be forwarded to `MyComponent` because it is a valid prop for a `div`.
```

> Try this out in your browser [here](https://codesandbox.io/s/GZEo8jOyy)!

### filterProps

Sometimes it's not possible to know which DOM element will be rendered at the end
and therefore no `rootEl` can be set to avoid [Unknown Prop Warnings](https://facebook.github.io/react/warnings/unknown-prop.html).
To filter out these properties from being forwarded to the child components you
can set `filterProps`. `filterProps` takes an arrays of prop names.

```js
const withFlex = Component => {
  return glamorous(Component, {
    filterProps: ['flex'],
  })(
    ({flex}) => (flex ? {display: 'flex'} : undefined),
  )
}

const MyComponent = withFlex(props => (<div {...props} />))

<MyComponent flex />
// this will render a <div> element with the display CSS property set to 'flex'.
// The withFlex HOC can't set a `rootEl` because it accepts all kind of components.
// The flex property will not be forwarded to the div because it is listed in
// `filterProps`.
```

Another use case for `filterProps` is to use it in conjunction with
`propsAreCssOverrides`. If `propsAreCssOverrides` is set to true all component
properties are converted to styles and will be put into the generated CSS. To
avoid adding unknown CSS properties and being able to add styles dynamically the
properties used to generate the dynamic styles can be included in `filterProps`.

```js
const MyComponent = props => (<div {...props} />)

const MyStyledComponent = glamorous(MyComponent, {
  rootEl: 'div',
  filterProps: ['big'],
  propsAreCssOverrides: true,
})(
  ({big}) => ({fontSize: big ? 36 : 24})
)

<MyStyledComponent big margin={2}>Hello World</MyStyledComponent>
```

### shouldClassNameUpdate

 Most of the time, glamor is super fast, but in some scenarios it may be nice to
 prevent glamor from computing your styles when you know the class name should
 not change. In these cases, you can implement `shouldClassNameUpdate`. For
 example:

 ```jsx
 const pureDivFactory = glamorous('div', {
   shouldClassNameUpdate(props, previousProps, context, previousContext) {
     // return `true` to update the classname and
     // `false` to skip updating the class name
     return true
   },
 })
 const Div = pureDivFactory({marginLeft: 1})
 render(<Div css={{marginLeft: 2}} />)
 // this will render:
 // <div />
 // with {marginLeft: 2}
 ```

 Note that this is _not_ the same as `shouldComponentUpdate`. Your component will
 still be rerendered. `shouldClassNameUpdate` is only for allowing you to opt-out
 of generating the `className` unnecessarily.

 ### propsAreCssOverrides

 This allows you to use props as CSS. You always have the `css` prop, but
 sometimes it's really nice to use just the props as CSS.

 ```javascript
 const MyDiv = glamorous('div', {propsAreCssOverrides: true})({
   margin: 1,
   fontSize: 1,
 })
 render(<MyDiv margin={2} css={{':hover': {fontWeight: 'bold'}}} />)
 // renders <div /> with margin: 2, fontSize: 1, and fontWeight: bold on hover
 ```

 > You can also compose the built-in components: `glamorous(glamorous.Div)(/* styles */)`

### withComponent

In some cases you might want to just copy the styles of an already created glamorous component with a
different tag altogether, `withComponent` function comes in handy then.

```js
const Button = glamorous.button({
  display: 'inline-block',
  color: 'red',
  fontSize: '16px',
  margin: '16px',
  padding: '8px 16px',
  border: '1px solid red',
  borderRadius: '4px',
});

// We're replacing the <button> tag with an <a> tag, but reuse all the same styles
const Link = Button.withComponent('a')

<Button>Normal Button</Button>
<Link>Normal Link</Link>
// this will render:
// <button>Normal Button</button>
// <a>Normal Link</a>
// both with the same styles
```
>Note: to override styles, you can do the same thing you do with a regular component (`css` prop,
wrap it in `glamorous()`, or regular `className` prop).

### withProps

Sometimes it can be useful to apply props by default for a component. The
simplest way to do this is by simply setting the `defaultProps` value on the
glamorousComponent. But if you want a little more power and composition, then
the `withProps` APIs can help.

> These APIs are highly composable, it would be hard to show you all the
> examples of how this composes together. Just know that it behaves as you might
> expect.

```javascript
// when creating a glamorousComponentFactory
const bigDivFactory = glamorous('div', {withProps: {big: true}})
const BigDiv = bigDivFactory(({big}) => ({fontSize: big ? 20 : 10}))
render(<BigDiv />) // renders with fontSize: 20
render(<BigDiv big={false} />) // renders with fontSize: 10

// applying props to an existing component
const MyDiv = glamorous.div(({small}) => ({fontSize: small ? 10 : 20}))
const SmallDiv = MyDiv.withProps({small: true})
render(<SmallDiv />) // renders with fontSize: 10
```

Based on those examples, there are three places you can apply props to a
glamorous component. How these props are composed together applies in this order
(where later has more precedence):

1. Creating a `glamorousComponentFactory`
2. Directly on a `glamorousComponent` with the `.withProps` function
3. When rendering a component (just like applying props to a regular components)

In addition to this, you can also have dynamic props. And these props don't have
to be used for glamorous styling, any valid props will be forwarded to the
element:

```javascript
const BoldDiv = glamorous
 .div(({bold}) => ({fontWeight: bold ? 'bold' : 'normal'}))
 .withProps(({bold}) => ({className: bold ? 'bold-element' : 'normal-element'}))

render(<BoldDiv />) // renders <div class="bold-element" /> with fontWeight: bold
render(<BoldDiv bold={false} />) // renders <div class="normal-element" /> with fontWeight: normal
```

The `.withProps` API can also accept any number of arguments. They are called
with `(accumulatedProps, context)`. `accumulatedProps` refers to the props that
are known so far in the accumulation of the props which makes this API highly
composable. Finally, the `withProps` APIs can also accept arrays of
objects/functions. You can pretty much do anything you want with this API.

> NOTE: This is a shallow merge (uses `Object.assign`)
