import React from 'react'
import glamorous, {Div} from 'glamorous'
import Hero from './hero'
import interactiveMarkdown from './interactive-markdown'
import CodeSandboxEmbed from './code-sandbox-embed'

const PageWrapper = glamorous.div((props, {colors}) => ({
  backgroundColor: colors.white,
  width: '100%',
  padding: '1rem',
  '& > h3': {
    width: '100%',
    margin: '20px auto',
    maxWidth: '50rem',
  },
}))

export default PageSections

function PageSections({data}) {
  return (
    <Div>
      <Hero>{data.title}</Hero>
      <PageWrapper>
        <h3>{interactiveMarkdown(data.heading)}</h3>
        {data.sections.map(section =>
          <DocSection key={section.title} {...section} />,
        )}
      </PageWrapper>
    </Div>
  )
}

function DocSection(props) {
  const {title} = props

  // eslint-disable-next-line no-shadow
  const Section = glamorous.section((props, {colors}) => ({
    borderBottom: `1px solid ${colors.primary}`,
    width: '100%',
    margin: '20px auto',
    paddingBottom: 20,
    maxWidth: '50rem',
  }))

  return (
    <Section>
      <h2>{title}</h2>
      <DocSectionDetails {...props} />
    </Section>
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
