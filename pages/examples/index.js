import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import PageSections from '../../components/page-sections'
import twitterCard from '../../components/twitter-card'
import pageContent from './content'
import cssGrid from './content/css-grid.md'
import styleOverrides from './content/style-overrides.md'

const sections = [cssGrid, styleOverrides]

function Examples({url}) {
  return (
    <Layout pathname={url ? url.pathname : ''} contributors={getContributors()}>
      <Head>
        {twitterCard({
          card: 'summary',
          title: `glamorous - ${pageContent.title}`,
          description: pageContent.heading,
          pathname: url ? url.pathname : '',
        })}
      </Head>
      <PageSections {...pageContent} sections={sections} />
    </Layout>
  )
}

export default Examples

function getContributors() {
  return sections
    .reduce((contrib, sec) => contrib.concat(sec.meta.contributors), [])
    .filter((x, i, a) => a.indexOf(x) === i)
}
