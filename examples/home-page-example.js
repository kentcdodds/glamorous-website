export default `
  const Button = glamorous.a({
    border: '1px solid #F67982',
    width: '11em',
    padding: '0.7em 0',
    textDecoration: 'none',
    borderRadius: 4,
    display: 'inline-block',
    margin: '.5em 1em',
    transition: 'all .3s',
  }, ({primary}) => ({
      backgroundColor: primary ? '#CC3A4B' : 'rgba(255, 255, 255, 0.5)',
      color: primary ? '#fff' : '#DA233C',
      ':hover': {
        backgroundColor: primary ? 'rgba(255, 255, 255, 0.5)' : '#CC3A4B',
        color: primary ? '#DA233C' : '#fff',
      }
  }))
`
