import React from 'react'
import glamorous from 'glamorous'
import Logo from '../components/glamorous-logo'
import {Button, SecondaryButton} from '../components/styled-links'
import Layout from '../components/layout'

const {Div} = glamorous

export default () => {
  return (
    <Layout>
      <Div margin={20}>
        <Div
          margin="0 auto"
          maxWidth={800}
          textAlign="center"
          >
          <Logo maxWidth={500} margin="0 auto"/>
          <Div marginTop={30}>
            Maintainable CSS with React
          </Div>
          <Button href="https://github.com/paypal/glamorous">
            GitHub
          </Button>
          <SecondaryButton href="http://kcd.im/glamorous-help">
            Try It
          </SecondaryButton>
        </Div>
      </Div>
    </Layout>
  )
}
