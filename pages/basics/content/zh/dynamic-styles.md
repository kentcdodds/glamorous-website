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
```

你可以在[codesandbox](https://codesandbox.io/s/mZkpo0lKA)中动态预览这个例子。

<details>
<summary>顺便提一下, 如果需要的话你可以提供一个由样式对象组成的数组</summary>

```js
const MyDiv = glamorous.div(
  [
    {
      [phoneMediaQuery]: {
        lineHeight: 1.2,
      },
    },
    {
      [phoneMediaQuery]: {
        lineHeight: 1.3, // this will win because it comes later
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

    const squareStyles = square ?
    {
      [phoneMediaQuery]: {
        borderRadius: 0,
      },
    } :
    {
      [phoneMediaQuery]: {
        borderRadius: '50%',
      },
    }
    // note that I'm returning an array here
    return [bigStyles, squareStyles]
  },
)

// <MyDiv big={true} square={false} /> 渲染的结果就会变成:
// @media (max-width: 640px) {
//   .css-1bzhvkr,
//   [data-css-1bzhvkr] {
//     line-height: 1.3;
//     font-size: 20px;
//     border-radius: 50%;
//   }
// }
//
// <div
//   class="css-1bzhvkr"
// />
```

</details>
