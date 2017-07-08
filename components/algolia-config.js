import React from 'react'
import {oneLineTrim} from 'common-tags'
import InlineScript from './inline-script'
//import docsearch from 'docsearch.js'
let docsearch = ''

if (typeof window !== 'undefined') {
  docsearch = require('docsearch.js')
}

export default AlgoliaConfig

function AlgoliaConfig() {
  return (
    <div>
      <link
        rel="stylesheet"
        href={oneLineTrim`
          https://cdn.jsdelivr.net/
          docsearch.js/2/docsearch.min.css
        `}
      />
      <script
        src={oneLineTrim`
          https://cdn.jsdelivr.net/
          docsearch.js/2/docsearch.min.js
        `}
      />
      <InlineScript fn={algoliaSettings} />
    </div>
  )
}

function algoliaSettings() {
  docsearch({
    apiKey: 'b5cb8dd730a01fb05e75f21396760fb8',
    indexName: 'glamorous',
    inputSelector: '.algolia_searchbox',
    algoliaOptions: {
      facetFilters: ['language:rc'],
    },
    debug: false,
  })
}
