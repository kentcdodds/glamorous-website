import React from 'react'
import glamorous, {Div} from 'glamorous'
import Logo from '../components/glamorous-logo'
import Layout from '../components/layout'
import ReactLiveMarkdown from '../components/react-live-markdown'

function Advanced(props) {
  return (
    <Layout pathname={props.url ? props.url.pathname : ''}>
      <Div margin="20px auto" maxWidth={700} textAlign="center">
        <Logo marginTop={50} />
        <glamorous.P>edit in pages/examples.js</glamorous.P>
        <ReactLiveMarkdown path="/static/translations/en/advanced_refs.md" />
      </Div>
    </Layout>
  )
}

export default Advanced
