import React from 'react'
import {css, rehydrate} from 'glamor'
import glamorous, {ThemeProvider, Div} from 'glamorous'
import Head from 'next/head'
import {AlgoliaLink, AlgoliaScript} from '../components/algolia-config'
import baseStyles from '../styles/base'
import GlobalStyles from '../styles/global-styles'
import Nav from './nav'
import Footer from './footer'
import Contributors from './contributors'

glamorous.config.useDisplayNameInClassName = true

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
/* istanbul ignore next */
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Wrapper = glamorous.div(
  ({top, theme: {colors, fonts, mediaQueries}}) => ({
    fontFamily: fonts.sansserif,
    backgroundColor: colors.primaryLight,
    position: 'relative',
    display: 'flex',
    justifyContent: top ? 'flex-end' : 'flex-start',
    flexDirection: top ? 'column' : 'row',
    zIndex: 1,

    [mediaQueries.largeDown]: {
      display: 'block',
      justifyContent: null,
      flexDirection: null,
    },

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
  }),
)

function Layout({pathname, children, contributors, topNav = false}) {
  css.insert(baseStyles())
  return (
    <ThemeProvider theme={GlobalStyles}>
      <Wrapper top={topNav}>
        <Head>
          <AlgoliaLink />
          <AlgoliaScript />
        </Head>
        <Nav pathname={pathname} top={topNav} />
        <Div overflow="auto" width="100%">
          {children}
          <Contributors contributors={contributors || []} />
          <Footer />
        </Div>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
