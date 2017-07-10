import React, {Component} from 'react'
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

const NarrowScreenNotice = glamorous.div(({theme: {mediaQueries}}) => ({
  display: 'block',
  margin: '20px 10px',
  [mediaQueries.mediumUp]: {
    display: 'none',
  },
}))

const StyledLiveProvider = glamorous(LiveProvider)({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '100%',
})

const RightHandSide = glamorous.div(
  {
    flex: 1,
    overflow: 'auto',
  },
  ({theme: {mediaQueries}}) => ({
    [mediaQueries.mediumUp]: {
      maxWidth: '50%',
    },
  }),
)

const StyledLiveEditor = glamorous(LiveEditor)(
  {
    flex: 1,
  },
  ({theme: {mediaQueries}}) => ({
    display: 'none !important',
    [mediaQueries.mediumUp]: {
      display: 'block !important',
    },
  }),
)

const StyledLivePreview = glamorous(LivePreview)(
  {
    padding: '1rem',
    backgroundColor: 'white',
  },
  ({theme: {mediaQueries}}) => ({
    width: '100vw',
    [mediaQueries.mediumUp]: {
      width: 'inherit',
    },
  }),
)

const StyledLiveError = glamorous(LiveError)((props, {colors, fonts}) => ({
  color: colors.code,
  fontFamily: fonts.monospace,
  backgroundColor: colors.white,
  width: '100%',
  padding: '1rem',
  whiteSpace: 'pre',
}))

const StyledReactMarkdown = glamorous(ReactMarkdown)({})

StyledReactMarkdown.defaultProps = {source: guideMarkdown.markdown}

class CodePreview extends Component {
  componentDidMount() {
    this.rehighlight()
  }
  componentDidUpdate() {
    this.rehighlight()
  }
  rehighlight = () => {
    setTimeout(() => {
      // this is the way I found to get the highlighting
      // to take effect when the user makes changes
      // ugly I know.
      Prism.highlightAll()
    })
  }
  render() {
    return (
      <StyledLiveProvider
        noInline={true}
        code={stripIndent(codeString).trim()}
        scope={{glamorous, ReactMarkdown: StyledReactMarkdown}}
      >
        <StyledLiveError />
        <glamorous.Div display="flex" overflow="auto" maxHeight="86vh">
          <StyledLiveEditor onChange={this.rehighlight} />
          <RightHandSide>
            <NarrowScreenNotice>
              {pageContent.tooNarrow}
            </NarrowScreenNotice>
            <StyledLivePreview
              innerRef={node => {
                this._preview = node
              }}
            />
          </RightHandSide>
        </glamorous.Div>
      </StyledLiveProvider>
    )
  }
}

function Page({url}) {
  return (
    <Layout pathname={url ? url.pathname : ''} topNav={true}>
      <Head>
        <title>
          {pageContent.title}
        </title>
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
