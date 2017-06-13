import React from 'react'
import {css, rehydrate} from 'glamor'
import glamorous, {ThemeProvider, Div} from 'glamorous'
import baseStyles from '../styles/base'
import GlobalStyles from '../styles/global-styles'
import {LocaleProvider} from './locale'
import Nav from './nav'
import Footer from './footer'

// when we can use babel-plugin-glamorous-displayname then this will be handy
// glamorous.config.useDisplayNameInClassName = true

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
/* istanbul ignore next */
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Wrapper = glamorous.div((props, {fonts, colors}) => ({
  fontFamily: fonts.sansserif,
  backgroundColor: colors.primaryLight,
  ':after': {
    content: '""',
    pointerEvents: 'none',
    backgroundImage: 'url(/static/images/g-background.svg)',
    backgroundSize: '800px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '70% -300px',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}))

function Layout({pathname, children, locale}) {
  css.insert(baseStyles())
  return (
    <LocaleProvider locale={locale}>
      <ThemeProvider theme={GlobalStyles}>
        <Wrapper>
          <Div position="relative" zIndex={1}>
            <Div display="flex" justifyContent="flex-end" alignItems="center">
              <Nav pathname={pathname} locale={locale} />
            </Div>
            {children}
            <Footer />
          </Div>
        </Wrapper>
      </ThemeProvider>
    </LocaleProvider>
  )
}

export default Layout
