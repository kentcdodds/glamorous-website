module.exports = {
  title: 'Animación',
  subtitle: '',
  description: `
    Para hacer animaciones con glamorous, puedes usar las transiciones regulares de CSS para cosas sencillas,
    y para cosas más avanzadas, puedes usar ~keyframes~ a través de la API ~css.keyframes~ de ~glamor~.

    ~~~js
    // importamos css desde glamor
    import { css } from 'glamor'

    // Definimos los estilos de animación
    const animationStyles = props => {
      const bounce = css.keyframes({
        '0%': { transform: ~scale(1.01)~ },
        '100%': { transform: ~scale(0.99)~ }
      })
      return {animation: ~\${bounce} 0.2s infinite ease-in-out alternate~}
    }

    // Definimos el elemento
    const AnimatedDiv = glamorous.div(animationStyles)

    // Y lo utilizamos en una función render
    <AnimatedDiv>
      Bounce.
    </AnimatedDiv>
    ~~~
  `.replace(/~/g, '`'),
  codeSandboxId: '31VMyP7XO',
  codeSandboxSummary: 'Ejemplo de animación',
  filename: __filename,
}
