import React from 'react'
import Head from 'next/head'
import glamorous from 'glamorous'
import ReactMarkdown from 'react-markdown'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import stripIndent from '../../components/utils/strip-indent'
import Layout from '../../components/layout'
import twitterCard from '../../components/twitter-card'
import pageContent from './content/index.md'
import guideMarkdown from './content/guide.md'
import codeString from './content/getting-started-code.raw'

const StyledLiveProvider = glamorous(LiveProvider)({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '100%',
})

const StyledLiveEditor = glamorous(LiveEditor)({
  flex: 1,
})

const StyledLivePreview = glamorous(LivePreview)({
  padding: '1rem',
  backgroundColor: 'white',
  flex: 1,
})

const StyledLiveError = glamorous(LiveError)((props, {colors, fonts}) => ({
  color: colors.code,
  fontFamily: fonts.monospace,
  backgroundColor: colors.white,
  width: '100%',
  padding: '1rem',
}))

const StyledReactMarkdown = glamorous(ReactMarkdown)({})

StyledReactMarkdown.defaultProps = {source: guideMarkdown.markdown}

function CodePreview() {
  return (
    <StyledLiveProvider
      noInline={true}
      code={stripIndent(codeString).trim()}
      scope={{glamorous, ReactMarkdown: StyledReactMarkdown}}
    >
      <StyledLiveError />
      <glamorous.Div display="flex">
        <StyledLiveEditor />
        <StyledLivePreview />
      </glamorous.Div>
    </StyledLiveProvider>
  )
}

function Page({url}) {
  return (
    <Layout pathname={url ? url.pathname : ''}>
      <Head>
        {twitterCard({
          card: 'summary',
          title: `glamorous - ${pageContent.title}`,
          description: pageContent.heading,
          pathname: url ? url.pathname : '',
        })}
      </Head>
      <CodePreview />
    </Layout>
  )
}

export default Page
// hiiss
