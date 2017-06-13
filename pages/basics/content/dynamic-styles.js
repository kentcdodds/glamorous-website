module.exports = {
  title: 'Dynamic Styles + Static Styles',
  subtitle: '',
  description: `
  One of the nice bits of glamorous is that it allows you to make a clear
  separation between your dynamic and static styles by forcing you to choose
  between an object literal and a function. Here's an example of having both
  dynamic and static styles:

  ~~~js
  const MyLink = glamorous.a(
    {
      color: 'blue',
      textDecoration: 'none',
    },
    ({size = 'small'}) => ({
      fontSize: size === 'big' ? 24 : 16,
    }),
    // you can continue to provide any number of arguments
    // and ~glamor~ will merge them. In the event of a
    // style conflict, the last one wins.
  )
  ~~~

  You can see a live preview of this example on [codesandbox](https://codesandbox.io/s/mZkpo0lKA).

  ~~~js {summary: 'Note, you can also use arrays of styles if you need:'}
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

  // result of <MyDiv big={true} square={false} /> will be:
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
  ~~~

  `.replace(/~/g, '`'),
  filename: __filename,
}
