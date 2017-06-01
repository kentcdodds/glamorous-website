import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'

function Guides(props) {
  return (
    <Layout pathname={props.url ? props.url.pathname : ''}>
      <Hero>
        edit in pages/guides.js
      </Hero>
    </Layout>
  )
}

export default Guides
