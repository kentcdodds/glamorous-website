import React from 'react'
import glamorous from 'glamorous'
import content from './content/locale-chooser.md'
import getLocale from './utils/locale'
// get flags from https://github.com/lipis/flag-icon-css/tree/master/flags/4x3
import EnSvg from './svgs/en.svg'
import EsSvg from './svgs/es.svg'
import FrSvg from './svgs/fr.svg'
import DeSvg from './svgs/de.svg'
import CnSvg from './svgs/cn.svg'
import RuSvg from './svgs/ru.svg'

const {supportedLocales, fallbackLocale} = require('../config.json')

const svgStyle = {width: '1em', height: '100%'}
const Wrapper = glamorous.div({
  fontSize: '.8em',
  cursor: 'pointer',
})

const Toggle = glamorous.button(props => ({
  backgroundColor: props.theme.colors.white,
  color: props.theme.colors.primaryMed,
  border: `1px solid ${props.theme.colors.primaryMed}`,
  textAlign: 'left',
  padding: '3px 10px',
  display: 'block',
  fontSize: '1em',
  width: '100%',
  borderBottomColor: props.open ? 'transparent' : props.theme.colors.primaryMed,

  [props.theme.mediaQueries.largeDown]: {
    textAlign: 'center',
  },
}))

const List = glamorous.ul(props => ({
  flexDirection: 'column',
  padding: 0,
  margin: 0,
  opacity: '.9',
  border: `1px solid ${props.theme.colors.primaryMed}`,
  display: props.open ? 'flex' : 'none',
  visibility: props.open ? 'visible' : 'collapse',
  position: props.top ? 'absolute' : 'relative',
  width: props.top ? '' : '100%',

  [props.theme.mediaQueries.largeDown]: {
    position: 'relative',
    width: '100%',
  },
}))

const Item = glamorous.li(props => ({
  display: 'flex',
  flex: 1,
  textAlign: 'left',
  margin: 0,
  backgroundColor: props.theme.colors.white,
  lineHeight: 1,

  [props.theme.mediaQueries.largeDown]: {
    textAlign: 'center',
  },

  '&::before': {
    content: 'initial',
  },
}))

const Link = glamorous.a(props => ({
  width: '100%',
  padding: '6px 10px',
  transition: 'color .3s, background-color .3s',
  outline: 'none',

  '&:focus, &:hover, &:active': {
    textDecoration: 'none',
    color: props.theme.colors.white,
    backgroundColor: props.theme.colors.primaryMed,
  },
}))

const localeContent = ({display, Flag = () => null}) =>
  (<div aria-hidden="true">
    <Flag {...svgStyle} /> <span>{display}</span>
  </div>)

class LocaleChooser extends React.Component {
  state = {
    open: false,
    locales: [],
    currentLocale: getLocale(),
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

  itemHover = event => {
    event.target.focus()
  }

  itemBlur = event => {
    event.target.blur()
  }

  render() {
    return (
      <Wrapper>
        <Toggle
          onClick={this.toggleOpen}
          open={this.state.open}
          aria-label={content.ariaLabelButton}
          aria-haspopup="true"
          aria-owns="locale-selector"
          aria-expanded={this.state.open ? 'true' : 'false'}
          innerRef={button => {
            this.toggle = button
          }}
        >
          {localeContent(mapLocale(this.state.currentLocale))}
        </Toggle>
        <List
          id="locale-selector"
          aria-label={content.ariaLabelList}
          aria-hidden={!this.state.open}
          open={this.state.open}
          top={this.props.top}
        >
          {this.state.locales.map(({key, display, Flag}) =>
            (<Item key={key}>
              <Link
                href={localeToHref(key, this.state.currentLocale)}
                lang={key === 'help' ? null : key}
                aria-label={display}
                onMouseEnter={this.itemHover}
                onMouseLeave={this.itemBlur}
                innerRef={a => {
                  this[`link-${key}`] = a
                }}
              >
                {localeContent({Flag, display})}
              </Link>
            </Item>),
          )}
        </List>
      </Wrapper>
    )
  }
}
export default LocaleChooser

function localeToHref(locale, currentLocale) {
  if (supportedLocales.includes(locale)) {
    const host = getHost(currentLocale)
    const {protocol, pathname, hash, search} = window.location
    const prefix = fallbackLocale === locale ? '' : `${locale}.`
    return `${protocol}//${prefix}${host}${pathname}${search}${hash}`
  }

  return 'https://github.com/kentcdodds/glamorous-website/blob/master/other/CONTRIBUTING_DOCUMENTATION.md'
}

function getHost(currentLocale) {
  const {host} = window.location
  const [localePart, ...rest] = host.split('.')
  if (localePart === currentLocale) {
    return rest.join('.')
  }

  return host
}

function mapLocale(key = fallbackLocale) {
  const localeMap = {
    en: {
      key,
      display: 'English',
      Flag: EnSvg,
    },
    es: {
      key,
      display: 'Español',
      Flag: EsSvg,
    },
    fr: {
      key,
      display: 'Français',
      Flag: FrSvg,
    },
    de: {
      key,
      display: 'Deutsch',
      Flag: DeSvg,
    },
    zh: {
      key,
      display: '中文',
      Flag: CnSvg,
    },
    ru: {
      key,
      display: 'Русский',
      Flag: RuSvg,
    },
    help: {
      key,
      display: content.help,
    },
    default: {
      key,
      display: key,
    },
  }
  return localeMap[key] || localeMap.default
}
