import React, {Component} from 'react'
import stripIndent from 'strip-indent'
import remark from 'remark'
import remarkHtml from 'remark-html'
import visit from 'unist-util-visit'
import CodePreview from './code-preview'

export default interactiveMarkdown

class ClickToRender extends Component {
  state = {render: false}
  static defaultProps = {rerender: true}
  setRender = () => {
    if (!this.props.rerender && this.state.render) {
      // if we've already rendered and we don't want to rerender
      // then we'll never reset the render state
      // The original use case was for codesandbox iframes to not have
      // to reload every time you click to expand them.
      return
    }
    setTimeout(() => {
      this.setState({render: this._details.open})
    })
  }
  render() {
    const {render} = this.state
    return (
      <details ref={n => (this._details = n)} onClick={this.setRender}>
        <summary>{this.props.title}</summary>
        {render ? this.props.render(this.props) : null}
      </details>
    )
  }
}

function renderCodeSandbox({title, id}) {
  return (
    <iframe
      title={title}
      src={`https://codesandbox.io/embed/${id}`}
      style={{
        width: '100%',
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  )
}

function renderHTML({html}) {
  return <div dangerouslySetInnerHTML={{__html: html}} />
}

function interactiveMarkdown(markdownString) {
  const componentBlocks = []
  const pragmaHandlers = {
    interactive(options, value) {
      return {component: CodePreview, code: value, ...options}
    },
    'click-to-render'(options, value) {
      return {
        component: ClickToRender,
        render: renderHTML,
        html: value,
        ...options,
      }
    },
    codesandbox(options, value) {
      return {
        component: ClickToRender,
        render: renderCodeSandbox,
        id: value.trim(),
        rerender: false, // so the code sandbox doesn't have to reload whenever it's expanded
        ...options,
      }
    },
  }

  function plugin() {
    return ast => {
      visit(ast, 'code', codeNode => {
        Object.keys(pragmaHandlers).some(pragma => {
          if (codeNode.lang.indexOf(pragma) !== 0) {
            return false
          }
          const space = 1
          const options = getOptions(
            codeNode.lang.slice(pragma.length + space),
          )
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
        <div key={`md${index}`} dangerouslySetInnerHTML={{__html: s}} />,
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

// I think jsx-a11y is mistaken with <details></details> elements
/*
eslint
  jsx-a11y/no-noninteractive-element-interactions:0,
  jsx-a11y/click-events-have-key-events:0
*/
