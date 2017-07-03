import React from 'react'
import glamorous from 'glamorous'
import content from './content/locale-chooser.md'
import EnSvg from './svgs/en.svg'
import EsSvg from './svgs/es.svg'
import FrSvg from './svgs/fr.svg'

const {supportedLocales, fallbackLocale} = require('../config.json')

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
  outline: 'none',
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
  '&:focus, &:hover, &:active': {
    backgroundColor: colors.primaryMed,
  },
  [mediaQueries.smallOnly]: {
    textAlign: 'center',
  },
}))

const Link = glamorous.a((props, {colors}) => ({
  width: '100%',
  padding: '6px 10px',
  transition: 'all .3s',
  '&:focus, &:hover, &:active': {
    textDecoration: 'none',
    color: colors.white,
  },
}))

const localeContent = ({display, flag}) =>
  (<div>
    {flag} <span>{display}</span>
  </div>)

const localeItem = ({key, display, flag}) =>
  (<Item key={key}>
    <Link href={localeToHref(key)}>
      {localeContent({flag, display})}
    </Link>
  </Item>)

class LocaleChooser extends React.Component {
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
      <Wrapper>
        <Toggle onClick={this.handleClick.bind(this)} isOpen={this.state.open}>
          {localeContent(mapLocale(process.env.LOCALE))}
        </Toggle>
        {this.state.open &&
          <List aria-label="Locale selector">
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
    const {host} = getLocaleAndHost()
    const {protocol, pathname, hash, search} = window.location
    const prefix = fallbackLocale === locale ? '' : `${locale}.`
    return `${protocol}//${prefix}${host}${pathname}${search}${hash}`
  }

  return 'https://github.com/kentcdodds/glamorous-website/blob/master/other/CONTRIBUTING_DOCUMENTATION.md'
}

function getLocaleAndHost() {
  const locale = process.env.LOCALE
  const {host} = window.location
  // eslint-disable-next-line no-unused-vars
  const [localePart, ...rest] = host.split('.')
  if (supportedLocales.includes(locale) || localePart !== locale) {
    return {locale, host: rest.join('.')}
  } else {
    return {locale: fallbackLocale, host}
  }
}

function mapLocale(key) {
  const svgStyle = {width: '1em', height: '100%'}
  switch (key) {
    case 'en':
      return {
        key,
        display: 'English',
        flag: <EnSvg {...svgStyle} />,
      }
    case 'es':
      return {
        key,
        display: 'Español',
        flag: <EsSvg {...svgStyle} />,
      }
    case 'fr': {
      return {
        key,
        display: 'Français',
        flag: <FrSvg {...svgStyle} />,
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
