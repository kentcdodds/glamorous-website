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
})

const StyledLiveEditor = glamorous(LiveEditor)({})

const StyledLivePreview = glamorous(LivePreview)({
  padding: '1rem',
})

const StyledLiveError = glamorous(LiveError)((props, {colors, fonts}) => ({
  color: colors.code,
  fontFamily: fonts.monospace,
  backgroundColor: colors.white,
  flexBasis: '100%',
  width: '100%',
  maxWidth: '100%',
  padding: '1rem',
}))

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
      <StyledLivePreview />
      <StyledLiveError />
      <StyledLiveEditor />
    </StyledLiveProvider>
  )
}

export default CodePreview
