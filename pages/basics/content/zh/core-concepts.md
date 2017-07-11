---
title: 核心概念
---

### glamorous

`glamorous`函数是默认的导出。它可以创建一个glamorous组件，该组件可以把样式渲染到你所给的React组件。这是通过把一个`className`属性转发给你传入的React组件完成的。
在我们学习如何包装自定义组件之前，我们先来聊一聊内置的DOM元素。

#### 内置的DOM组件工厂

对于每一个DOM元素，都有一个对应的`glamorous`组件工厂绑定在`glamorous`函数上。如上所述，你可以通过诸如：`glamorous.div`，`glamorous.a`，`glamorous.article`之类的形式调用这些工厂函数。

```js
const MyStyledSection = glamorous.section({ margin: 1 })

<MyStyledSection>content</MyStyledSection>
//　渲染输出：<section class="<glamor-generated-class>">content</section>
// 应用的样式: {margin: 1}
```

#### GlamorousComponent

`GlamorousCompoennt`就是从[glamorousComponentFactory](/api#glamorousComponentFactory)返回的东西。他的工作就是收集所有的样式然后从[`glamor`](https://github.com/threepointone/glamor))产生一个`className`并把这个`className`转交给你的React组件。

#### 内置的 GlamorousComponents

有时候你只是单纯的想写点样式而不关心组件叫什么名字（因为起名字是一件麻烦事）。所以glamorous给所有类型的DOM节点都提供了一个`GlamorousComponent`，这样会让你更方便。

```js
const { Div, Span, A, Img } = glamorous

function MyUserInterface({name, tagline, imageUrl, homepage, size}) {
  const nameSize = size
  const taglineSize = size * 0.5
  return (
    <Div display="flex" flexDirection="column" justifyContent="center">
      <A href={homepage} textDecoration="underline" color="#336479">
        <Img borderRadius="50%" height={180} src={imageUrl} />
        <Div fontSize={nameSize} fontWeight="bold">{name}</Div>
      </A>
      <Span fontSize={taglineSize} color="#767676">
        {tagline}
      </Span>
    </Div>
  )
}
```

> 点击[这里](https://codesandbox.io/s/wmRo8OKDm)在你的浏览器中尝试一下

给每个组件命名是一个枯燥乏味的事情，所以这些预置的组件是很有用的！另一个很方便的地方就是你可以把样式当做属性传入。从上面的例子可以注意到，glamorous可以区分传入的属性是样式还是有语义的（比如对于`Img`和`A`组件`src`和`href`属性就有特殊意义）。

`css`属性可以用来传入样式对象。

```js
import glamorous, {withTheme} from 'glamorous'
const { Div, Span } = glamorous

const predefinedStyle = {
  color: '#767676',
  fontSize: 18,
}

const MyUserInterface = withTheme(function ({tagline, theme}) {
  return (
    <Div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.mq.tablet]: {
          flexDirection: 'row'
        }
      }}
     >
      <Span css={predefinedStyle}>
        {tagline}
      </Span>
    </Div>
  )
})
```

还有一个小技巧...下面的写法也是没问题的：

```js
<glamorous.Div color="blue">
  JSX is pretty wild!
</glamorous.Div>
```

#### 重写组件样式

使用属性最常见的场景就是重写现有的组件样式（通过`glammorous`或者其他的方式生成）。结合`glamorous()`函数使用`className`,`css`,和`theme`或者简单的组件组合来实现重写。

如果你对使用`theme`属性感兴趣的话可以看一看[主题](/advanced#Theming)章节。在这个章节我们先来解释一下怎么使用`className`,`css`,和组件组合的方式来重写一个组件的样式。

让我们一起来看看下面的例子吧。

> 点击[这里](https://codesandbox.io/s/Kro5369wG)在你的浏览器中尝试一下

我们会用下面的这个组件作为演示用的`GlamorousComponent`

```javascript
const MyStyledDiv = glamorous.div({margin: 1, fontSize: 1, padding: 1})
```
##### 使用`className`

对于你提供的每个`className`，`GlamorousComponent`都会检查它是否是一个由[`glamor`][glamor]生成的`className`(可以从glamor或者`glamorous`来，这并不重要)。如果是的话，就把产生这个`className`的原始样式和已经渲染的样式合并，冲突的属性会优先保留重写样式中的。

对于不是`glamor`生成的`classNames`，就会和`glamor`生成的连接起来。

```js
const myCustomGlamorStyles = glamor.css({fontSize: 2})
<MyStyledDiv className={`${myCustomGlamorStyles} custom-class`} />
// 应用的样式
// {margin: 1, fontSize: 2, padding: 1}
// 和由类名custom-class提供的其他样式
```

##### 使用`css`

这个预先设置的样式是一样的（比如在`glamorous.div(...styles)`中传入的），如果使用了该属性的话，传入的样式在合并是有最高的优先级。

```js
const myCustomGlamorStyles = glamor.css({fontSize: 2, padding: 2})
<MyStyledDiv
  className={`${myCustomGlamorStyles} custom-class`}
  css={{padding: 3}}
/>
// 应用的样式
// {margin: 1, fontSize: 2, padding: 3}
// 和由类名custom-class提供的其他样式
```

##### 使用`glamorous()`组合

如果我们想扩展现存的组件样式的话，可以通过`glamorous()`方法实现。

```js
const MyComposedStyledDiv = glamorous(MyStyledDiv)({fontSize: 4, padding: 4})
<MyComposedStyledDiv />
// 应用的样式
// {margin: 1, fontSize: 4, padding: 4}
```

实际上，内置的DOM组件工厂只是提供了`glamorous()`函数的抽象，所以`glamorous.div`和`glamorous('div')`两种写法的的效果是一样的。
