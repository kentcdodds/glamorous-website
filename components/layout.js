import React from 'react'
import {rehydrate} from 'glamor'
import glamorous from 'glamorous'
import Nav from './nav'
import Footer from './footer'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  rehydrate(window.__NEXT_DATA__.ids)
}

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
