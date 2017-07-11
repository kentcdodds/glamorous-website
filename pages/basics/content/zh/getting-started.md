---
title: 起步
subtitle: 开始使用`glamorous`
---

<a href="https://youtu.be/lmrQTpJ_3PM" title="glamorous walkthrough">
  <img src="https://github.com/paypal/glamorous/raw/master/other/glamorous-walkthrough.png" alt="Video Screenshot" title="Video Screenshot" width="700" />
</a>

这是一个最简单的例子，用来给你展示如何用`css-in-js`的魔法编写组件。

```interactive
const { Div } = glamorous

function App() {
  return (
    <Div
      fontSize={20}
      textAlign="center"
    >
      Hello Glamorous!
    </Div>
  )
}

render(<App/>)
```
