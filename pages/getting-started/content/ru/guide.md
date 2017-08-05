# Привет 👋

Мы собираемся обучить вас использовать `glamorous`, редактируя документацию которую вы читаете 😱

Для старта у нас уже есть несколько компонентов, объявленных слева, так 
что вам нужно просто задать им стили, чтобы изменить то, как это руководство выглядит и движется

## Базовые стили

Начнем с того, что сделаем заголовки на этой странице красивыми. С `glamorous`, вместо
обычного синтаксиса CSS, с которым вы, возможно, знакомы, мы используем обычные JavaScript
объекты.

Измените `Heading` так:

```js
const Heading = glamorous.h1({
  fontSize: '2.4em',
  marginTop: 10,
  color: '#CC3A4B',
})
```
  
## Медиа Запросы

Сделаем уменьшенные заголовки для узких областей просмотра (как на мобильном
устройстве)

Обновите `Heading` так:

```js
const Heading = glamorous.h1({
  fontSize: '2.4em',
  marginTop: 10,
  color: '#CC3A4B',
  [mediaQueries.phone]: {
    fontSize: '1.8em',
    backgroundColor: '#CC3A4B',
    color: 'white'
  },
})
```

Теперь измените размер страницы чтобы увидеть что изменилось

## Псевдо Классы

У нас есть ссылка [ссылка](https://www.youtube.com/watch?v=dQw4w9WgXcQ). Добавим стили
ее псевдо классам: `active`, `visited`, и `hover`.

Обновите `Link` так:

```js
const Link = glamorous.a({
  ':visited': {
    color: 'darkblue',
  },
  ':hover,:active,:focus': {
    color: 'darkred',
  },
})
```

_Вы уже были по этой ссылке? 😈_

## Псевдо Элементы

- это
- наш
- самый
- отличный
- список

Поменяем то, как рендерятся элементы списка с помощью псевдо элементов.

```js
const ListItem = glamorous.li({
  ':before': {
    content: '"💎"',
  }
})
```

> ВНИМАНИЕ! Это просто забыть в CSS, но значение свойства `content` окружается
> кавычками. Несмотря на то, что вы технически делаете это потому что 
> вы преобразовываете `content` в строку, эта строка инжектится в файл
> стилей вместе с кавычками.  

## Динамические Стили

Вы можете предоставить функцию как аргумент для `glamorousComponentFactory` 
(кстати, это то как работает `glamorous.h1`). Эта функция будет вызвана с
`props`.

Компонент `CodeBlock` принимает `language` как prop. Вот что представляет собой
код блока `html`:

```html
<html>
<head>
  <title>Привет мир!</title>
</head>
<body>
  Привет мир!
</body>
</html>
```

Изменим стили для блока `html` :

```js
const CodeBlock = glamorous.pre(props => {
  const isHTML = props.language === 'html'
  if (isHTML) {
    return {
      padding: 20,
      backgroundColor: '#0c1e35',
    }
  }
})
```

## Мердж Стилей

`glamorous` под капотом использует [`glamor`](https://github.com/threepointone/glamor) 
для генерации и вставки CSS который вы пишете. Одна из самых клевых фич
`glamor` это то, насколько он компонуем. C `glamorousComponentFactory` функциями,
(как и `glamorous.pre`) вы можете использовать любое количество аргументов и стили
будут слиты. Вдобавок, вы можете предоставить массив или возвратить массив динамических стилей
и они тоже будут слиты между собой (при конфликте преимущество будет за последним стилем).
Давайте попробуем:

Обновите `CodeBlock` чтобы он выглядел так:

```js
const CodeBlock = glamorous.pre({
  position: 'relative',
  padding: 20,
  ':before': {
    position: 'absolute',
    top: '0',
    opacity: '0.6',
    left: '7px',
    fontSize: '0.8rem',
  },
}, props => {
  const isHTML = props.language === 'html'
  let styles = [
    {
      ':before': {
        content: `"${props.language}"`,
      }
    }
  ]
  if (isHTML) {
    styles.push({
      backgroundColor: '#0c1e35',
    })
  }
  // returning an array here.
  return styles
})
```

## Вот и всё!

Это все, что у нас есть на данный момент. Если вы хотите помочь с руководством, 
это было бы прекрасно! Пожалуйста, заходите на наш [репозиторий на Гитхабе!](https://github.com/kentcdodds/glamorous-website)
