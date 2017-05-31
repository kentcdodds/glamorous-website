import React from 'react'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import glamorous from 'glamorous'

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

const CodePreview = props => {
  return (
    <StyledLiveProvider noInline code={props.code} scope={{glamorous}}>
      <StyledLivePreview />
      <StyledLiveError />
      <StyledLiveEditor />
    </StyledLiveProvider>
  )
}

export default CodePreview
