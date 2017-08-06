---
title: Динамические Стили + Статические Стили
---

Одно из достоинств glamorous - это то, что он позволяет вам проводить чёткое разделение
между динамическими и статическими стилями, принуждая вас выбирать между объектом
и функцией. Ниже приведён пример, имеющий оба - статический и динамический стили:

```interactive
const MyLink = glamorous.a(
  {
    color: 'blue',
    textDecoration: 'none',
  },
  ({size = 'small'}) => ({
    fontSize: size === 'big' ? 24 : 16,
  })
  // можно продолжить передавать любое количество
  // аргументов и `glamor` будет объединять их.
  // В случае конфликта стилей, последний получит
  // приоритет.
)

render(
  <div>
    <MyLink href="#">Default is small</MyLink>
    <br />
    <MyLink href="#" size="big">size="big"</MyLink>
  </div>
)
```

> Попробовать в браузере [здесь](https://codesandbox.io/s/mZkpo0lKA)!

```interactive {clickToRender: true, summary: 'Можно использовать массив для объединения стилей'}
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
        color: 'green', // этот получает приоритет, т.к. передаётся последним
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
    // обратите внимание что тут возвращается массив
    return [bigStyles, shapeStyles]
  }
)

render(
  <MyDiv big={true} square={false}>
    Измените размер окна, чтобы увидеть media queries в действии.
  </MyDiv>
)
```
