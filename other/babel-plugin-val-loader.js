const t = require('babel-types')
const makeInlineReplacerBabelPlugin = require('./make-inline-replacer-babel-plugin')

function shouldTransform({source}) {
  return source.includes('.val')
}

function getReplacement({absoluteSourcePath}) {
  const valLoader = require(absoluteSourcePath)
  // TODO: handle returned objects/arrays/functions?
  return t.stringLiteral(valLoader())
}

module.exports = makeInlineReplacerBabelPlugin({
  overrides: {name: 'val-loader'},
  shouldTransform,
  getReplacement,
})
