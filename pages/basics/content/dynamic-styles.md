---
title: Dynamic Styles + Static Styles
---

One of the nice bits of glamorous is that it allows you to make a clear
separation between your dynamic and static styles by forcing you to choose
between an object literal and a function. Here's an example of having both
dynamic and static styles:

```interactive
const MyLink = glamorous.a(
  {
    color: 'blue',
    textDecoration: 'none',
  },
  ({size = 'small'}) => ({
    fontSize: size === 'big' ? 24 : 16,
  })
  // you can continue to provide any number of arguments
  // and `glamor` will merge them. In the event of a
  // style conflict, the last one wins.
)

render(
  <div>
    <MyLink href="#">Default is small</MyLink>
    <br />
    <MyLink href="#" size="big">size="big"</MyLink>
  </div>
)
```

> Try this out in your browser [here](https://codesandbox.io/s/mZkpo0lKA)!

```interactive {clickToRender: true, summary: 'Can use arrays to merge styles together'}
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
        color: 'green', // this will win because it comes later
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
    // note that I'm returning an array here
    return [bigStyles, shapeStyles]
  }
)

render(
  <MyDiv big={true} square={false}>
    Resize your window to see media queries in action.
  </MyDiv>
)
```
