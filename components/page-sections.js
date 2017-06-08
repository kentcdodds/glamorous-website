import React from 'react'
import glamorous, {Div} from 'glamorous'
import Hero from './hero'
import {withContent} from './locale'
import interactiveMarkdown from './interactive-markdown'
import ClickToRender from './click-to-render'
import CodeSandboxEmbed from './code-sandbox-embed'
import {Anchor} from './styled-links'
import GitHubSVG from './svgs/github.svg'
import mdToHTML from './utils/md-to-html'

const repoEditRootURL =
  'https://github.com/kentcdodds/glamorous-website/edit/master'

const projectRoot = __dirname.slice(0, -'/components'.length)

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
      <Hero dangerouslySetInnerHTML={{__html: mdToHTML(data.title)}} />
      <PageWrapper>
        <h3>{interactiveMarkdown(data.heading)}</h3>
        {data.sections.map(section =>
          <DocSection key={section.title} {...section} />,
        )}
      </PageWrapper>
    </Div>
  )
}

const DocSection = withContent(
  {component: 'page-sections'},
  function DocSection(props) {
    const {title, subtitle, filename, content} = props

    const Section = glamorous.section((p, {colors}) => ({
      borderBottom: `1px solid ${colors.primary}`,
      width: '100%',
      margin: '20px auto',
      paddingBottom: 20,
      maxWidth: '50rem',
    }))

    return (
      <Section>
        <h2 dangerouslySetInnerHTML={{__html: mdToHTML(title)}} />
        <h4 dangerouslySetInnerHTML={{__html: mdToHTML(subtitle)}} />
        <DocSectionDetails {...props} />
        {filename &&
          <EditAnchorWrap>
            <Anchor
              external
              href={`${repoEditRootURL}/${filename.replace(projectRoot, '')}`}
            >
              <GitHubSVG /> {content.edit}
            </Anchor>
          </EditAnchorWrap>}
      </Section>
    )
  },
)

function DocSectionDetails({title, description, codeSandboxId}) {
  return (
    <div>
      {interactiveMarkdown(description)}
      {codeSandboxId ?
        <ClickToRender
          component={CodeSandboxEmbed}
          summary={title}
          props={{title, id: codeSandboxId}}
        /> :
        null}
    </div>
  )
}
