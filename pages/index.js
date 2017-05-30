import React from 'react'
import glamorous from 'glamorous'
import Logo from '../components/glamorous-logo'
import {Button, SecondaryButton} from '../components/styled-links'
import Layout from '../components/layout'

const {Div} = glamorous

export default Root

function Root() {
  return (
    <Layout>
      <Div margin="20px auto" maxWidth={700} textAlign="center">
        <Logo marginTop={50} />
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
    </Layout>
  )
}
