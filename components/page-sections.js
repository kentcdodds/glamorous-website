import React from 'react'
import {Div} from 'glamorous'
import Hero from './hero'
import interactiveMarkdown from './interactive-markdown'
import ClickToRender from './click-to-render'
import CodeSandboxEmbed from './code-sandbox-embed'

export default PageSections

function PageSections({data}) {
  return (
    <Div margin="20px auto" maxWidth={700} textAlign="center">
      <Hero>{data.title}</Hero>
      {interactiveMarkdown(data.heading)}
      <div>
        {data.sections.map(section =>
          <DocSection key={section.title} {...section} />,
        )}
      </div>
    </Div>
  )
}

function DocSection(props) {
  const {title, subtitle} = props
  return (
    <div>
      <h2>{title}</h2>
      <ClickToRender
        summary={subtitle}
        component={DocSectionDetails}
        props={props}
      />
    </div>
  )
}

function DocSectionDetails({title, description, codeSandboxId}) {
  return (
    <div>
      {interactiveMarkdown(description)}
      {codeSandboxId ?
        <CodeSandboxEmbed title={title} id={codeSandboxId} /> :
        null}
    </div>
  )
}
