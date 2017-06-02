import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'

function API(props) {
  return (
    <Layout pathname={props.url ? props.url.pathname : ''}>
      <Hero>
        edit in pages/api.js
      </Hero>
    </Layout>
  )
}

export default API
