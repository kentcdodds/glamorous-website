import React from 'react'
import {css} from 'glamor'
import glamorous, {ThemeProvider} from 'glamorous'
import baseStyles from '../styles/base'
import GlobalStyles from '../styles/global-styles'
import Nav from './nav'
import Footer from './footer'

const Wrapper = glamorous.div((props, theme) => ({
  fontFamily: theme.font.glamorous
}))

const NavWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 10,
  marginRight: 20,
  marginLeft: 20
})

export default ({children}) => {
  css.insert(baseStyles())
  return (
    <ThemeProvider theme={GlobalStyles}>
      <Wrapper>
        <NavWrapper>
          <Nav/>
        </NavWrapper>
        {children}
        <Footer/>
      </Wrapper>
    </ThemeProvider>
  )
}
