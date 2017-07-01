import React from 'react'
import glamorous from 'glamorous'
import {Anchor} from '../components/styled-links'
import LipstickIcon from './lipstick-icon'
import Separator from './separator'
import LocaleChooser from './locale-chooser'
import MenuSVG from './svgs/menu.svg'
import content from './content/nav.md'

const Navbar = glamorous.nav(({top, theme: {mediaQueries}}) => ({
  width: '100%',
  margin: 0,
  [mediaQueries.mediumUp]: {
    flex: top ? null : 1,
    width: top ? null : 300,
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

const List = glamorous.ul(
  // eslint-disable-next-line complexity
  ({top, isOpen, theme: {colors, mediaQueries}}) => ({
    listStyle: 'none',
    display: 'block',
    fontSize: '1.25em',
    margin: '0 auto',
    paddingLeft: top ? null : 0,

    height: 'auto',
    overflow: 'hidden',
    backgroundColor: colors.white,
    [mediaQueries.mediumDown]: {
      textAlign: 'center',
      width: '100%',
      padding: isOpen ? '1rem 0' : 0,
      maxHeight: isOpen ? '100%' : 0,
      opacity: isOpen ? 1 : 0,
    },
    [mediaQueries.mediumUp]: {
      display: 'flex',
      justifyContent: top ? 'center' : 'flex-start',
      flexDirection: top ? 'row' : 'column',
      width: top ? 'auto' : null,
      maxHeight: top ? '4rem' : null,
      backgroundColor: 'inherit',
      opacity: 1,
    },
  }),
)

class Nav extends React.Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState(prevState => {
      return {open: !prevState.open}
    })
  }

  render() {
    const {pathname, top} = this.props
    return (
      <Navbar className="Navbar" top={top}>
        <NavToggle onClick={this.handleClick}>
          <MenuSVG />
        </NavToggle>
        <NavSeparator />
        <List isOpen={this.state.open} top={top}>
          <ListItemAnchor href="/" css={{textAlign: 'center'}}>
            <LipstickIcon width={top ? 20 : 40} />
            <Hidden>
              {content.home}
            </Hidden>
          </ListItemAnchor>
          {top ?
            null :
            <ListItem>
              <LocaleChooser />
            </ListItem>}
          <ListItemAnchor href="/getting-started">
            {content.gettingStarted}
          </ListItemAnchor>
          <ListItemAnchor href="/basics">
            {content.basics}
          </ListItemAnchor>
          <ListItemAnchor href="/advanced">
            {content.advanced}
          </ListItemAnchor>
          <ListItemAnchor href="/examples">
            {content.examples}
          </ListItemAnchor>
          <ListItemAnchor href="/integrations">
            {content.integrations}
          </ListItemAnchor>
          <ListItemAnchor href="/api">
            {content.api}
          </ListItemAnchor>
          {top ?
            <ListItem>
              <LocaleChooser />
            </ListItem> :
            null}
        </List>
      </Navbar>
    )

    function ListItemAnchor({children, css, ...rest}) {
      return (
        <ListItem css={css}>
          <Anchor
            prefetch={process.env.USE_PREFETCH}
            href="/getting-started"
            pathname={pathname}
            {...rest}
          >
            {children}
          </Anchor>
        </ListItem>
      )
    }
  }
}

export default Nav
