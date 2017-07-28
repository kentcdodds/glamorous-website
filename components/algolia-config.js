import preval from 'preval.macro'
import React from 'react'

export function AlgoliaLink() {
  return (
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css"
    />
  )
}

export function AlgoliaScript() {
  return (
    <script src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js" />
  )
}

// eslint-disable-next-line no-var vars-on-top
const algoliaFacetFilters = preval`
  const lang = require('./utils/locale')
  const {fallbackLocale} = require('../config.json')
  if (lang === fallbackLocale) {
    module.exports = []
  } else {
    module.exports = [\`language:\${lang}\`]
  }
`

function algoliaSettings() {
  if (typeof docsearch === 'undefined') {
    return
  }
  // eslint-disable-next-line no-undef
  docsearch({
    apiKey: 'b5cb8dd730a01fb05e75f21396760fb8',
    indexName: 'glamorous',
    inputSelector: '.algolia_searchbox',
    algoliaOptions: {
      facetFilters: algoliaFacetFilters,
    },
    debug: false,
  })
}

export {algoliaSettings}
