---
title: 启发
subtitle: 为什么会有glaomrous这个项目 
contributors:
  - liadbiz
---

### The Problem

你喜欢CSS in JS的概念，但是你不喜欢只是为了给组件加样式就给每个组件都写一个包装的函数。你也不喜欢给一个没有任何逻辑的简单组件起个名字。而且，创建样式（这里指代表样式的类名），`className`的传递。属性的转发等等的琐碎之事也很让人头疼。

比如说，下面就是你用纯`glamor`（或者`aphrodite`或者有类似功能的库）需要写的代码：
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

通过使用`glamorous`，上面的例子就可以写成下面这样简单的形式：
```js
const MyStyledDiv = glamorous.div({
  fontSize: 20,
  textAlign: 'center',
})
```

实际上，这种方案更好，因为很多用来组合这些组件的特性都棒极了！
恩...如果你觉得给不给`MyStyledDiv`起名字并不重要，用个div标签给点样式就行了。那么可以直接这么做：

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

> 点击[这里](https://codesandbox.io/s/mDLZ1oKn)在你的浏览器中尝试一下。

所以，这就是这种解决方案的基本部分了！接下来让我们了解更多的细节吧！
