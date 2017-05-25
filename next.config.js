// This file will let us add in prefetch conditionally so we don't break jest snapshot testing

const webpack = require('webpack')
const path = require('path')
const glob = require('glob')

const USE_PREFETCH = process.env.NODE_ENV !== 'test'

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.USE_PREFETCH': JSON.stringify(USE_PREFETCH)
      })
    )

    return config
  }
}
