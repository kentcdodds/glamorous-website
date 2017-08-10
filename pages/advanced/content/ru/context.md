---
title: Context
contributors:
  - kentcdodds
---

[context](https://facebook.github.io/react/docs/context.html) - это
нестабильный API и его не рекомендуется использовать напрямую. Тем не менее,
если вам по какой-то причине нужно его использовать, вот пример:

```jsx
const dynamicStyles = (props, context) => ({
  color: context.isLoggedIn ? 'green' : 'red'
})
const MyDiv = glamorous.div(dynamicStyles)
MyDiv.contextTypes = {
  isLoggedIn: PropTypes.string,
}

class Parent extends React.Component {
  getChildContext() {
    return {
      isLoggedIn: true,
    }
  }
  render() {
    return <MyDiv />
  }
}

Parent.childContextTypes = {
  isLoggedIn: PropTypes.string,
}

<Parent />
// рендерит <div />
// с {color: 'green'}
```
