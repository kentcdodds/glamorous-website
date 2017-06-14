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

function withContent(options, Comp) {
  class ContentComponent extends Component {
    constructor(...args) {
      super(...args)
      this.state = {
        content: getContent(this.props.locale, options),
      }
    }
    render() {
      return <Comp {...this.props} {...this.state} />
    }
  }

  if (options.page) {
    ContentComponent.getInitialProps = getInitialLocaleProps
    return ContentComponent
  } else {
    const LocaledComponent = withLocale(ContentComponent)
    // LocaledComponent.getInitialProps = getInitialLocaleProps
    return LocaledComponent
  }
}

function getInitialLocaleProps({req} = {}) {
  const {locale} = getLocaleAndHost(req)
  return Promise.resolve({locale})
}

function getContent(locale, options) {
  const fallbackContent = content('', options)
  if (locale === fallbackLocale) {
    return fallbackContent
  }
  const localeContent = content(`${locale}/`, options)
  return Object.keys(fallbackContent).reduce((cont, key) => {
    const value = localeContent[key]
    cont[key] = value === null ? null : value || fallbackContent[key]
    return cont
  }, {})
}

function content(localePath, options) {
  const {
    contentDictionary = (path, opts) => getContentDictionary(path, opts),
  } = options

  try {
    return contentDictionary(localePath, options)
  } catch (error) {
    if (localePath === '') {
      throw error
    }
    return {}
  }
}

function getContentDictionary(localePath, options) {
  const {page, component, example} = options
  // because how webpack resolves these for the bundle, we need
  // to use a statically relative path, otherwise this could
  // be much simpler. Sigh...
  if (page) {
    return require(`../pages/${page}/content/${localePath}index.js`)
  } else if (component) {
    return require(`../components/content/${localePath}${component}`)
  } else if (example) {
    return require(`../examples/content/${localePath}${example}`)
  } else {
    throw new Error('page, component or example required to get content')
  }
}

function getLocaleAndHost(req) {
  const host = req ? req.headers.host : window.location.host
  const [locale, ...rest] = host.split('.')
  if (supportedLocales.includes(locale)) {
    return {locale, host: rest.join('.')}
  } else {
    return {locale: 'en', host}
  }
}

export {
  LocaleProvider,
  withLocale,
  withContent,
  getInitialLocaleProps,
  getContent,
  getLocaleAndHost,
  supportedLocales,
  fallbackLocale,
}
