---
title: Theming
---

`glamorous` fully supports theming using a special `<ThemeProvider>` component.

It provides the `theme` to all glamorous components down the tree.

> Try this out in your browser [here](https://codesandbox.io/s/o2yq9MkQk)!

```js
import glamorous, {ThemeProvider} from 'glamorous'

// our main theme object
const theme = {
  main: {color: 'red'}
}

// our secondary theme object
const secondaryTheme = {
  main: {color: 'blue'}
}

// a themed <Title> component
const Title = glamorous.h1({
  fontSize: '10px'
}, (props, theme) => ({
  color: theme.main.color
}))

// use <ThemeProvider> to pass theme down the tree
<ThemeProvider theme={theme}>
  <Title>Hello!</Title>
</ThemeProvider>

// it is possible to nest themes
// inner themes will be merged with outers
<ThemeProvider theme={theme}>
  <div>
    <Title>Hello!</Title>
    <ThemeProvider theme={secondaryTheme}>
      {/* this will be blue */}
      <Title>Hello from here!</Title>
    </ThemeProvider>
  </div>
</ThemeProvider>

// to override a theme, just pass a theme prop to a glamorous component
// the component will ignore any surrounding theme, applying the one passed directly via props
<ThemeProvider theme={theme}>
  {/* this will be yellow */}
  <Title theme={{main: {color: 'yellow'}}}>Hello!</Title>
</ThemeProvider>
```

`glamorous` also exports a `withTheme` higher order component (HOC) so you can access your theme in any component!

> Try this out in your browser [here](https://codesandbox.io/s/qYmJjE4jy)!

```js
import glamorous, {ThemeProvider,  withTheme} from 'glamorous'

// our main theme object
const theme = {
  main: {color: 'red'}
}

// a themed <Title> component
const Title = glamorous.h1({
  fontSize: '10px'
}, (props, theme) => ({
  color: theme.main.color
}))

// normal component that takes a theme prop
const SubTitle = ({children, theme: {color}}) => (
  <h3 style={{color}}>{children}</h3>
)

// extended component with theme prop
const ThemedSubTitle = withTheme(SubTitle)

<ThemeProvider theme={theme}>
  <Title>Hello!</Title>
  <ThemedSubTitle>from withTheme!</ThemedSubTitle>
</ThemeProvider>
```

Or if you prefer decorator syntax:

```js
import React, {Component} from 'react'
import glamorous, {ThemeProvider,  withTheme} from 'glamorous'

// our main theme object
const theme = {
  main: {color: 'red'}
}

// a themed <Title> component
const Title = glamorous.h1({
  fontSize: '10px'
}, (props, theme) => ({
  color: theme.main.color
}))

// extended component with theme prop
@withTheme
class SubTitle extends Component {
  render() {
    const {children, theme: {main: {color}}} = this.props
    return <h3 style={{color}}>{children}</h3>
  }
}

<ThemeProvider theme={theme}>
  <Title>Hello!</Title>
  <SubTitle>from withTheme!</SubTitle>
</ThemeProvider>
```

> `withTheme` expects a `ThemeProvider` further up the render tree and will warn in `development` if one is not found!
