import React from 'react'
import glamorous from 'glamorous'
import {Anchor} from '../components/styled-links'
import * as colors from '../styles/colors'

const Footer = glamorous.footer({
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '5rem',
  width: '100%',
  maxWidth: 600,
  paddingTop: 10,
  paddingBottom: 10,
  fontSize: '0.6em',
  textAlign: 'center',
  borderTop: `1px solid ${colors.faded}`
})


export default () => {
  return (
    <Footer>
      Made with 💙 by <Anchor external href="https://github.com/paypal">PayPal</Anchor>.
    </Footer>
  )
}
