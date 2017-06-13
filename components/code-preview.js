import React from 'react'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import { LiveContextTypes } from 'react-live/lib/components/Live/LiveProvider'
import glamorous from 'glamorous'
import stripIndent from './utils/strip-indent'

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

export default CodePreview
