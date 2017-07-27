import React from 'react'
import DocsPage from '../../components/docs-page'

function Page({url}) {
  return (
    <DocsPage
      url={url}
      sections={[
        require('./content/refs.md'),
        require('./content/existing-css.md'),
        require('./content/theming.md'),
        require('./content/context.md'),
        require('./content/size.md'),
        require('./content/ssr.md'),
      ]}
      pageContent={require('./content/index.md')}
    />
  )
}

export default Page
