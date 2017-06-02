import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import interactiveMarkdown from '../components/interactive-markdown'
import ClickToRender from '../components/click-to-render'
import CodeSandboxEmbed from '../components/code-sandbox-embed'

function Examples(props) {
  const locale = 'en-US'
  const examplesData = require(`../translations/${locale}/examples/index`)
  return (
    <Layout pathname={props.url ? props.url.pathname : ''}>
      <Hero>
        edit in pages/examples.js
      </Hero>
      {interactiveMarkdown(examplesData.heading)}
      <div>
        {examplesData.examples.map(example => (
          <Example key={example.title} {...example} />
        ))}
      </div>
    </Layout>
  )
}

function Example(props) {
  const {title, subtitle} = props
  return (
    <div>
      <h2>{title}</h2>
      <ClickToRender
        summary={subtitle}
        component={ExampleDetails}
        props={props}
      />
    </div>
  )
}

function ExampleDetails({title, description, codeSandboxId}) {
  return (
    <div>
      {interactiveMarkdown(description)}
      {codeSandboxId ?
        <CodeSandboxEmbed title={title} id={codeSandboxId} /> :
        null}
    </div>
  )
}

export default Examples
