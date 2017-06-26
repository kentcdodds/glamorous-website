module.exports = {
  title: 'Premiers pas',
  subtitle: 'débuter avec Glamorous',
  description: `
    <a href="https://youtu.be/lmrQTpJ_3PM" title="démonstration de glamorous">
    <img src="https://github.com/paypal/glamorous/raw/master/other/glamorous-walkthrough.png" alt="Capture vidéo" title="Capture vidéo" width="700" />
  </a>

  Voici un exemple de base qui vous montre comment commencer à créer un composant avec la magie du css-dans-le-js.

  ~~~interactive
  const { Div } = glamorous

  function App() {
    return (
      <Div
        fontSize={20}
        textAlign="center"
      >
        Bonjour Glamorous!
      </Div>
    )
  }

  render(<App/>)
  ~~~
  `.replace(/~/g, '`'),
  codesandboxId: 'mDLZ1oKn',
  filename: __filename,
}
