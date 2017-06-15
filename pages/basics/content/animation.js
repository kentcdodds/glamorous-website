module.exports = {
  title: 'Animation',
  subtitle: '',
  description: `
    Try this in [your browser](https://codesandbox.io/s/31VMyP7XO)
    ~~~js
    // import css from glamor
    import { css } from 'glamor'

    // Define the animation styles
    const animationStyles = props => {
      const bounce = css.keyframes({
        '0%': { transform: ~scale(1.01)~ },
        '100%': { transform: ~scale(0.99)~ }
      })
      return {animation: ~\${bounce} 0.2s infinite ease-in-out alternate~}
    }

    // Define the element
    const AnimatedDiv = glamorous.div(animationStyles)

    // Use in a render function
    <AnimatedDiv>
      Bounce.
    </AnimatedDiv>
    ~~~
  `.replace(/~/g, '`'),
  filename: __filename,
}
