module.exports = {
  title: 'Animation',
  subtitle: '',
  description: `
    Pour faire de l'animation avec glamorous, vous pouvez utiliser pour des choses simples
    des transitions CSS ordinaires et pour des choses plus avancées, vous pouvez utiliser ~keyframes~
    via l'API ~css.keyframes~ de glamour.

    ~~~js
    // importe css depuis glamor
    import { css } from 'glamor'

    // Définit les styles de l'animation
    const animationStyles = props => {
      const bounce = css.keyframes({
        '0%': { transform: ~scale(1.01)~ },
        '100%': { transform: ~scale(0.99)~ }
      })
      return {animation: ~\${bounce} 0.2s infinite ease-in-out alternate~}
    }

    // Definit l'élément
    const AnimatedDiv = glamorous.div(animationStyles)

    // Utilisation dans une fonction de rendu
    <AnimatedDiv>
      Bounce.
    </AnimatedDiv>
    ~~~
  `.replace(/~/g, '`'),
  codeSandboxId: '31VMyP7XO',
  codeSandboxSummary: 'animation example',
  filename: __filename,
}
