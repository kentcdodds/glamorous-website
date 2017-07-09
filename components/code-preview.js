import React from 'react'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import * as styledSystem from 'styled-system'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import stripIndent from './utils/strip-indent'

const StyledLiveProvider = glamorous(LiveProvider)({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  maxWidth: '50rem',
  marginTop: 20,
  marginBottom: 20,
})

const StyledLiveEditor = glamorous(LiveEditor)({flex: 1.7})

const StyledLivePreview = glamorous(LivePreview)({
  padding: '1rem',
  flex: 1,
})

const StyledLiveError = glamorous(
  LiveError,
)(({theme: {colors, fonts}}) => ({
  color: colors.white,
  fontFamily: fonts.monospace,
  padding: '1rem',
  background: colors.error,
  fontSize: '0.8rem',
  whiteSpace: 'pre',
  lineHeight: 1,
  flex: 1,
  display: 'block',
}))

const EditorContainer = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'stretch',
  },
  ({theme: {misc, mediaQueries}}) => ({
    boxShadow: misc.boxShadow,
    flexDirection: 'column',
    [mediaQueries.mediumUp]: {
      flexDirection: 'row',
    },
  }),
)

function CodePreview({
  noInline = true,
  code,
  scope = {glamorous, styledSystem, glamor},
}) {
  return (
    <StyledLiveProvider
      noInline={noInline}
      code={stripIndent(code).trim()}
      scope={scope}
    >
      <EditorContainer>
        <StyledLiveEditor />
        <StyledLivePreview />
      </EditorContainer>
      <StyledLiveError />
    </StyledLiveProvider>
  )
}

export default CodePreview
