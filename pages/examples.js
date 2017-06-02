import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import interactiveMarkdown from '../components/interactive-markdown'

function Examples(props) {
  const locale = 'en-US'
  const examplesData = require(`../translations/${locale}/examples/index`)
  console.log(examplesData)
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

function Example({title, subtitle, description, codesandboxId}) {
  return (
    <div>
      <h2>{title}</h2>
      <details>
        <summary>{subtitle}</summary>
        {interactiveMarkdown(description)}
      </details>
    </div>
  )
}

export default Examples
