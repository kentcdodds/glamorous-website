import React from 'react'
import glamorous from 'glamorous'
import {Anchor} from '../components/styled-links'
import LipstickIcon from './lipstick-icon'
import Separator from './separator'
import LocaleChooser from './locale-chooser'
import MenuSVG from './svgs/menu.svg'
import content from './content/nav'

const Navbar = glamorous.nav((props, {mediaQueries}) => ({
  width: '100%',
  margin: 0,
  [mediaQueries.mediumUp]: {
    marginTop: '0.5rem',
  },
}))

const NavToggle = glamorous.a((props, {colors, mediaQueries}) => ({
  fill: colors.primaryMed,
  backgroundColor: colors.white,
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  paddingRight: '0.25rem',
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

  maxWidth: '50rem',
  height: 'auto',
  width: '100%',
  padding: props.isOpen ? '1rem 0' : 0,
  maxHeight: props.isOpen ? '100%' : 0,
  opacity: props.isOpen ? 1 : 0,
  overflow: 'hidden',
  textAlign: 'center',
  backgroundColor: colors.white,
  [mediaQueries.mediumUp]: {
    display: 'flex',
    justifyContent: 'center',
    width: 'auto',
    maxHeight: '4rem',
    backgroundColor: 'inherit',
    opacity: 1,
  },
}))

class Nav extends React.Component {
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
      <Navbar>
        <NavToggle onClick={this.handleClick.bind(this)}>
          <MenuSVG />
        </NavToggle>
        <NavSeparator />
        <List isOpen={this.state.open}>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/"
              pathname={this.props.pathname}
            >
              <LipstickIcon width={20} />
              <Hidden>
                {content.home}
              </Hidden>
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/basics"
              pathname={this.props.pathname}
            >
              {content.basics}
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/advanced"
              pathname={this.props.pathname}
            >
              {content.advanced}
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/examples"
              pathname={this.props.pathname}
            >
              {content.examples}
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/integrations"
              pathname={this.props.pathname}
            >
              {content.integrations}
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              prefetch={process.env.USE_PREFETCH}
              href="/api"
              pathname={this.props.pathname}
            >
              {content.api}
            </Anchor>
          </ListItem>
          <ListItem>
            <LocaleChooser locale={this.props.locale} />
          </ListItem>
        </List>
      </Navbar>
    )
  }
}

export default Nav
