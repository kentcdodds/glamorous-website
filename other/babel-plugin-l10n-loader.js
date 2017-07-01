const p = require('path')
const fs = require('fs')
const remark = require('remark')
const visit = require('unist-util-visit')
const yaml = require('js-yaml')
const babylon = require('babylon')
const t = require('babel-types')
const {fallbackLocale, supportedLocales} = require('../config.json')
const makeInlineReplacerBabelPlugin = require('./make-inline-replacer-babel-plugin')

function shouldTransform({source}) {
  return source.includes('/content')
}

function getReplacement({filename, source}) {
  const data = getContentData({filename, source})
  let replacement
  if (data.raw) {
    replacement = t.stringLiteral(data.string)
  } else {
    replacement = toObjectExpression(data)
  }
  return replacement
}

function getContentData({source, filename}) {
  const {localePath, fallbackPath} = getAbsolutePathOfContent({
    source,
    filename,
  })
  const projectRelativePath = localePath.replace(p.join(__dirname, '..'), '')
  const isMarkdown = source.endsWith('.md')
  const isRaw = source.includes('.raw')
  const data = {
    meta: {
      filename: projectRelativePath,
      // TODO: let's try to determine whether the translation is outdated and add
      // some metadata to the content which the website could use to show readers
      // that the translation may be outdated or missing content.
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
  let {LOCALE: lang} = process.env
  if (!supportedLocales.includes(lang)) {
    lang = fallbackLocale
  }

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

function getMarkdownData(absolutePath) {
  const markdownString = fs.readFileSync(absolutePath, 'utf8')
  let data = null

  const result = remark().use(dataPlugin).processSync(markdownString)

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

module.exports = makeInlineReplacerBabelPlugin({
  overrides: {name: 'l10n-loader'},
  shouldTransform,
  getReplacement,
})

/* eslint no-console:0 */
