module.exports = {
  title: 'Animación',
  subtitle: '',
  description: `
    Para hacer animaciónes con glamorous, puedes usar las transiciones regulares en CSS para cosas sencillas,
    y para cosas más avanzadas, puede usar ~keyframes~ vía ~glamor~'s ~css.keyframes~
    API.

    ~~~js
    // importar css desde glamor
    import { css } from 'glamor'

    // Definir los estilos de animación
    const animationStyles = props => {
      const bounce = css.keyframes({
        '0%': { transform: ~scale(1.01)~ },
        '100%': { transform: ~scale(0.99)~ }
      })
      return {animation: ~\${bounce} 0.2s infinite ease-in-out alternate~}
    }

    // Definir el elemento
    const AnimatedDiv = glamorous.div(animationStyles)

    // Utilizar en una función render
    <AnimatedDiv>
      Bounce.
    </AnimatedDiv>
    ~~~
  `.replace(/~/g, '`'),
  codeSandboxId: '31VMyP7XO',
  codeSandboxSummary: 'Ejemplo de animación',
  filename: __filename,
}
