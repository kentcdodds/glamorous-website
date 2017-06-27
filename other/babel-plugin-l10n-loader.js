const p = require('path')
const fs = require('fs')
const remark = require('remark')
const visit = require('unist-util-visit')
const pathExists = require('path-exists')
const yaml = require('js-yaml')
const babylon = require('babylon')

const fallbackLang = 'en'
const {LOCALE: lang = fallbackLang} = process.env


module.exports = function l10nLoader({template, types: t}) {
  const buildMarkdownDeclaration = template(`
    const NAME = {
      markdown: MARKDOWN
    }
  `)
  const buildJSMonkeyPatch = template(`
    NAME.meta = META
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
        if (lang !== fallbackLang) {
          const localePath = source.value.replace('content', `content/${lang}`)
          if (pathExists.sync(localePath)) {
            source.value = localePath
          } else {
            console.error(
              `Using fallback for: ${localePath} because that file does not exist`,
            )
          }
        }
        const dir = p.dirname(p.resolve(filename))
        const absolutePath = p.resolve(dir, source.value)
        const projectRelativePath = absolutePath.replace(
          p.join(__dirname, '..'),
          '',
        )
        const meta = {}
        let markdownData
        const isMarkdown = source.value.endsWith('.md')
        if (isMarkdown) {
          // replace it with the string value of the markdown file
          markdownData = getMarkdownData(absolutePath)
          Object.assign(meta, markdownData.meta)
        }

        path.insertAfter(
          buildJSMonkeyPatch({
            NAME: t.identifier(specifier.local.name),
            META: toObjectExpression(Object.assign({
              filename: projectRelativePath,
              // TODO: let's try to determine whether the translation is outdated and add
              // some metadata to the content which the website could use to show readers
              // that the translation may be outdated or missing content.
            }, meta)),
          }),
        )
        if (isMarkdown) {
          path.replaceWith(
            buildMarkdownDeclaration({
              NAME: t.identifier(specifier.local.name),
              MARKDOWN: t.stringLiteral(markdownData.markdown),
            }),
          )
        }
      },
    },
  }

  function toObjectExpression(object) {
    const fileNode = babylon.parse(`var x = ${JSON.stringify(object)}`)
    return fileNode.program.body[0].declarations[0].init
  }
}

function getMarkdownData(absolutePath) {
  const markdownString = fs.readFileSync(absolutePath, 'utf8')
  let meta = null

  const result = remark()
    .use(metadataPlugin)
    .processSync(markdownString)

  return {
    markdown: String(result),
    meta,
  }

  function metadataPlugin() {
    return ast => {
      visit(ast, 'yaml', yamlNode => {
        if (meta) {
          return
        }
        meta = yaml.load(yamlNode.value)
        // switch it to an html comment so it doesn't show up when rendered
        yamlNode.value = `<!-- ${yamlNode.value} -->`
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
