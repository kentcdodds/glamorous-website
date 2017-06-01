import React from 'react'
import glamorous from 'glamorous'
import {Button} from '../components/styled-links'
import Layout from '../components/layout'
import CodePreview from '../components/code-preview'
import HomePageExample from '../examples/home-page-example'
import Hero from '../components/hero'

const CodePreviewWrapper = glamorous.div((props, {colors}) => ({
  position: 'relative',
  padding: '1em',
  background: 'transparent',
  '::after': {
    content: '""',
    top: '15em',
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    background: colors.primaryMed,
    zIndex: -1,
  },
}))

const CodeBlock = glamorous.div((props, {colors, fonts}) => ({
  background: colors.code,
  borderRadius: 5,
  fontFamily: fonts.monospace,
  color: colors.lightGray,
  padding: '15px 0',
  maxWidth: 650,
  width: '100%',
  textAlign: 'center',
  margin: '0 auto',
  marginTop: 40,
}))

const GettingStarted = glamorous(Button)(
  {
    display: 'block',
    margin: '3.5rem auto',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: '1.3rem',
    width: '90%',
    maxWidth: 450,
  },
  (props, {colors}) => ({
    color: colors.white,
  }),
)

const Home = ({url}) => {
  return (
    <Layout pathname={url ? url.pathname : ''}>
      <Hero>
        Maintainable CSS with React
      </Hero>
      <CodePreviewWrapper>
        <CodePreview code={HomePageExample} />
        <CodeBlock>
          npm install --save glamorous react glamor prop-types
        </CodeBlock>
      </CodePreviewWrapper>
      <GettingStarted prefetch={process.env.USE_PREFETCH} href="/guides">
        Click Here to get started
      </GettingStarted>
    </Layout>
  )
}

export default Home
