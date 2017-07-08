import React from 'react'
import DocsPage from '../../components/docs-page'

function Page({url}) {
  return (
    <DocsPage
      url={url}
      sections={[
        require('./content/glamorous.md'),
        require('./content/glamorous-component-factory.md'),
        require('./content/typescript.md'),
      ]}
      pageContent={require('./content/index.md')}
    />
  )
}

export default Page
