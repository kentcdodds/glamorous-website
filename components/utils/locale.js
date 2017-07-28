const {supportedLocales, fallbackLocale} = require('../../config.json')

function locale() {
  const {LOCALE: lang} = process.env
  if (supportedLocales.includes(lang)) {
    return lang
  }

  return fallbackLocale
}

module.exports = () => locale()
