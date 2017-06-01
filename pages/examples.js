import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'

function Examples(props) {
  return (
    <Layout pathname={props.url ? props.url.pathname : ''}>
      <Hero>
        edit in pages/examples.js
      </Hero>
    </Layout>
  )
}

export default Examples
