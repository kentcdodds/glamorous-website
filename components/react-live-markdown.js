import React, {Component} from 'react'
import axios from 'axios'
import remark from 'remark'
import remarkHtml from 'remark-html'
import visit from 'unist-util-visit'
import CodePreview from './code-preview'

class ReactLiveMarkdown extends Component {
  constructor() {
    super()
    this.state = {markdownComponents: <div>loading</div>}
  }
  componentDidMount() {
    if (typeof window === 'undefined' || window.__NEXT_DATA__ === undefined) {
      return
    }
    axios.get(this.props.path).then(({data: string}) => {
      this.setState({markdownComponents: markdownToReactLive(string)})
    })
  }
  render() {
    return <div>{this.state.markdownComponents}</div>
  }
}

function markdownToReactLive(markdownString) {
  // eslint-disable-next-line import/no-dynamic-require
  const codeblocks = []

  function plugin() {
    return ast => {
      visit(ast, 'code', codeNode => {
        if (codeNode.lang !== 'react-live') {
          return
        }
        codeblocks.push(codeNode.value)
        codeNode.value = `__CODEBLOCK__`
      })
    }
  }

  const result = remark()
    .use(remarkHtml)
    .use(plugin)
    .processSync(markdownString)

  const markdownComponents = String(result)
    .split('__CODEBLOCK__')
    .reduce((all, s, index) => {
      return all.concat(
        <div dangerouslySetInnerHTML={{__html: s}} />,
        codeblocks[index] ? <CodePreview code={codeblocks[index]} /> : undefined,
      )
    }, [])
  return markdownComponents
}

export default ReactLiveMarkdown
