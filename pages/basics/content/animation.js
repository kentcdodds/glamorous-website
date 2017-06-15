module.exports = {
  title: 'Animation',
  subtitle: '',
  description: `
    To do animation with glamorous, you can use regular CSS transitions for simple things,
    and for more advanced stuff, you can use ~keyframes~ via ~glamor~'s ~css.keyframes~
    API.

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
  codeSandboxId: '31VMyP7XO',
  codeSandboxSummary: 'animation example',
  filename: __filename,
}
