import React from 'react'
import {css, rehydrate} from 'glamor'
import glamorous, {ThemeProvider} from 'glamorous'
import baseStyles from '../styles/base'
import GlobalStyles from '../styles/global-styles'
import Nav from './nav'
import Footer from './footer'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Wrapper = glamorous.div((props, theme) => ({
  fontFamily: theme.font.glamorous,
}))

const NavWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 10,
  marginRight: 20,
  marginLeft: 20,
})

export default Layout

function Layout({children}) {
  css.insert(baseStyles())
  return (
    <ThemeProvider theme={GlobalStyles}>
      <Wrapper>
        <NavWrapper>
          <Nav />
        </NavWrapper>
        {children}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}
