import React from 'react'
import {css, rehydrate} from 'glamor'
import glamorous, {ThemeProvider, Div} from 'glamorous'
import baseStyles from '../styles/base'
import GlobalStyles from '../styles/global-styles'
import Nav from './nav'
import Footer from './footer'
import Contributors from './contributors'

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

function Layout({pathname, children, contributors, topNav = false}) {
  css.insert(baseStyles())
  return (
    <ThemeProvider theme={GlobalStyles}>
      <Wrapper>
        <Div position="relative" zIndex={1} display={topNav ? null : 'flex'}>
          <Div
            display="flex"
            justifyContent={topNav ? 'flex-end' : 'flex-start'}
            alignItems="center"
            flexDirection={topNav ? 'row' : 'column'}
          >
            <Nav pathname={pathname} top={topNav} />
          </Div>
          <Div flex="1">
            {children}
            <Contributors contributors={contributors || []} />
            <Footer />
          </Div>
        </Div>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
