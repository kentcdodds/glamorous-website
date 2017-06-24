import React from 'react'
import glamorous from 'glamorous'
import content from './content/locale-chooser'

const {supportedLocales, fallbackLocale} = require('../config.json')

import EnSvg from './svgs/en.svg'
import EsSvg from './svgs/es.svg'
import FrSvg from './svgs/fr.svg'

const Wrapper = glamorous.div({
  minWidth: '120px',
  cursor: 'pointer',
})

const Toggle = glamorous.div((props, {colors}) => ({
  textAlignLast: 'center',
  backgroundColor: colors.white,
  color: colors.primaryMed,
  border: `1px solid ${colors.primary}`,
}))

const List = glamorous.ul({
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  padding: 0,
  margin: '0 -25px',
  opacity: '.9',
})

const Item = glamorous.li((props, {colors}) => ({
  display: 'flex',
  flex: 1,
  textAlign: 'center',
  margin: 0,
  backgroundColor: colors.white,
  lineHeight: 1,
}))

const Link = glamorous.a({
  width: '100%',
  padding: '6px 10px',
})

const locales = [
  {
    key: 'en',
    display: 'en',
    flag: <EnSvg width="1em" height="100%" />,
  },
  {
    key: 'es',
    display: 'es',
    flag: <EsSvg width="1em" height="100%" />,
  },
  {
    key: 'fr',
    display: 'fr',
    flag: <FrSvg width="1em" height="100%" />,
  },
]

const localeContent = ({display, flag}) =>
  (<div>
    {flag} <span>{display}</span>
  </div>)

const localeItem = ({key, display, flag}) =>
  (<Item key={key}>
    <Link href={localeToHref(key)}>
      {localeContent({display, flag})}
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
    if (!this.state.open) {
      return (
        <Wrapper>
          <Toggle onClick={this.handleClick.bind(this)}>
            {localeContent(
              locales.find(({key}) => key === this.props.locale),
            )}
          </Toggle>
        </Wrapper>
      )
    }

    return (
      <Wrapper>
        <Toggle onClick={this.handleClick.bind(this)}>
          {localeContent(locales.find(({key}) => key === this.props.locale))}
        </Toggle>
        <List aria-label="Locale selector">
          {locales.map(localeItem)}
          {localeItem({key: 'help', display: this.props.content.help})}
        </List>
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

function getLocaleAndHost() {
  const locale = process.env.LOCALE
  const {host} = window.location
  // eslint-disable-next-line no-unused-vars
  const [localePart, ...rest] = host.split('.')
  if (supportedLocales.includes(locale)) {
    return {locale, host: rest.join('.')}
  } else {
    return {locale: fallbackLocale, host}
  }
}
