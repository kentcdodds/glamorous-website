import React from 'react'
import glamorous from 'glamorous'
import {Anchor} from '../components/styled-links'

const Footer = glamorous.footer({
  paddingTop: 10,
  paddingBottom: 10,
  fontSize: '0.6em',
  textAlign: 'center',
  background: 'white'
})

export default () => {
  return (
    <Footer>
      Made with 💙 by <Anchor external href="https://github.com/paypal">PayPal</Anchor>.
    </Footer>
  )
}
