---
title: Темы
codeSandboxId: qYmJjE4jy
contributors:
  - paulmolluzzo
  - JReinhold
---

`glamorous` полностью поддерживает создание тем с помощью специального
`<ThemeProvider>` компонента.

Он предоставляет свойство `theme` всем компонентам glamorous, расположенным
ниже в дереве.

```jsx
import glamorous, {ThemeProvider} from 'glamorous'

// наш главный объект темы
const theme = {
  main: {color: 'red'}
}

// наш второстепенный объект темы
const secondaryTheme = {
  main: {color: 'blue'}
}

// <Title> компонент с применением темы
const Title = glamorous.h1({
  fontSize: '10px'
}, ({theme}) => ({
  color: theme.main.color
}))

// используйте <ThemeProvider>, чтобы передать тему ниже в структуре
<ThemeProvider theme={theme}>
  <Title>Привет!</Title>
</ThemeProvider>

// можно вкладывать темы друг в друга
// внутренняя тема будет объединена с внешней

<ThemeProvider theme={theme}>
  <div>
    <Title>Привет!</Title>
    <ThemeProvider theme={secondaryTheme}>
      {/* это будем синим */}
      <Title>Привет отсюда!</Title>
    </ThemeProvider>
  </div>
</ThemeProvider>

// чтобы сделать override темы, просто передайте свойств theme компоненту glamorous вручную
// компонент проигнорирует любую внешнюю тему и будет использовать ту, которая передана в props
<ThemeProvider theme={theme}>
  {/* это будет желтым */}
  <Title theme={{main: {color: 'yellow'}}}>Привет!</Title>
</ThemeProvider>
```

> Попробуй это в своем браузере [здесь](https://codesandbox.io/s/o2yq9MkQk)!

`glamorous` также предоставляет компонент высшего порядка `withTheme`, так что вы можете получить доступ к своей теме из любого компонента!

```jsx
import glamorous, {ThemeProvider,  withTheme} from 'glamorous'

// наш главный объект темы
const theme = {
  main: {color: 'red'}
}

// <Title> компонент с применением темы
const Title = glamorous.h1({
  fontSize: '10px'
}, ({theme}) => ({
  color: theme.main.color
}))

// обычный компонент, принимающий свойство theme
const SubTitle = ({children, theme: {color}}) => (
  <h3 style={{color}}>{children}</h3>
)

// расширенный компонент со свойством theme
const ThemedSubTitle = withTheme(SubTitle)

<ThemeProvider theme={theme}>
  <Title>Привет!</Title>
  <ThemedSubTitle>от withTheme!</ThemedSubTitle>
</ThemeProvider>
```

> Попробуй это в своем браузере [здесь](https://codesandbox.io/s/qYmJjE4jy)!

Или если вы предпочитаете декораторы:

```jsx
import React, {Component} from 'react'
import glamorous, {ThemeProvider,  withTheme} from 'glamorous'

// наш главный объект темы
const theme = {
  main: {color: 'red'}
}

// <Title> компонент с применением темы
const Title = glamorous.h1({
  fontSize: '10px'
}, ({theme}) => ({
  color: theme.main.color
}))

// расширенный компонент со свойством theme
@withTheme
class SubTitle extends Component {
  render() {
    const {children, theme: {main: {color}}} = this.props
    return <h3 style={{color}}>{children}</h3>
  }
}

<ThemeProvider theme={theme}>
  <Title>Привет!</Title>
  <SubTitle>от withTheme!</SubTitle>
</ThemeProvider>
```

> `withTheme` ожидает, что `ThemeProvider` будет находиться выше в дереве рендера, и в `development` покажет предупреждение, если он не будет найден.
