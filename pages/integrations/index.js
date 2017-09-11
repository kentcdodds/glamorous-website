import React from 'react'
import DocsPage from '../../components/docs-page'

function Page({url}) {
  return (
    <DocsPage
      url={url}
      sections={[
        require('./content/create-react-app.md'),
        require('./content/next.md'),
        require('./content/jest.md'),
        require('./content/polished.md'),
        require('./content/styled-system.md'),
        require('./content/pseudo.md'),
        require('./content/glamor.md'),
        require('./content/recompose.md'),
        require('./content/preact.md'),
      ]}
      pageContent={require('./content/index.md')}
    />
  )
}

export default Page
