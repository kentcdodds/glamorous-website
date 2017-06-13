import React from 'react'
import glamorous from 'glamorous'
import {Anchor} from '../components/styled-links'
import LipstickIcon from './lipstick-icon'
import Separator from './separator'
import LocaleChooser from './locale-chooser'
import MenuSVG from './svgs/menu.svg'

const NavToggle = glamorous.a((props, {colors, mediaQueries}) => ({
  fill: colors.primaryMed,
  backgroundColor: colors.white,
  display: 'block',
  width: '100%',
  [mediaQueries.mediumUp]: {
    display: 'none',
  },
}))

const NavSeparator = glamorous(Separator)((props, {mediaQueries}) => ({
  height: 1,
  [mediaQueries.mediumUp]: {
    display: 'none',
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

const ListItem = glamorous.li({
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 4,
})

// Use withTheme with glamorous.Ul, or this ?
const List = glamorous.ul((props, {colors, mediaQueries}) => ({
  listStyle: 'none',
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.25em',
  margin: '0 auto',
  padding: 0,
  maxWidth: '50rem',
  height: 'auto',
  width: '100%',
  maxHeight: props.isOpen ? '100%' : '0',
  overflow: 'hidden',
  textAlign: 'center',
  backgroundColor: colors.white,
  [mediaQueries.mediumUp]: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 'auto',
    maxHeight: '4rem',
    backgroundColor: 'inherit',
  },
}))

export default class Nav extends React.Component {
  state = {
    open: false,
  }

  handleClick() {
    this.setState(prevState => {
      return {open: !prevState.open}
    })
  }

  render() {
    return (
      <glamorous.Nav width="100%">
        <NavToggle onClick={this.handleClick.bind(this)}><MenuSVG /></NavToggle>
        <NavSeparator />
        <List isOpen={this.state.open}>
          <ListItem>
            <LocaleChooser locale={this.props.locale} />
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/"
              pathname={this.props.pathname}
            >
              <LipstickIcon width={20} />
              <Hidden>Home</Hidden>
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/basics"
              pathname={this.props.pathname}
            >
              Basics
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/advanced"
              pathname={this.props.pathname}
            >
              Advanced
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/examples"
              pathname={this.props.pathname}
            >
              Examples
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/integrations"
              pathname={this.props.pathname}
            >
              Integrations
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/api"
              pathname={this.props.pathname}
            >
              API
            </Anchor>
          </ListItem>
        </List>
      </glamorous.Nav>
    )
  }
}
