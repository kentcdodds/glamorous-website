import React from 'react'
import glamorous from 'glamorous'
import Link from 'next/link'
import {Anchor} from '../components/styled-links'
import LipstickIcon from './lipstick-icon'

const ListItem = glamorous.li({
  paddingLeft: 10,
  paddingRight: 10,
  borderBottom: '1px solid',
  paddingBottom: 4
})

export default () => {
  return (
    <glamorous.Nav width="100%">
      <glamorous.Ul
        listStyle="none"
        display="flex"
        justifyContent="flex-end"
        fontSize=".9em"
        marginTop={0}
        marginBottom={0}
        paddingLeft={0}
        >
        <ListItem>
          <Link prefetch={process.env.USE_PREFETCH} href="/">
            <LipstickIcon width={20}/>
          </Link>
        </ListItem>
        <ListItem>
          <Anchor external href="https://github.com/paypal/glamorous">GitHub</Anchor>
        </ListItem>
        <ListItem>
          <Anchor prefetch={process.env.USE_PREFETCH} href="/guides">Guides</Anchor>
        </ListItem>
        <ListItem>
          <Anchor prefetch={process.env.USE_PREFETCH} href="/examples">Examples</Anchor>
        </ListItem>
        <ListItem>
          <Anchor prefetch={process.env.USE_PREFETCH} href="/docs">Docs</Anchor>
        </ListItem>
      </glamorous.Ul>
    </glamorous.Nav>
  )
}
