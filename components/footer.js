import React from 'react'
import glamorous from 'glamorous'
import {Anchor} from '../components/styled-links'

const Footer = glamorous.footer((props, theme) => ({
  paddingTop: 10,
  paddingBottom: 10,
  fontSize: '0.6em',
  textAlign: 'center',
  background: theme.colors.white,
}))

export default PageFooter

function PageFooter() {
  return (
    <Footer>
      Made with <span role="img" aria-label="love">💙</span>by
      {' '}
      <Anchor external href="https://github.com/paypal">PayPal</Anchor>
      .
    </Footer>
  )
}
