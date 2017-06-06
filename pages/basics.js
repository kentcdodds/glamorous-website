import React from 'react'
import {getInitialLocaleProps, getTranslations} from '../components/locale'
import Layout from '../components/layout'
import PageSections from '../components/page-sections'

function Basics({url, locale}) {
  const advancedData = getTranslations(locale, 'basics/index')
  return (
    <Layout pathname={url ? url.pathname : ''}>
      <PageSections data={advancedData} />
    </Layout>
  )
}

Basics.getInitialProps = getInitialLocaleProps

export default Basics
