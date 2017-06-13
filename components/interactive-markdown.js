import Prism from 'prismjs'
// eslint-disable-next-line import/no-unassigned-import
import 'prismjs/components/prism-bash'
import React from 'react'
import remark from 'remark'
import remarkHtml from 'remark-html'
import visit from 'unist-util-visit'
import CodePreview from './code-preview'
import Callout from './callout'
import ClickToRender from './click-to-render'
import highlighter from './utils/highlighter'
import StaticCodeBlock from './static-code-block'
import stripIndent from './utils/strip-indent'
import {or} from './utils/specifications'

export default interactiveMarkdown

function renderHTML({html, ...rest}) {
  return <div dangerouslySetInnerHTML={{__html: html}} {...rest} />
}

function ClickToRenderCodePreview(props) {
  return (
    <ClickToRender
      component={CodePreview}
      summary={props.summary}
      props={props}
    />
  )
}

function highlightWithPrism(code, language) {
  return Prism.highlight(code, Prism.languages[language])
}

function createSupportedPragmaMatcher() {
  const prismHighlighter = highlighter(highlightWithPrism)
  const highlightHtml = prismHighlighter('html')
  const highlightJavaScript = prismHighlighter('javascript')
  const highlightBash = prismHighlighter('bash')

  const codeBlockHandler = createCodeHandler(StaticCodeBlock)
  const htmlHandler = highlightHtml(codeBlockHandler)
  const javaScriptHandler = highlightJavaScript(codeBlockHandler)
  const bashHandler = highlightBash(codeBlockHandler)
  const codePreviewHandler = createCodeHandler(CodePreview)
  const clickToRenderCodePreviewHandler = createCodeHandler(
    ClickToRenderCodePreview,
  )

  const pragmaHandlers = {
    interactive(options, value) {
      const interativeCodeBlock = options.clickToRender ?
        clickToRenderCodePreviewHandler :
        codePreviewHandler
      return interativeCodeBlock(options, value)
    },
    callout(options, value) {
      return {component: Callout, children: value, ...options}
    },
    javascript(options, value) {
      return javaScriptHandler(options, value)
    },
    bash(options, value) {
      return bashHandler(options, value)
    },
    html(options, value) {
      return htmlHandler(options, value)
    },
  }

  return function matcher(specification) {
    const supportedPragma = Object.keys(pragmaHandlers).find(specification)
    return pragmaHandlers[supportedPragma] ?
      pragmaHandlers[supportedPragma] :
      codePreviewHandler
  }
}

function matchPragmaByLanguageName(lang) {
  return function specification(pragma) {
    return lang === pragma
  }
}

function matchPragmaByLanguageShortName(lang) {
  const names = {
    javascript: 'js',
  }

  return function specification(pragma) {
    return lang === names[pragma]
  }
}

function createCodeHandler(component) {
  return function codeHandler(options, value) {
    return {component, code: value, ...options}
  }
}

function interactiveMarkdown(markdownString) {
  const componentBlocks = []

  function plugin() {
    return ast => {
      visit(ast, 'code', codeNode => {
        const language = getLanguage(codeNode.lang)
        const getMatchingPragma = createSupportedPragmaMatcher()
        const specification = or(
          matchPragmaByLanguageName(language),
          matchPragmaByLanguageShortName(language),
        )
        const pragmaHandler = getMatchingPragma(specification)
        const options = getOptions(codeNode.lang)

        componentBlocks.push(pragmaHandler(options, codeNode.value))
        // if it's a special code block then we need to
        // change the node from a code block to a paragraph
        // so when we do our replacing stuff it doesn't mess up
        // the HTML
        Object.assign(codeNode, {
          type: 'paragraph',
          children: [{type: 'text', value: 'COMPONENT_BLOCK'}],
          lang: null,
          value: null,
        })
      })
    }
  }

  const result = remark()
    .use(remarkHtml)
    .use(plugin)
    .processSync(stripIndent(markdownString))

  const markdownComponents = String(result)
    .split('<p>COMPONENT_BLOCK</p>')
    .reduce((all, s, index) => {
      return all.concat(
        renderHTML({html: s, key: `md${index}`}),
        componentBlocks[index] ?
          React.createElement(componentBlocks[index].component, {
            key: `cb${index}`,
            ...componentBlocks[index],
          }) :
          undefined,
      )
    }, [])

  return markdownComponents
}

function getLanguage(languageString) {
  if (hasOptions(languageString)) {
    const languageStartIndex = 0
    return languageString.substr(
      languageStartIndex,
      languageString.indexOf(' '),
    )
  }
  return languageString
}

function hasOptions(languageString) {
  const spaceMinimumNumberOccurrences = 1
  return (
    Boolean(languageString) &&
    languageString.indexOf(' ') >= spaceMinimumNumberOccurrences
  )
}

function getOptions(languageString) {
  if (!hasOptions(languageString)) {
    return {}
  }

  const optionString = languageString.substring(languageString.indexOf(' '))
  let options
  // we're doing this because we don't want to have to
  // write our options as JSON. Just a bit easier :)
  // eslint-disable-next-line no-eval
  eval(`options = ${optionString}`)
  return options
}
