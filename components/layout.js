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

const NavWrapper = glamorous.div({
  position: 'relative',
  zIndex: 1,
})

const layout = ({pathname, children}) => {
  css.insert(baseStyles())
  return (
    <ThemeProvider theme={GlobalStyles}>
      <Wrapper>
        <NavWrapper>
          <Nav pathname={pathname} />
          {children}
          <Footer />
        </NavWrapper>
      </Wrapper>
    </ThemeProvider>
  )
}

export default layout
