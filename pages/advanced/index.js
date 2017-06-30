import React from 'react'
import DocsPage from '../../components/docs-page'

function Page({url}) {
  return (
    <DocsPage
      url={url}
      // sections={[
      //   require('./content/css-grid.md'),
      //   require('./content/style-overrides.md'),
      // ]}
      // pageContent={require('./content/index.md')}
    />
  )
}

export default Page
