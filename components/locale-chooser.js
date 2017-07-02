import React from 'react'
import glamorous from 'glamorous'
import content from './content/locale-chooser.md'
import EnSvg from './svgs/en.svg'
import EsSvg from './svgs/es.svg'
import FrSvg from './svgs/fr.svg'
import DeSvg from './svgs/de.svg'

const {supportedLocales, fallbackLocale} = require('../config.json')

const currentLocale = process.env.LOCALE || fallbackLocale

const Wrapper = glamorous.div({
  fontSize: '.8em',
  cursor: 'pointer',
})

const Toggle = glamorous.button((props, {colors, mediaQueries}) => ({
  backgroundColor: colors.white,
  color: colors.primaryMed,
  border: `1px solid ${colors.primaryMed}`,
  textAlign: 'left',
  padding: '3px 10px',
  display: 'block',
  fontSize: '1em',
  width: '100%',
  borderBottomColor: props.isOpen ? 'transparent' : colors.primaryMed,
  [mediaQueries.smallOnly]: {
    textAlign: 'center',
  },
}))

const List = glamorous.ul((props, {colors, mediaQueries}) => ({
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  padding: 0,
  margin: 0,
  opacity: '.9',
  border: `1px solid ${colors.primaryMed}`,
  [mediaQueries.smallOnly]: {
    position: 'relative',
    width: '100%',
  },
}))

const Item = glamorous.li((props, {colors, mediaQueries}) => ({
  display: 'flex',
  flex: 1,
  textAlign: 'left',
  margin: 0,
  backgroundColor: colors.white,
  lineHeight: 1,
  [mediaQueries.smallOnly]: {
    textAlign: 'center',
  },
}))

const Link = glamorous.a((props, {colors}) => ({
  width: '100%',
  padding: '6px 10px',
  transition: 'color .3s, background-color .3s',
  outline: 'none',
  '&:focus, &:hover, &:active': {
    textDecoration: 'none',
    color: colors.white,
    backgroundColor: colors.primaryMed,
  },
}))

const localeContent = ({display, Flag}) =>
  (<div aria-hidden="true">
    {Flag} <span>{display}</span>
  </div>)

const localeItem = (parent, {key, display, Flag}) =>
  (<Item key={key}>
    <Link
      href={localeToHref(key)}
      lang={key === 'help' ? null : key}
      aria-label={display}
      innerRef={a => {
        parent[`link-${key}`] = a
      }}
    >
      {localeContent({Flag, display})}
    </Link>
  </Item>)

class LocaleChooser extends React.Component {
  state = {
    open: false,
    locales: [],
  }

  componentDidMount() {
    document.addEventListener('click', this.click, true)
    document.addEventListener('keydown', this.keyDown, true)
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState(() => {
      return {locales: [...supportedLocales, 'help'].map(mapLocale)}
    })
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.click, true)
    document.removeEventListener('keydown', this.keyDown, true)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open && !prevState.open) {
      this['link-en'].focus()
    }
  }

  toggleOpen = () => {
    this.setState(prevState => {
      return {open: !prevState.open}
    })
  }

  click = event => {
    if (!this.toggle.contains(event.target) && this.state.open) {
      this.toggleOpen()
    }
  }

  keyDown = event => {
    // Close on escape
    if (this.state.open && event.keyCode === 27) {
      this.toggleOpen()
      this.toggle.focus()
    }
  }

  render() {
    return (
      <Wrapper>
        <Toggle
          onClick={this.toggleOpen}
          isOpen={this.state.open}
          aria-label={content.ariaLabelButton}
          innerRef={button => {
            this.toggle = button
          }}
        >
          {localeContent(mapLocale(currentLocale))}
        </Toggle>
        <List
          aria-label={content.ariaLabelList}
          css={{visibility: this.state.open ? 'visible' : 'collapse'}}
        >
          {this.state.locales.map(l => localeItem(this, l))}
        </List>
      </Wrapper>
    )
  }
}
export default LocaleChooser

function localeToHref(locale) {
  if (supportedLocales.includes(locale)) {
    const host = getHost()
    const {protocol, pathname, hash, search} = window.location
    const prefix = fallbackLocale === locale ? '' : `${locale}.`
    return `${protocol}//${prefix}${host}${pathname}${search}${hash}`
  }

  return 'https://github.com/kentcdodds/glamorous-website/blob/master/other/CONTRIBUTING_DOCUMENTATION.md'
}

function getHost() {
  const {host} = window.location
  const [localePart, ...rest] = host.split('.')
  if (localePart === currentLocale) {
    return rest.join('.')
  }

  return host
}

function mapLocale(key) {
  const options = {width: '1em', height: '100%'}
  switch (key) {
    case 'en':
      return {
        key,
        display: 'English',
        Flag: <EnSvg {...options} />,
      }
    case 'es':
      return {
        key,
        display: 'Español',
        Flag: <EsSvg {...options} />,
      }
    case 'fr': {
      return {
        key,
        display: 'Français',
        Flag: <FrSvg {...options} />,
      }
    }
    case 'de': {
      return {
        key,
        display: 'Deutsche',
        Flag: <DeSvg {...options} />,
      }
    }
    case 'help': {
      return {
        key,
        display: content.help,
      }
    }
    default: {
      return {
        key,
        display: key,
      }
    }
  }
}
