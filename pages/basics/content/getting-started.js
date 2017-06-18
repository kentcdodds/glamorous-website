module.exports = {
  title: 'Getting Started',
  subtitle: 'start using Glamorous',
  description: `
    <a href="https://youtu.be/lmrQTpJ_3PM" title="glamorous walkthrough">
    <img src="https://github.com/paypal/glamorous/raw/master/other/glamorous-walkthrough.png" alt="Video Screenshot" title="Video Screenshot" width="700" />
  </a>

  Here are a basic example that show you how to get started making component with ~css-in-js~ magic

  ~~~interactive
  const { Div } = glamorous
  
  function App() {
    return (
      <Div
        fontSize={20}
        textAlign="center"
      >
        Hello Glamorous!
      </Div>
    )
  }

  render(<App/>)
  ~~~
  `.replace(/~/g, '`'),
  codesandboxId: 'mDLZ1oKn',
  filename: __filename,
}
