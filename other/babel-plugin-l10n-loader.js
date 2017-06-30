const p = require('path')
const fs = require('fs')
const remark = require('remark')
const visit = require('unist-util-visit')
const pathExists = require('path-exists')
const yaml = require('js-yaml')
const babylon = require('babylon')

const fallbackLang = 'en'
const supportedLocales = ['en', 'fr', 'es']

module.exports = function l10nLoader({template, types: t}) {
  let {LOCALE: lang} = process.env
  if (!supportedLocales.includes(lang)) {
    lang = fallbackLang
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
        path.replaceWith(
          buildDataAssignment({
            NAME: t.identifier(specifier.local.name),
            DATA: toObjectExpression(data),
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
        const objExpression = toObjectExpression(data)
        path.replaceWith(objExpression)
      },
    },
  }

  function getContentData({source, filename}) {
    const absolutePath = getAbsolutePathOfContent({source, filename})
    const projectRelativePath = absolutePath.replace(
      p.join(__dirname, '..'),
      '',
    )
    const isMarkdown = source.endsWith('.md')
    const addJs = !isMarkdown && !source.endsWith('.js')
    const ext = addJs ? '.js' : ''
    const data = {
      meta: {
        filename: `${projectRelativePath}${ext}`,
        // TODO: let's try to determine whether the translation is outdated and add
        // some metadata to the content which the website could use to show readers
        // that the translation may be outdated or missing content.
      },
    }
    if (isMarkdown) {
      Object.assign(data, getMarkdownData(absolutePath))
    } else {
      Object.assign(data, require(absolutePath))
    }
    return data
  }

  function getAbsolutePathOfContent({source, filename}) {
    const dir = p.dirname(p.resolve(filename))
    let absolutePath = p.resolve(dir, source)
    if (lang !== fallbackLang) {
      const localePath = absolutePath.replace('content', `content/${lang}`)
      if (pathExists.sync(localePath)) {
        absolutePath = localePath
      } else {
        console.error(
          `Using fallback for: ${localePath} because that file does not exist`,
        )
      }
    }
    return absolutePath
  }

  function toObjectExpression(object) {
    const fileNode = babylon.parse(`var x = ${JSON.stringify(object)}`)
    return fileNode.program.body[0].declarations[0].init
  }
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

/* eslint no-console:0 */
