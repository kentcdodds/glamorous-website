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

// Used to hide text for a11y - ie. Home in navigation
const Hidden = glamorous.span({
  position: 'absolute',
  left: '-10000px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
})

export default Nav

function Nav({pathname}) {
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
            <Hidden>Home</Hidden>
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            prefetch={process.env.USE_PREFETCH}
            href="/basics"
            pathname={pathname}
          >
            Basics
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            prefetch={process.env.USE_PREFETCH}
            href="/advanced"
            pathname={pathname}
          >
            Advanced
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
            href="/integrations"
            pathname={pathname}
          >
            Integrations
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            prefetch={process.env.USE_PREFETCH}
            href="/api"
            pathname={pathname}
          >
            API
          </Anchor>
        </ListItem>
      </List>
    </glamorous.Nav>
  )
}
