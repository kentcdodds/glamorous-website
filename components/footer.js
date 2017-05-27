import React from 'react'
import glamorous from 'glamorous'
import {Anchor} from '../components/styled-links'
import * as colors from '../styles/colors'

export default () => {
  return (
    <glamorous.Footer bottom={0} right={0} left={0}>
      <glamorous.Div
        marginLeft="auto"
        marginRight="auto"
        marginTop="5rem"
        width="100%"
        maxWidth={600}
        paddingTop={10}
        paddingBottom={10}
        fontSize="0.6em"
        textAlign="center"
        borderTop={`1px solid ${colors.faded}`}
        >
        Made with 💙 by
        {' '}
        <Anchor external href="https://github.com/paypal">PayPal</Anchor>
        .
      </glamorous.Div>
    </glamorous.Footer>
  )
}
