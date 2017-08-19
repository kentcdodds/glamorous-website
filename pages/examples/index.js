import React from 'react'
import DocsPage from '../../components/docs-page'

function Examples({url}) {
  return (
    <DocsPage
      url={url}
      sections={[
        require('./content/css-grid.md'),
        require('./content/style-overrides.md'),
        require('./content/button.md'),
        require('./content/prop-styles.md'),
        require('./content/breadcrumbs.md'),
      ]}
      pageContent={require('./content/index.md')}
    />
  )
}

export default Examples
