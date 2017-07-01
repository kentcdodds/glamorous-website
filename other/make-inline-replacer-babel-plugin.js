const p = require('path')
// const printAST = require('ast-pretty-print')

module.exports = makeInlineReplacerBabelPlugin

function makeInlineReplacerBabelPlugin({
  shouldTransform,
  getReplacement,
  overrides = {},
}) {
  return inlineReplacerBabelPlugin

  function inlineReplacerBabelPlugin({types: t}) {
    return Object.assign({}, overrides, {
      visitor: Object.assign({}, overrides.visitor, {
        ImportDeclaration(path, {file: {opts: {filename}}}) {
          const shouldTransformImport = looksLike(path, {
            node: {
              source: {
                value: v => shouldTransform({source: v, filename}),
              },
            },
          })
          if (!shouldTransformImport) {
            return
          }
          const {
            node: {specifiers: [specifier], source: {value: source}},
          } = path
          const name = t.identifier(specifier.local.name)
          const dir = p.dirname(p.resolve(filename))
          const absoluteSourcePath = require.resolve(p.resolve(dir, source))
          const init = getReplacement({source, filename, absoluteSourcePath})
          path.replaceWith(
            t.variableDeclaration('const', [t.variableDeclarator(name, init)]),
          )
        },
        CallExpression(path, {file: {opts: {filename}}}) {
          const shouldTransformRequire = looksLike(path.node, {
            callee: {name: 'require'},
            arguments: args =>
              args &&
              args.length === 1 &&
              args[0].value &&
              shouldTransform({source: args[0].value, filename}),
          })
          if (!shouldTransformRequire) {
            return
          }
          const source = path.node.arguments[0].value
          const dir = p.dirname(p.resolve(filename))
          const absoluteSourcePath = require.resolve(p.resolve(dir, source))
          path.replaceWith(
            getReplacement({filename, source, absoluteSourcePath}),
          )
        },
      }),
    })
  }
}

function looksLike(a, b) {
  return (
    a &&
    b &&
    Object.keys(b).every(bKey => {
      const bVal = b[bKey]
      const aVal = a[bKey]
      if (typeof bVal === 'function') {
        return bVal(aVal)
      }
      return isPrimitive(bVal) ? bVal === aVal : looksLike(aVal, bVal)
    })
  )
}

function isPrimitive(val) {
  // eslint-disable-next-line
  return val == null || /^[sbn]/.test(typeof val);
}
