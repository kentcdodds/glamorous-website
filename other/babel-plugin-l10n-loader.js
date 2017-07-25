const p = require('path')
const fs = require('fs')
const remark = require('remark')
const frontmatter = require('remark-frontmatter')
const visit = require('unist-util-visit')
const yaml = require('js-yaml')
const babylon = require('babylon')
const {fallbackLocale, supportedLocales} = require('../config.json')
const translationStatus = require('./translation-status')

module.exports = function l10nLoader({template, types: t}) {
  let {LOCALE: lang} = process.env
  if (!supportedLocales.includes(lang)) {
    lang = fallbackLocale
  }
  const buildDataAssignment = template(`
    const NAME = DATA
  `)

  return {
    name: 'babel-plugin-l10n-loader',
    visitor: {
      ImportDeclaration(path, {file: {opts: {filename}}}) {
        const isContentImport = looksLike(path, {
          node: {
            source: {
              value: v => v.split('/').includes('content'),
            },
          },
        })
        if (!isContentImport) {
          return
        }
        const {node: {specifiers: [specifier]}, node: {source}} = path
        const data = getContentData({filename, source: source.value})
        let DATA
        if (data.raw) {
          DATA = t.stringLiteral(data.string)
        } else {
          DATA = toObjectExpression(data)
        }
        path.replaceWith(
          buildDataAssignment({
            NAME: t.identifier(specifier.local.name),
            DATA,
          }),
        )
      },
      CallExpression(path, {file: {opts: {filename}}}) {
        const isContentRequire = looksLike(path.node, {
          callee: {name: 'require'},
          arguments: args =>
            args &&
            args.length === 1 &&
            args[0].value &&
            args[0].value.includes('content'),
        })
        if (!isContentRequire) {
          return
        }
        const source = path.node.arguments[0].value
        const data = getContentData({
          source,
          filename,
        })
        if (data.raw) {
          path.replaceWith(t.stringLiteral(data.string))
        } else {
          path.replaceWith(toObjectExpression(data))
        }
      },
    },
  }

  function getContentData({source, filename}) {
    const {localePath, fallbackPath} = getAbsolutePathOfContent({
      source,
      filename,
    })
    const projectRelativePath = localePath.replace(p.join(__dirname, '..'), '')
    const isMarkdown = source.endsWith('.md')
    const isRaw = source.includes('.raw')
    const status = translationStatus(fallbackPath, lang)
    const data = {
      meta: {
        filename: projectRelativePath,
        isOutdated: status === translationStatus.OUTDATED,
        isUpToDate: status === translationStatus.UP_TO_DATE,
        isMissing: status === translationStatus.MISSING,
      },
    }
    if (isRaw) {
      Object.assign(data, {
        raw: true,
        string: fs.readFileSync(localePath, 'utf8'),
      })
    } else if (isMarkdown) {
      Object.assign(
        data,
        getMarkdownData(fallbackPath),
        getMarkdownData(localePath),
      )
    } else {
      Object.assign(data, require(fallbackPath), require(localePath))
    }
    return data
  }

  function getAbsolutePathOfContent({source, filename}) {
    const dir = p.dirname(p.resolve(filename))
    let absolutePath = p.resolve(dir, source)
    const fallbackPath = absolutePath
    if (lang !== fallbackLocale) {
      const localePath = absolutePath.replace('content', `content/${lang}`)
      try {
        absolutePath = require.resolve(localePath)
      } catch (error) {
        console.error(
          `Using fallback for: ${localePath} because that file does not exist`,
        )
      }
    }
    return {localePath: require.resolve(absolutePath), fallbackPath}
  }

  function toObjectExpression(object) {
    const fileNode = babylon.parse(`var x = ${JSON.stringify(object)}`)
    return fileNode.program.body[0].declarations[0].init
  }
}

function getMarkdownData(absolutePath) {
  const markdownString = fs.readFileSync(absolutePath, 'utf8')
  let data = null

  const result = remark()
    .use(frontmatter, ['yaml'])
    .use(dataPlugin)
    .processSync(markdownString)

  return Object.assign(
    {
      markdown: String(result),
    },
    data,
  )

  function dataPlugin() {
    return ast => {
      visit(ast, 'yaml', yamlNode => {
        if (data) {
          return
        }
        try {
          data = yaml.load(yamlNode.value)
        } catch (error) {
          console.error(
            `There was an error parsing the yaml in ${absolutePath}`,
          )
          throw error
        }
        // switch it to an html comment so it doesn't show up when rendered
        yamlNode.value = `<!-- removed yaml -->`
        yamlNode.type = 'html'
      })
    }
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
  return val == null || /^[sbn]/.test(typeof val)
}

/* eslint no-console:0 */
