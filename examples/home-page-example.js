import {getContent} from '../components/locale'

export default locale => {
  const content = getContent(locale, {example: 'home-page-example'})
  return `
    const Button = glamorous.a({
      border: '1px solid #F67982',
      width: '11em',
      padding: '0.7em 0',
      textDecoration: 'none',
      borderRadius: 4,
      display: 'inline-block',
      margin: '.5em 1em',
      transition: 'all .3s',
    })

    const solidColors = {
      backgroundColor: '#CC3A4B',
      color: '#fff',
    }

    const transparentColors = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      color: '#DA233C',
    }

    const Primary = glamorous(Button)(
      solidColors,
      {
        ':hover': transparentColors,
      }
    )

    const Secondary = glamorous(Button)(
      transparentColors,
      {
        ':hover': solidColors,
      }
    )

    render(
      <glamorous.Div textAlign="center">
        <Primary href="https://github.com/paypal/glamorous">
          GitHub
        </Primary>
        <Secondary href="http://kcd.im/glamorous-help">
          ${content.tryIt}
        </Secondary>
      </glamorous.Div>
    )
  `
}
