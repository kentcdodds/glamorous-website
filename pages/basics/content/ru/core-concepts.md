---
title: Ключевые концепции
---

### glamorous

Функция `glamorous` это дефолтный экспорт. Это позволяет создавать glamorous-компоненты,
которые рендерят стили в компонент, которому вы их дали. Это сделано путём отправки
`className` prop в компонент, который вы указали ему отрендерить.
Но прежде чем мы приступим к способам оборачивания компонент, давайте поговорим
о встроенных DOM-компонентах.

#### встроенные DOM фабрики компонентов

Для каждого DOM элемента, существует ассоциированная `glamorous` фабрика компонента
прикреплённая к `glamorous` функции. Так же, как выше, у вас есть доступ к этим
фабрикам, таким как: `glamorous.div`, `glamorous.a`, `glamorous.article`, и т.д.

```js
const MyStyledSection = glamorous.section({ margin: 1 })

<MyStyledSection>содержимое</MyStyledSection>
// rendered output: <section class="<glamor-generated-class>">содержимое</section>
// styles applied: {margin: 1}
```

#### GlamorousComponent

`GlamorousComponent` это то, что возвращает [glamorousComponentFactory](/api#glamorousComponentFactory).
Их работа - собрать все стили вместе, получить `className` (из [`glamor`](https://github.com/threepointone/glamor))
и перенаправить это в ваш компонент.

#### встроенные GlamorousComponents

Часто бывает, что вы хотите стилизовать что-то, без присваивания этому имени
(потому что именование это трудно). Так glamorous раскрывает пред-созданные
`GlamorousComponent` для каждого типа узлов DOM, что делает это обоснованным:

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

> Поробовать в браузере [здесь](https://codesandbox.io/s/wmRo8OKDm)!

Именовать всё и вся - может быть трудной задачей, а имея все эти пред-настроенные
компоненты - очень удобно. Другая удобная вещь - то, что props сами являются стилями
для этих компонент. Заметим, что glamorous умеет различать props для стилизации, от 
props, которые имеют семантическое значение(например как с `Img` и `A` компонентами, 
которые используют `src` и `href` props).

`Сss` prop может быть использовано, чтобы передать стили в качестве объекта.

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

Ещё один совет... Это отлично работает:

```js
<glamorous.Div color="blue">
  JSX это весело!
</glamorous.Div>
```

#### Переопределение стилей компонента

Распространённый сценарий использования props - это переопределение стиля
существующего компонента(созданного `glamorous`'ом или нет). Это может быть 
достигнуто использованием props `className`, `css` и `theme` или просто 
композицией компонента с `glamorous()` функцией.

Если вы хотите больше узнать об использовании `theme` prop, смотрите раздел
[Тематизация](/advanced#Theming), для более детальных объяснений. В этом разделе
мы расскажем как использовать `className`, `css` и композицию для переопределения
стилей компонента.

Давайте посмотрим, что может быть сделано в примере ниже.

> Попробовать в браузере [здесь](https://codesandbox.io/s/Kro5369wG)!

Мы будем использовать это, как наш `GlamorousComponent`:

```javascript
const MyStyledDiv = glamorous.div({margin: 1, fontSize: 1, padding: 1})
```
##### использование `className`

Для каждого `className`, которое вы передаёте, `GlamorousComponent` проверяет наличие
[`glamor`][glamor] генерируемого `className` (взятого из glamor или `glamorous`, не важно).
Если оно есть, компонент использует исходные стили, которые были использованы при создании
этого `className` и объединит их со стилями для элемента, который рендерится, так, что в
случае конфликта выиграет стиль, который вы передаёте как `className`.

Любой `classNames`, не генерируемый `glamor`'ом, просто будет объединён с тем, что уже существует.

```js
const myCustomGlamorStyles = glamor.css({fontSize: 2})
<MyStyledDiv className={`${myCustomGlamorStyles} custom-class`} />
// применённые стили:
// {margin: 1, fontSize: 2, padding: 1}
// так же как любые применённые кастомно-классовые стили 
```

##### использование `css`

Это может быть `css` того же типа, что и любой из переданных стилей
(как в `glamorous.div(...styles)`). Если он указан, то будет объединён со стилем
этого компонента, и получит высший приоритет среди всех предопределённых стилей
компонента.

```js
const myCustomGlamorStyles = glamor.css({fontSize: 2, padding: 2})
<MyStyledDiv
  className={`${myCustomGlamorStyles} custom-class`}
  css={{padding: 3}}
/>
// применённые стили:
// {margin: 1, fontSize: 2, padding: 3}
// так же как любые применённые кастомно-классовые стили
```

##### использование `glamorous()` композиции

Если мы просто хотим расширить стили существующего компонента, это может быть сделано
с использованием `glamorous()` функции.

```js
const MyComposedStyledDiv = glamorous(MyStyledDiv)({fontSize: 4, padding: 4})
<MyComposedStyledDiv />
// применённые стили:
// {margin: 1, fontSize: 4, padding: 4}
```

Фактически, встроенные фабрики DOM компонент, всего лишь абстракции этой функции,
так что `glamorous.div`, может быть записан как `glamorous('div')`.
