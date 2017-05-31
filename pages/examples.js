import React from 'react'
import glamorous, {Div} from 'glamorous'
import Logo from '../components/glamorous-logo'
import Layout from '../components/layout'

function Examples(props) {
  return (
    <Layout pathname={props.url ? props.url.pathname : ''}>
      <Div margin="20px auto" maxWidth={700} textAlign="center">
        <Logo marginTop={50} />
        <glamorous.P>edit in pages/examples.js</glamorous.P>
      </Div>
    </Layout>
  )
}

export default Examples
