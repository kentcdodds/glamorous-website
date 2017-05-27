import React from 'react'
import glamorous from 'glamorous'
import Logo from '../components/glamorous-logo'
import Layout from '../components/layout'

const {Div} = glamorous

export default () => {
  return (
    <Layout>
      <Div margin="20px auto" maxWidth={700} textAlign="center">
        <Logo marginTop={50}/>
        <glamorous.P>edit in pages/guides.js</glamorous.P>
      </Div>
    </Layout>
  )
}

