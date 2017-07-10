---
title: 动态样式和静态样式
---

glamorous的一个不错的好处就是他可以让你很明确的区分动态和静态样式，因为动态样式是用
函数的形式写的，静态样式是用对象字面量的形式写的。下面是一个同时使用动态样式和静态样式的例子：

```js
const MyLink = glamorous.a(
  {
    color: 'blue',
    textDecoration: 'none',
  },
  ({size = 'small'}) => ({
    fontSize: size === 'big' ? 24 : 16,
  }),
  // 你可以继续提供任意数量的参数
  // `glamor`会把他们一起合并
  // 当样式冲突的时候，最后传入的会保留。
)

render(
  <div>
    <MyLink href="#">Default is small</MyLink>
    <br />
    <MyLink href="#" size="big">size="big"</MyLink>
  </div>
)
```

你可以在[codesandbox](https://codesandbox.io/s/mZkpo0lKA)中动态预览这个例子。

```interactive {clickToRender: true, summary: '可以使用数组来合并样式'}
const phoneMediaQuery = '@media only screen and (max-width: 480px)'
const MyDiv = glamorous.div(
  [
    {
      border: '1px solid',
      [phoneMediaQuery]: {
        color: 'rebeccapurple',
      },
    },
    {
      [phoneMediaQuery]: {
        color: 'green', // 这个样式会保留，因为它写在后面
      },
    },
  ],
  ({big, square}) => {
    const bigStyles = big ?
    {
      [phoneMediaQuery]: {
        fontSize: 20,
      },
    } :
      {}

    const squareStyles = {
      [phoneMediaQuery]: {
        borderRadius: 0,
      },
    }

    const roundStyles = {
      [phoneMediaQuery]: {
        borderRadius: '50%',
      },
    }

    const shapeStyles = square ? squareStyles : roundStyles
    // 注意一下我这里是返回的数组
    return [bigStyles, shapeStyles]
  }
)

render(
  <MyDiv big={true} square={false}>
    缩放您的浏览器窗口看看media queries是否起作用
  </MyDiv>
)
```
