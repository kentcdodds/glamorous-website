import React from 'react'
import {getInitialLocaleProps, getTranslations} from '../components/locale'
import Layout from '../components/layout'
import PageSections from '../components/page-sections'

function Examples({url, locale}) {
  const advancedData = getTranslations(locale, 'examples/index')
  return (
    <Layout pathname={url ? url.pathname : ''} locale={locale}>
      <PageSections data={advancedData} />
    </Layout>
  )
}
Examples.getInitialProps = getInitialLocaleProps

export default Examples
