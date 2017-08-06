---
title: Мотивация
subtitle: Зачем нужен glamorous?
contributors:
  - kentcdodds
---

### Проблема

Вы любите CSS в JS, но вам не нравится необходимость создавать функции компонента лишь для стилизации. Вы не хотите
придумывать имя для чего-то, относящегося только к стилям. Всё это очень раздражает: создание отдельных стилей, присваивание `className` и связанные с props'ами "танцы с бубном".

Пример, как сделать с помощью `glamor` (или `aphrodite` или чего-то подобного):

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

### Решение

С `glamorous` то, что выше, будет выглядеть просто как:

```js
const MyStyledDiv = glamorous.div({
  fontSize: 20,
  textAlign: 'center',
})
```

Фактически, можно сделать это ещё лучше, благодаря множеству возможностей составления компонетов друг с другом!

Да, а что если вы не позаботились об имени для `MyStyledDiv`? Если вы просто хотите div, который стилизуется с помощью glamor?
Вы можете сделать так тоже:

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

> Попробовать в браузере [здесь](https://codesandbox.io/s/mDLZ1oKn)!

Итак, это основы решения `glamorous`... Продолжим знакомиться с деталями!
