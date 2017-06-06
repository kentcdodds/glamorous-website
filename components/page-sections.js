import React from 'react'
import glamorous, {Div} from 'glamorous'
import Hero from './hero'
import interactiveMarkdown from './interactive-markdown'
import CodeSandboxEmbed from './code-sandbox-embed'
import {Anchor} from './styled-links'
import GitHubSVG from './svgs/github.svg'

const repoEditRootURL =
  'https://github.com/kentcdodds/glamorous-website/edit/master'

const PageWrapper = glamorous.div((props, {colors}) => ({
  backgroundColor: colors.white,
  width: '100%',
  padding: '1rem',
  '& > h3': {
    width: '100%',
    margin: '20px auto',
    maxWidth: '50rem',
  },
  '& svg': {
    fill: `${colors.primary}`,
    width: '1rem',
  },
}))

const EditAnchorWrap = glamorous(Div)({
  display: 'flex',
  flexDirection: 'row-reverse',
})

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
  const {title, subtitle, editLink} = props

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
      <h4>{subtitle}</h4>
      <DocSectionDetails {...props} />
      {editLink &&
        <EditAnchorWrap>
          <Anchor external href={`${repoEditRootURL}${editLink}`}>
            <GitHubSVG /> Edit
          </Anchor>
        </EditAnchorWrap>}
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
