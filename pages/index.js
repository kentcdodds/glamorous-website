import React from 'react'
import glamorous from 'glamorous'
import Logo from '../components/glamorous-logo'
import {Button} from '../components/styled-links'
import Layout from '../components/layout'

const {Div} = glamorous

const Title = glamorous.h1((props, {colors}) => ({
  margin: '1em 0',
  color: colors.primaryMed,
  fontWeight: 'normal',
  fontSize: '1em'
}))

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
          <Title>
            Maintainable CSS with React
          </Title>
          <Button href="https://github.com/paypal/glamorous">
            GitHub
          </Button>
          <Button secondary href="http://kcd.im/glamorous-help">
            Try It
          </Button>
        </Div>
      </Div>
    </Layout>
  )
}
