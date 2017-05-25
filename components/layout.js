import React from 'react'
import glamorous from 'glamorous'
import Nav from './nav'
import Footer from './footer'

export default ({children}) => {
  return (
    <div>
      <glamorous.Div fontSize={18} fontFamily="Playfair Display, serif">
        <glamorous.Div
          display="flex"
          justifyContent="space-between"
          marginTop={10}
          marginRight={20}
          marginLeft={20}
          >
          <Nav/>
        </glamorous.Div>
        {children}
        <Footer/>
      </glamorous.Div>
    </div>
  )
}
