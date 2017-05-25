import React from 'react'
import {rehydrate} from 'glamor'
import glamorous from 'glamorous'
import Logo from '../components/glamorous-logo'
import Layout from '../components/layout'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  rehydrate(window.__NEXT_DATA__.ids)
}

const {Div} = glamorous

export default () => {
  return (
    <Layout>
      <Div margin="20px auto" maxWidth={700} textAlign="center">
        <Logo marginTop={50}/>
        <glamorous.P>edit in pages/docs.js</glamorous.P>
      </Div>
    </Layout>
  )
}

