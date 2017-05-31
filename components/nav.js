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
  fontSize: '1.25em',
  margin: '0 auto',
  padding: 0,
  maxWidth: '50rem',
  height: '4rem',
  [mediaQueries.mediumUp]: {
    justifyContent: 'flex-end',
  },
}))

export default Nav

function Nav(pathname) {
  return (
    <glamorous.Nav>
      <List>
        <ListItem>
          <Anchor
            prefetch={process.env.USE_PREFETCH}
            href="/"
            pathname={pathname}
          >
            <LipstickIcon width={20} />
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            prefetch={process.env.USE_PREFETCH}
            href="/guides"
            pathname={pathname}
          >
            Guides
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            prefetch={process.env.USE_PREFETCH}
            href="/examples"
            pathname={pathname}
          >
            Examples
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            prefetch={process.env.USE_PREFETCH}
            href="/docs"
            pathname={pathname}
          >
            Documentation
          </Anchor>
        </ListItem>
      </List>
    </glamorous.Nav>
  )
}
