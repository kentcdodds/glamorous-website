import React from 'react'
import glamorous, {Div} from 'glamorous'
import {Anchor} from '../components/styled-links'
import content from './content/contributors'

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
  transition: 'transform .3s',
  '&:focus, &:hover, &:active': {
    transform: 'scale(1.2)',
  },
})

const contributor = username =>
  (<Anchor key={username} href={`https://github.com/${username}`}>
    <Img
      src={`https://github.com/${username}.png?size=90`}
      alt={`${username}'s GitHub avatar`}
    />
  </Anchor>)

export default Contributors

function Contributors({contributors = []}) {
  if (contributors.length === 0) {
    return <noscript />
  }

  return (
    <Container>
      <h3>
        {content.header}
      </h3>
      <Div>
        {contributors.map(contributor)}
      </Div>
    </Container>
  )
}
