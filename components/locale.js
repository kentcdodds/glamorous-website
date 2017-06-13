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

// eslint-disable-next-line complexity
function content(localePath, options) {
  const {
    page,
    pagePath = (path, p) => `../pages/${p}/content/${path}index.js`,
    component,
    componentPath = (path, c) => `../components/content/${path}${c}`,
    example,
    examplePath = (path, e) => `../examples/content/${path}${e}`,
  } = options
  // because how webpack resolves these for the bundle, we need
  // to use a statically relative path, otherwise this could
  // be much simpler. Sigh...
  try {
    if (page) {
      return require(pagePath(localePath, page))
    } else if (component) {
      return require(componentPath(localePath, component))
    } else if (example) {
      return require(examplePath(localePath, example))
    } else {
      throw new Error('page or component required to get content')
    }
  } catch (error) {
    if (localePath === '') {
      throw error
    }
    return {}
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
