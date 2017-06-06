import React from 'react'
import {getInitialLocaleProps, getTranslations} from '../components/locale'
import Layout from '../components/layout'
import PageSections from '../components/page-sections'

function API({url, locale}) {
  const advancedData = getTranslations(locale, 'api/index')
  return (
    <Layout pathname={url ? url.pathname : ''}>
      <PageSections data={advancedData} />
    </Layout>
  )
}

API.getInitialProps = getInitialLocaleProps

export default API
