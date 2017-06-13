import React from 'react'
import glamorous from 'glamorous'
import {withContent} from '../../components/locale'
import Layout from '../../components/layout'
import {Button} from '../../components/styled-links'
import CodePreview from '../../components/code-preview'
import Hero from '../../components/hero'
import getHomePageExample from '../../examples/home-page-example'

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
  background: colors.blue,
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

function Home({url, content, locale}) {
  return (
    <Layout pathname={url ? url.pathname : ''} locale={locale}>
      <Hero>
        {content.tagline}
      </Hero>
      <CodePreviewWrapper>
        <CodePreview code={getHomePageExample(locale)} />
        <CodeBlock>
          npm install --save glamorous react glamor prop-types
        </CodeBlock>
      </CodePreviewWrapper>
      <GettingStarted prefetch={process.env.USE_PREFETCH} href="/basics">
        {content.callToAction}
      </GettingStarted>
    </Layout>
  )
}

export default withContent({page: 'index'}, Home)
