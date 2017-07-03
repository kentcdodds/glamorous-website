import React from 'react'
import DocsPage from '../../components/docs-page'

function Page({url}) {
  return (
    <DocsPage
      url={url}
      sections={[
        require('./content/install.md'),
        require('./content/getting-started.md'),
        require('./content/core-concepts.md'),
        require('./content/dynamic-styles.md'),
        require('./content/animation.md'),
        require('./content/react-native.md'),
      ]}
      pageContent={require('./content/index.md')}
    />
  )
}

export default Page
