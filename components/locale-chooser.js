import React from 'react'
import glamorous from 'glamorous'
import {
  fallbackLocale,
  supportedLocales,
  getLocaleAndHost,
} from './locale'
import content from './content/locale-chooser'

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
      <option value="help">{content.help}</option>
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
