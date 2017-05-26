import React from 'react'
import {rehydrate} from 'glamor'
import glamorous from 'glamorous'
import Layout from '../components/layout'
import * as colors from '../styles/colors'

// Define main file here so we can require the markdown file in the client
let main = ''

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  main = require('../docs/main.md')
  rehydrate(window.__NEXT_DATA__.ids)
}

const MarkdownWrapper = glamorous.div({
  margin: '20px auto',
  width: '100%',
  maxWidth: '50rem',

  '& pre, & code': {
    backgroundColor: '#eee',
    fontSize: '1rem'
  },
  '& pre': {
    padding: '1rem',
    overflowX: 'scroll'
  },
  '& a': {
    textDecoration: 'none',
    color: colors.primary
  }
})

export default class Docs extends React.Component {
  rawMarkup() {
    return {__html: main}
  }

  render() {
    return (
      <Layout>
        <MarkdownWrapper>
          <div dangerouslySetInnerHTML={this.rawMarkup()}/>
        </MarkdownWrapper>
      </Layout>
    )
  }
}

