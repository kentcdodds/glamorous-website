import React from 'react'
import Layout from '../components/layout'
import MarkdownWrapper from '../components/markdown-wrapper'

// Define main file here so we can require the markdown file in the client
let main = ''

// Adds in main.md on client only
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  main = require('../docs/main.md')
}

export default class Docs extends React.Component {
  rawMarkup() {
    return {__html: main}
  }

  render() {
    return (
      <Layout pathname={this.props.url ? this.props.url.pathname : ''}>
        <MarkdownWrapper>
          <div dangerouslySetInnerHTML={this.rawMarkup()} />
        </MarkdownWrapper>
      </Layout>
    )
  }
}
