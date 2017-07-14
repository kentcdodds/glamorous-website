import preval from 'preval.macro'
import React from 'react'
import InlineScript from './inline-script'

export default AlgoliaConfig

function AlgoliaConfig() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css"
      />
      <script src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js" />
      <InlineScript fn={algoliaSettings} />
    </div>
  )
}

function algoliaSettings() {
  // eslint-disable-next-line no-var
  var algoliaFacetFilters = preval`
    const lang = require('./utils/locale')
    const {fallbackLocale} = require('../config.json')
    if (lang === fallbackLocale) {
      module.exports = []
    } else {
      module.exports = [\`language:\${lang}\`]
    }
  `

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
