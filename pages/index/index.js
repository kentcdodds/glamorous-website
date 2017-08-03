import React from 'react'
import glamorous from 'glamorous'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
} from '@kentcdodds/temp-react-live'
import {LiveContextTypes} from '@kentcdodds/temp-react-live/lib/components/Live/LiveProvider'
import Head from 'next/head'
import stripIndent from '../../components/utils/strip-indent'
import Layout from '../../components/layout'
import {Button} from '../../components/styled-links'
import Hero from '../../components/hero'
import twitterCard from '../../components/twitter-card'
import homePageExample from './content/home-page-example.raw'
import content from './content/index.md'

const CodePreviewWrapper = glamorous.div(props => ({
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
    background: props.theme.colors.primaryMed,
    zIndex: -1,
  },
}))

const CodeBlock = glamorous.div(props => ({
  background: props.theme.colors.blue,
  borderRadius: 5,
  fontFamily: props.theme.fonts.monospace,
  color: props.theme.colors.lightGray,
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
  props => ({
    color: props.theme.colors.white,
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

const StyledLiveError = glamorous(LiveError)(props => ({
  color: props.theme.colors.code,
  fontFamily: props.theme.fonts.monospace,
  backgroundColor: props.theme.colors.white,
  flexBasis: '100%',
  width: '100%',
  maxWidth: '100%',
  padding: '1rem',
}))

const HomepageLivePreview = (
  // eslint-disable-next-line
  { className, tryIt, ...rest },
  {live: {element: LiveButton}},
) => {
  return (
    <glamorous.Div textAlign="center" marginBottom="30px">
      <LiveButton href="https://github.com/paypal/glamorous" primary>
        GitHub
      </LiveButton>
      <LiveButton href="http://kcd.im/glamorous-help">
        {tryIt}
      </LiveButton>
    </glamorous.Div>
  )
}

HomepageLivePreview.contextTypes = LiveContextTypes

const StyledLivePreview = glamorous(HomepageLivePreview)({
  padding: '1rem',
})

function CodePreview({code, tryIt, scope = {glamorous}}) {
  return (
    <StyledLiveProvider code={stripIndent(code).trim()} scope={scope}>
      <StyledLivePreview tryIt={tryIt} />
      <StyledLiveError />
      <StyledLiveEditor />
    </StyledLiveProvider>
  )
}

function Home({url}) {
  return (
    <Layout pathname={url ? url.pathname : ''} topNav={true}>
      <Head>
        <title>
          {content.title}
        </title>
        {twitterCard({
          card: 'summary_large_image',
          title: content.tagline,
          description: content.twitterDescription,
          pathname: url ? url.pathname : '',
        })}
      </Head>
      <Hero css={{maxWidth: 900}}>
        {content.tagline}
      </Hero>
      <CodePreviewWrapper>
        <CodePreview code={homePageExample} tryIt={content.tryIt} />
        <CodeBlock>
          npm install --save glamorous react glamor prop-types
        </CodeBlock>
      </CodePreviewWrapper>
      <GettingStarted
        prefetch={process.env.USE_PREFETCH}
        href="/getting-started"
      >
        {content.callToAction}
      </GettingStarted>
    </Layout>
  )
}

export default Home
