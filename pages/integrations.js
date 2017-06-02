import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'

function Integrations(props) {
  return (
    <Layout pathname={props.url ? props.url.pathname : ''}>
      <Hero>
        edit in pages/integrations.js
      </Hero>
    </Layout>
  )
}

export default Integrations
