import React from 'react'
import remark from 'remark'
import remarkHtml from 'remark-html'
import visit from 'unist-util-visit'
import CodePreview from './code-preview'
import Callout from './callout'
import ClickToRender from './click-to-render'
import stripIndent from './utils/strip-indent'

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

function interactiveMarkdown(markdownString) {
  const componentBlocks = []
  const pragmaHandlers = {
    interactive(options, value) {
      const component = options.clickToRender ?
        ClickToRenderCodePreview :
        CodePreview
      return {component, code: value, ...options}
    },
    callout(options, value) {
      return {component: Callout, children: value, ...options}
    },
  }

  function plugin() {
    return ast => {
      visit(ast, 'code', codeNode => {
        Object.keys(pragmaHandlers).some(pragma => {
          if (!codeNode.lang || codeNode.lang.indexOf(pragma) !== 0) {
            return false
          }
          const space = 1
          const options = getOptions(codeNode.lang.slice(pragma.length + space))
          componentBlocks.push(pragmaHandlers[pragma](options, codeNode.value))
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
          return true
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

function getOptions(string) {
  if (!string) {
    return {}
  }
  let options
  // we're doing this because we don't want to have to
  // write our options as JSON. Just a bit easier :)
  // eslint-disable-next-line no-eval
  eval(`options = ${string}`)
  return options
}
