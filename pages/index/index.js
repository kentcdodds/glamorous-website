import React from 'react'
import glamorous from 'glamorous'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import { LiveContextTypes } from 'react-live/lib/components/Live/LiveProvider'
import stripIndent from '../../components/utils/strip-indent'
import {withContent} from '../../components/locale'
import Layout from '../../components/layout'
import {Button} from '../../components/styled-links'
import Hero from '../../components/hero'
import getHomePageExample from '../../examples/home-page-example'

const CodePreviewWrapper = glamorous.div((props, {colors}) => ({
  position: 'relative',
  padding: '1em',
  paddingTop: 0,
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

const StyledLiveProvider = glamorous(LiveProvider)({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  maxWidth: '50rem',
})

const StyledLiveEditor = glamorous(LiveEditor)({})

const StyledLiveError = glamorous(LiveError)((props, {colors, fonts}) => ({
  color: colors.code,
  fontFamily: fonts.monospace,
  backgroundColor: colors.white,
  flexBasis: '100%',
  width: '100%',
  maxWidth: '100%',
  padding: '1rem',
}))


const HomepageLivePreview = ({ className, ...rest }, { live: { element: Button }, live }) => {
  return (
    <glamorous.Div textAlign="center" marginBottom="30px">
      <Button href="https://github.com/paypal/glamorous" primary>
        GitHub
      </Button>
      <Button href="http://kcd.im/glamorous-help">
        Try it
      </Button>
    </glamorous.Div>
  )
}

HomepageLivePreview.contextTypes = LiveContextTypes


const StyledLivePreview = glamorous(HomepageLivePreview)({
  padding: '1rem',
})


function CodePreview({noInline = true, code, scope = {glamorous}}) {
  return (
    <StyledLiveProvider
      code={stripIndent(code).trim()}
      scope={scope}
    >
      <StyledLivePreview />
      <StyledLiveError />
      <StyledLiveEditor />
    </StyledLiveProvider>
  )
}

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
