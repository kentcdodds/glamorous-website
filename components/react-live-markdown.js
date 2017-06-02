import React from 'react'
import remark from 'remark'
import remarkHtml from 'remark-html'
import visit from 'unist-util-visit'
import CodePreview from './code-preview'

export default markdownToReactLive

function markdownToReactLive(markdownString) {
  const codeblocks = []

  function plugin() {
    return ast => {
      visit(ast, 'code', codeNode => {
        if (codeNode.lang !== 'react-live') {
          return
        }
        codeblocks.push(codeNode.value)
        // change the node from a code block to a paragraph
        // so when we do our replacing stuff it doesn't mess up
        // the HTML
        Object.assign(codeNode, {
          type: 'paragraph',
          children: [{type: 'text', value: 'REACT_LIVE_CODEBLOCK'}],
          lang: null,
          value: null,
        })
      })
    }
  }

  const result = remark()
    .use(remarkHtml)
    .use(plugin)
    .processSync(markdownString)

  const markdownComponents = String(result)
    .split('REACT_LIVE_CODEBLOCK')
    .reduce((all, s, index) => {
      return all.concat(
        <div key={`md${index}`} dangerouslySetInnerHTML={{__html: s}} />,
        codeblocks[index] ?
          <CodePreview key={`cb${index}`} code={codeblocks[index]} /> :
          undefined,
      )
    }, [])

  return markdownComponents
}
