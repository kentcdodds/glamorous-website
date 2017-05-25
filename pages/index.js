import React from 'react'
import {rehydrate} from 'glamor'
import glamorous from 'glamorous'
import Logo from '../components/glamorous-logo'
import {Button, SecondaryButton} from '../components/styled-links'
import Layout from '../components/layout'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  rehydrate(window.__NEXT_DATA__.ids)
}

const {Div} = glamorous

export default () => {
  return (
    <Layout>
      <Div margin="20px auto" maxWidth={700} textAlign="center">
        <Logo marginTop={50}/>
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

