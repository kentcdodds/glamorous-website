import React from 'react'
import glamorous, {Div} from 'glamorous'
import Logo from '../components/glamorous-logo'
import Layout from '../components/layout'
import interactiveMarkdown from '../components/interactive-markdown'

function Advanced(props) {
  const locale = 'en-US'
  return (
    <Layout pathname={props.url ? props.url.pathname : ''}>
      <Div margin="20px auto" maxWidth={700} textAlign="center">
        <Logo marginTop={50} />
        <glamorous.P>edit in pages/advanced.js</glamorous.P>
        {interactiveMarkdown(
          require(`../translations/${locale}/advanced/refs`),
        )}
      </Div>
    </Layout>
  )
}

export default Advanced
