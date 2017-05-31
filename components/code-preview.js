import React from 'react'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import glamorous from 'glamorous'

const StyledLiveProvider = glamorous(LiveProvider)({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  maxWidth: '50rem',
})

const StyledLiveEditor = glamorous(LiveEditor)({
  flexBasis: '50%',
  width: '50%',
  maxWidth: '50%',
})

const StyledLivePreview = glamorous(LivePreview)((props, {colors}) => ({
  backgroundColor: colors.white,
  flexBasis: '50%',
  width: '50%',
  maxWidth: '50%',
  padding: '1rem',
}))

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
      <StyledLiveEditor />
      <StyledLivePreview />
      <StyledLiveError />
    </StyledLiveProvider>
  )
}

export default CodePreview
