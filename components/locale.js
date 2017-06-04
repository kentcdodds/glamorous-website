import React, {Component} from 'react'
import PropTypes from 'prop-types'

const CONTEXT_NAME = '__locale__'
const supportedLocales = ['en', 'es', 'fr']
const fallbackLocale = 'en'

class LocaleProvider extends Component {
  static childContextTypes = {[CONTEXT_NAME]: PropTypes.string}
  getChildContext() {
    return {[CONTEXT_NAME]: this.props.locale}
  }
  render() {
    return this.props.children
  }
}

function withLocale(Comp) {
  class LocaleComponent extends Component {
    state = {locale: 'en'}
    componentWillMount() {
      this.setState({locale: this.context[CONTEXT_NAME]})
    }
    render() {
      return <Comp {...this.props} {...this.state} />
    }
  }

  LocaleComponent.contextTypes = {
    [CONTEXT_NAME]: PropTypes.string,
  }

  return LocaleComponent
}

function getInitialLocaleProps({req} = {}) {
  const host = req ? req.headers.host : window.location.host
  const [locale] = host.split('.')
  return Promise.resolve({
    locale: supportedLocales.includes(locale) ? locale : 'en',
  })
}

function getTranslations(locale, path) {
  try {
    return require(`../translations/${locale}/${path}`)
  } catch (error) {
    if (locale === fallbackLocale) {
      throw error
    }
    return getTranslations(fallbackLocale, path)
  }
}

export {LocaleProvider, withLocale, getInitialLocaleProps, getTranslations}
