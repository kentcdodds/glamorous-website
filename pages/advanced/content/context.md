---
title: Context
contributors:
  - kentcdodds
---

[context](https://facebook.github.io/react/docs/context.html) is an unstable
API and it's not recommended to use it directly. However, if you need to use it
for some reason, here's an example of how you could do that:

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
// renders <div />
// with {color: 'green'}
```
