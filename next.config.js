const webpack = require('webpack')
const marked = require('marked')

const renderer = new marked.Renderer()
const USE_PREFETCH = process.env.NODE_ENV !== 'test'

module.exports = {
  webpack: config => {
    // Add in prefetch conditionally so we don't break jest snapshot testing
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.USE_PREFETCH': JSON.stringify(USE_PREFETCH),
      })
    )

    // Markdown loader so we can use docs as .md files
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {loader: 'html-loader'},
        {loader: 'markdown-loader', options: {pedantic: true, renderer}},
      ],
    })

    return config
  },
}

// This is not transpiled
/*
  eslint
  comma-dangle: [
    2,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'never'
    }
  ]
 */
