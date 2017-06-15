import React from 'react'
import glamorous, {Div} from 'glamorous'
import {Anchor} from '../components/styled-links'

const Container = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& > h3': {
    margin: '20px',
  },
})

const Img = glamorous.img({
  height: 45,
  width: 45,
  borderRadius: '100%',
  margin: '0 5px',
})

const contributor = username =>
  (<Anchor key={username} href={`https://github.com/${username}`}>
    <Img src={`https://github.com/${username}.png?size=90`} />
  </Anchor>)

export default function Contributors({contributors = []}) {
  if (contributors.length === 0) {
    return <noscript />
  }

  return (
    <Container>
      <h3>Contributors:</h3>
      <Div>
        {contributors.map(contributor)}
      </Div>
    </Container>
  )
}
