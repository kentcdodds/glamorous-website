import React from 'react'
import glamorous from 'glamorous'
import content from './content/locale-chooser'

const {supportedLocales, fallbackLocale} = require('../config.json')

const Select = glamorous.select((props, {colors}) => ({
  textAlignLast: 'center',
  fontSize: 14,
  height: 40,
  backgroundColor: colors.white,
  borderColor: colors.primary,
}))

export default LocaleChooser

function LocaleChooser(props) {
  return (
    <Select
      value={process.env.LOCALE}
      onChange={changeLanguage}
      {...props}
      aria-label="Locale selector"
    >
      <option value="en">en</option>
      <option value="es">es</option>
      <option value="fr">fr</option>
      <option value="help">
        {content.help}
      </option>
    </Select>
  )
}

function changeLanguage({target: {value}}) {
  let url
  if (supportedLocales.includes(value)) {
    const {host} = getLocaleAndHost()
    const {protocol, pathname, hash, search} = window.location
    const prefix = fallbackLocale === value ? '' : `${value}.`
    url = `${protocol}//${prefix}${host}${pathname}${search}${hash}`
  } else {
    url =
      'https://github.com/kentcdodds/glamorous-website/blob/master/other/CONTRIBUTING_DOCUMENTATION.md'
  }
  window.location.assign(url)
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
