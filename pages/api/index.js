import React from 'react'
import Head from 'next/head'
import {withContent} from '../../components/locale'
import Layout from '../../components/layout'
import PageSections from '../../components/page-sections'
import twitterCard from '../../components/twitter-card'

function API({url, content, locale}) {
  return (
    <Layout
      pathname={url ? url.pathname : ''}
      locale={locale}
      contributors={content.contributors}
    >
      <Head>
        {twitterCard({
          card: 'summary',
          title: content.title,
          pathname: url ? url.pathname : '',
          locale,
        })}
      </Head>
      <PageSections data={content} />
    </Layout>
  )
}

export default withContent({page: 'api'}, API)
