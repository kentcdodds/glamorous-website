export const HomePageExample = `const solidColors = {
  backgroundColor: '#ED5C70',
  color: '#fff'
}

const transparentColors = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  color: '#ED5C70'
}

const secondaryButtonStyles = {
  ...transparentColors,
  ':hover': solidColors
}

const Wrapper = glamorous.div({
  textAlign: 'center'
})

const Button = glamorous.a(
  solidColors,
  {
    border: '1px solid #F67982',
    width: '11em',
    padding: '0.7em 0',
    textDecoration: 'none',
    borderRadius: 4,
    display: 'inline-block',
    margin: '.5em 1em',
    transition: 'all .3s',
    ':hover': transparentColors,
  }
)

const SecondaryButton = glamorous(Button)(secondaryButtonStyles)

render(
  <glamorous.Div textAlign="center">
    <Button href="https://github.com/paypal/glamorous">GitHub</Button>
    <SecondaryButton href="http://kcd.im/glamorous-help">Try It</SecondaryButton>
  </glamorous.Div>
)`
