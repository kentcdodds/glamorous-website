import React from 'react'
import glamorous from 'glamorous'
import content from './content/locale-chooser.md'
import EnSvg from './svgs/en.svg'
import EsSvg from './svgs/es.svg'
import FrSvg from './svgs/fr.svg'
import DeSvg from './svgs/de.svg'

const {supportedLocales, fallbackLocale} = require('../config.json')

const svgStyle = {width: '1em', height: '100%'}
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
  transition: 'all .3s',
  [mediaQueries.smallOnly]: {
    textAlign: 'center',
  },
}))

const Link = glamorous.a((props, {colors}) => ({
  width: '100%',
  padding: '6px 10px',
  transition: 'all .3s',
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

const localeItem = ({key, display, Flag}) =>
  (<Item key={key}>
    <Link
      href={localeToHref(key)}
      lang={key === 'help' ? null : key}
      aria-label={display}
    >
      {localeContent({Flag, display})}
    </Link>
  </Item>)

class LocaleChooser extends React.Component {
  state = {
    open: false,
  }

  componentDidMount() {
    document.addEventListener('click', this.clickOutside, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickOutside, true)
  }

  toggleOpen = () => {
    this.setState(prevState => {
      return {open: !prevState.open}
    })
  }

  clickOutside = event => {
    if (this.state.open) {
      event.stopPropagation()
      this.toggleOpen()
    }
  }

  render() {
    return (
      <Wrapper>
        <Toggle
          onClick={this.toggleOpen}
          isOpen={this.state.open}
          aria-label={content.ariaLabelButton}
        >
          {localeContent(mapLocale(process.env.LOCALE))}
        </Toggle>
        {this.state.open &&
          <List aria-label={content.ariaLabelList}>
            {supportedLocales.map(l => localeItem(mapLocale(l)))}
            {localeItem(mapLocale('help'))}
          </List>}
      </Wrapper>
    )
  }
}
export default LocaleChooser

function localeToHref(locale) {
  if (supportedLocales.includes(locale)) {
    const {host} = getHost()
    const {protocol, pathname, hash, search} = window.location
    const prefix = fallbackLocale === locale ? '' : `${locale}.`
    return `${protocol}//${prefix}${host}${pathname}${search}${hash}`
  }

  return 'https://github.com/kentcdodds/glamorous-website/blob/master/other/CONTRIBUTING_DOCUMENTATION.md'
}

function getHost() {
  const locale = process.env.LOCALE
  const {host} = window.location
  const [localePart, ...rest] = host.split('.')
  if (supportedLocales.includes(locale) || localePart !== locale) {
    return rest.join('.')
  } else {
    return host
  }
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
        Flag: <DeSvg {...svgStyle} />,
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
