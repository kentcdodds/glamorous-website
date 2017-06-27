import React from 'react'
import glamorous, {Div} from 'glamorous'
import slugify from 'slugify'
import Hero from './hero'
import {withContent} from './locale'
import interactiveMarkdown from './interactive-markdown'
import ClickToRender from './click-to-render'
import CodeSandboxEmbed from './code-sandbox-embed'
import {Anchor} from './styled-links'
import GitHubSVG from './svgs/github.svg'
import LinkSVG from './svgs/link.svg'
import mdToHTML from './utils/md-to-html'

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

function PageSections({title, note, heading, sections}) {
  return (
    <Div>
      <Hero dangerouslySetInnerHTML={{__html: mdToHTML(title)}} />
      <PageWrapper>
        <h3>{interactiveMarkdown(heading)}</h3>
        <Div maxWidth="50rem" margin="auto">{interactiveMarkdown(note)}</Div>
        {sections.map(section =>
          <DocSection key={section.meta.filename} {...section} />,
        )}
      </PageWrapper>
    </Div>
  )
}

const DocSection = withContent(
  {component: 'page-sections'},
  function DocSection(props) {
    const {meta: {title, subtitle, filename}, content} = props

    const Section = glamorous.section((p, {colors}) => ({
      borderBottom: `1px solid ${colors.primary}`,
      width: '100%',
      margin: '20px auto',
      paddingBottom: 20,
      maxWidth: '50rem',
    }))

    return (
      <Section>
        {filename &&
          <EditAnchorWrap>
            <Anchor
              external
              href={`${repoEditRootURL}${filename}`}
              css={{textDecoration: 'none', ':hover': {textDecoration: 'none'}}}
            >
              <GitHubSVG /> {content.edit}
            </Anchor>
          </EditAnchorWrap>}
        <Anchor href={`#${slugify(title)}`} isSlug={true}>
          <LinkSVG />
          <h2
            id={slugify(title)}
            dangerouslySetInnerHTML={{__html: mdToHTML(title)}}
          />
        </Anchor>
        {subtitle ?
          <h4 dangerouslySetInnerHTML={{__html: mdToHTML(subtitle)}} /> :
          null}
        <DocSectionDetails {...props} />
      </Section>
    )
  },
)
function DocSectionDetails({
  meta: {
    title,
    codeSandboxId,
    codeSandboxSummary = title,
  },
  markdown,
}) {
  return (
    <div>
      {interactiveMarkdown(markdown)}
      {codeSandboxId ?
        <ClickToRender
          component={CodeSandboxEmbed}
          summary={codeSandboxSummary}
          props={{title: codeSandboxSummary, id: codeSandboxId}}
        /> :
        null}
    </div>
  )
}
