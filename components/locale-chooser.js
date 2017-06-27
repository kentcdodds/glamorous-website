import React from 'react'
import glamorous from 'glamorous'
<<<<<<< HEAD
import content from './content/locale-chooser'

const {supportedLocales, fallbackLocale} = require('../config.json')

=======
import {
  fallbackLocale,
  locales,
  supportedLocales,
  getLocaleAndHost,
  withContent,
} from './locale'
>>>>>>> cleanup
import EnSvg from './svgs/en.svg'
import EsSvg from './svgs/es.svg'
import FrSvg from './svgs/fr.svg'

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

const localeContent = ({key, display}) =>
  (<div>
    {getFlag(key)} <span>{display}</span>
  </div>)

const localeItem = ({key, display}) =>
  (<Item key={key}>
    <Link href={localeToHref(key)}>
      {localeContent({key, display})}
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
          {localeContent(locales.find(({key}) => key === this.props.locale))}
        </Toggle>
        {this.state.open &&
          <List aria-label="Locale selector">
            {locales.map(localeItem)}
            {localeItem({key: 'help', display: this.props.content.help})}
          </List>}
      </Wrapper>
    )
  }
}
export default withContent({component: 'locale-chooser'}, LocaleChooser)

function localeToHref(locale) {
  if (supportedLocales.includes(locale)) {
    const {host} = getLocaleAndHost()
    const {protocol, pathname, hash, search} = window.location
    const prefix = fallbackLocale === locale ? '' : `${locale}.`
    return `${protocol}//${prefix}${host}${pathname}${search}${hash}`
  }

  return 'https://github.com/kentcdodds/glamorous-website/blob/master/other/CONTRIBUTING_DOCUMENTATION.md'
}

<<<<<<< HEAD
<<<<<<< HEAD
function getLocaleAndHost() {
  const locale = process.env.LOCALE
  const {host} = window.location
  // eslint-disable-next-line no-unused-vars
  const [localePart, ...rest] = host.split('.')
  if (supportedLocales.includes(locale)) {
    return {locale, host: rest.join('.')}
  } else {
    return {locale: fallbackLocale, host}
=======
function getFlag(locale, styles) {
=======
function getFlag(locale) {
  const style = {width: '1em', height: '100%'}
>>>>>>> cleanup
  switch (locale) {
    case 'en':
      return <EnSvg {...style} />
    case 'es':
      return <EsSvg {...style} />
    case 'fr':
      return <FrSvg {...style} />
    default:
      return null
>>>>>>> cleanup
  }
}
