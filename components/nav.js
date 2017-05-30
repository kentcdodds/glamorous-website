import React from 'react'
import glamorous from 'glamorous'
import {Anchor} from '../components/styled-links'
import LipstickIcon from './lipstick-icon'

const ListItem = glamorous.li({
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 4,
})

// Use withTheme with glamorous.Ul, or this ?
const List = glamorous.ul((props, {mediaQueries}) => ({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.9em',
  marginTop: 0,
  marginBottom: 0,
  padding: '0 20px',
  height: 56,
  [mediaQueries.mediumUp]: {
    height: 64,
    justifyContent: 'flex-end',
  },
}))

export default Nav

function Nav() {
  return (
    <glamorous.Nav>
      <List>
        <ListItem>
          <Anchor prefetch={process.env.USE_PREFETCH} href="/">
            <LipstickIcon width={20} />
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor prefetch={process.env.USE_PREFETCH} href="/guides">
            Guides
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor prefetch={process.env.USE_PREFETCH} href="/examples">
            Examples
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor prefetch={process.env.USE_PREFETCH} href="/docs">Docs</Anchor>
        </ListItem>
      </List>
    </glamorous.Nav>
  )
}
