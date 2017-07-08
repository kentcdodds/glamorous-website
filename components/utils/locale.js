const {supportedLocales, fallbackLocale} = require('../../config.json')

let {LOCALE: lang} = process.env
if (!supportedLocales.includes(lang)) {
  lang = fallbackLocale
}
module.exports = lang
