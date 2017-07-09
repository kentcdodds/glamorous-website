---
title: Motivation
subtitle: Why does glamorous exist?
contributors:
  - kentcdodds
---

### The Problem

You like CSS in JS, but you don't like having to create entire component functions just for styling purposes. You don't want to give a name to something that's purely style-related. And it's just kind of annoying to do the style-creating, `className` assigning, and props-forwarding song and dance.

For example, this is what you have to do with raw `glamor` (or `aphrodite` or similar for that matter):

```jsx
const styles = glamor.css({
  fontSize: 20,
  textAlign: 'center',
})
function MyStyledDiv({className = '', ...rest}) {
  return (
    <div
      className={`${styles} ${className}`}
      {...rest}
    />
  )
}
```

### This Solution

With `glamorous`, that example above looks as simple as this:

```js
const MyStyledDiv = glamorous.div({
  fontSize: 20,
  textAlign: 'center',
})
```

In fact, it's even better, because there are a bunch of features that make composing these components together really nice!

Oh, and what if you didn't care to give `MyStyledDiv` a name? If you just want a div that's styled using glamor? You can do that too:

```jsx
const { Div } = glamorous

function App() {
  return (
    <Div
      fontSize={20}
      textAlign="center"
    >
      Hello world!
    </Div>
  )
}
```

> Try this out in your browser [here](https://codesandbox.io/s/mDLZ1oKn)!

So that's the basics of this solution... Let's get to the details!
