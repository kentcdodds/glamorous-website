import React from 'react'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import glamorous from 'glamorous'

const StyledLiveProvider = glamorous(LiveProvider)({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'stretch',
  alignItems: 'stretch',
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

const CodePreview = props => {
  return (
    <StyledLiveProvider noInline code={props.code} scope={{glamorous}}>
      <StyledLiveEditor />
      <LiveError />
      <StyledLivePreview />
    </StyledLiveProvider>
  )
}

export default CodePreview
