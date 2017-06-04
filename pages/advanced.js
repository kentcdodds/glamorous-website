import React from 'react'
import {getInitialLocaleProps, getTranslations} from '../components/locale'
import Layout from '../components/layout'
import PageSections from '../components/page-sections'

function Advanced({url, locale}) {
  const advancedData = getTranslations(locale, 'advanced/index')
  return (
    <Layout pathname={url ? url.pathname : ''} locale={locale}>
      <PageSections data={advancedData} />
    </Layout>
  )
}
Advanced.getInitialProps = getInitialLocaleProps

export default Advanced
