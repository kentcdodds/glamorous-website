import React from 'react'
import glamorous from 'glamorous'
import mdToHTML from './utils/md-to-html'

const Container = glamorous.div(({type}, theme) => ({
  borderLeft: '4px solid',
  borderColor: theme.colors[type],
  backgroundColor: theme.colors[`${type}Light`],
  padding: '12px 22px 8px 28px',
  margin: '18px 0px 26px 0px',
}))

const Title = glamorous.div(({type}, theme) => ({
  color: theme.colors[type],
  fontWeight: 'bold',
}))

function Callout({type, title, children}) {
  return (
    <Container type={type}>
      <Title type={type}>
        <div dangerouslySetInnerHTML={{__html: mdToHTML(title)}} />
      </Title>
      <div>
        <div dangerouslySetInnerHTML={{__html: mdToHTML(children)}} />
      </div>
    </Container>
  )
}

export default Callout
