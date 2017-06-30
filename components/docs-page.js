/* eslint import/max-dependencies:0 */
import React from 'react'
import Head from 'next/head'
import glamorous, {Div} from 'glamorous'
import slugify from 'slugify'
import Hero from './hero'
import Layout from './layout'
import twitterCard from './twitter-card'
import interactiveMarkdown from './interactive-markdown'
import ClickToRender from './click-to-render'
import CodeSandboxEmbed from './code-sandbox-embed'
import {Anchor} from './styled-links'
import GitHubSVG from './svgs/github.svg'
import LinkSVG from './svgs/link.svg'
import mdToHTML from './utils/md-to-html'
import content from './content/page-sections'

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

export default DocsPage

function DocsPage({url, pageContent = {}, sections = []}) {
  return (
    <Layout
      pathname={url ? url.pathname : ''}
      contributors={getContributors(sections)}
    >
      <Head>
        {twitterCard({
          card: 'summary',
          title: `glamorous - ${pageContent.title}`,
          description: pageContent.heading,
          pathname: url ? url.pathname : '',
        })}
      </Head>
      <PageSections {...pageContent} sections={sections} />
    </Layout>
  )
}

function PageSections({title, note, heading, sections}) {
  return (
    <Div>
      <Hero dangerouslySetInnerHTML={{__html: mdToHTML(title)}} />
      <PageWrapper>
        <h3>
          {interactiveMarkdown(heading)}
        </h3>
        <Div maxWidth="50rem" margin="auto">
          {interactiveMarkdown(note)}
        </Div>
        {sections.map(section =>
          <DocSection key={section.meta.filename} {...section} />,
        )}
      </PageWrapper>
    </Div>
  )
}

function DocSection(props) {
  const {title, subtitle, meta: {filename}} = props

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
      <h4 dangerouslySetInnerHTML={{__html: mdToHTML(subtitle)}} />
      <DocSectionDetails {...props} />
    </Section>
  )
}

function DocSectionDetails({title, codeSandboxId, markdown}) {
  return (
    <div>
      {interactiveMarkdown(markdown)}
      {codeSandboxId ?
        <ClickToRender
          component={CodeSandboxEmbed}
          summary="CodeSandbox"
          props={{title, id: codeSandboxId}}
        /> :
        null}
    </div>
  )
}

function getContributors(sections) {
  return sections
    .reduce((contrib, sec) => contrib.concat(sec.contributors), [])
    .filter(Boolean)
    .filter((x, i, a) => a.indexOf(x) === i)
}
