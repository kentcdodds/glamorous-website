import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'

function Basics(props) {
  return (
    <Layout pathname={props.url ? props.url.pathname : ''}>
      <Hero>
        edit in pages/basics.js
      </Hero>
    </Layout>
  )
}

export default Basics
