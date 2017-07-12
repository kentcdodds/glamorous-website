/* eslint import/max-dependencies:0 */
import React from 'react'
import Head from 'next/head'
import glamorous, {Div} from 'glamorous'
import slugify from 'slugify'
import {Title} from './hero'
import Layout from './layout'
import twitterCard from './twitter-card'
import interactiveMarkdown from './interactive-markdown'
import ClickToRender from './click-to-render'
import CodeSandboxEmbed from './code-sandbox-embed'
import {Anchor} from './styled-links'
import GitHubSVG from './svgs/github.svg'
import LinkSVG from './svgs/link.svg'
import mdToHTML, {mdToHTMLUnwrapped} from './utils/md-to-html'
import content from './content/docs-page.md'

const repoEditRootURL =
  'https://github.com/kentcdodds/glamorous-website/edit/master'

const TranslationProblem = glamorous.div({
  display: 'inline-block',
  borderRadius: '2px',
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 20,
  fontSize: '0.8rem',
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 10,
  paddingRight: 10,
  '& p': {
    margin: 0,
  },
})

const OutdatedTranslation = glamorous(
  TranslationProblem,
)(({theme: {colors}}) => ({
  backgroundColor: colors.dangerLight,
}))

const MissingTranslation = glamorous(
  TranslationProblem,
)(({theme: {colors}}) => ({
  backgroundColor: colors.warningLight,
}))

const PageWrapper = glamorous.div(({theme: {colors}}) => ({
  backgroundColor: colors.white,
  width: '100%',
  padding: '1rem',
  '& > h3': {
    width: '100%',
    margin: '20px auto',
    maxWidth: '70rem',
  },
  '& svg': {
    fill: `${colors.primary}`,
    width: '1rem',
  },
  '& img': {
    width: '100%',
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
        <title>
          {pageContent.title}
        </title>
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
      <PageWrapper>
        <Title dangerouslySetInnerHTML={{__html: mdToHTMLUnwrapped(title)}} />
        <Div
          maxWidth="50rem"
          margin="auto"
          dangerouslySetInnerHTML={{__html: mdToHTMLUnwrapped(heading)}}
        />
        <Div
          maxWidth="50rem"
          margin="20px auto"
          borderLeft="3px solid"
          paddingLeft={20}
          opacity={0.8}
        >
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
  const {title, subtitle, meta: {filename, isOutdated, isMissing}} = props

  const Section = glamorous.section((p, {colors}) => ({
    borderBottom: `1px solid ${colors.primary}`,
    width: '100%',
    margin: '20px auto 75px',
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
            css={{
              textDecoration: 'none',
              ':hover': {textDecoration: 'none'},
            }}
          >
            <GitHubSVG /> {content.edit}
          </Anchor>
        </EditAnchorWrap>}
      <Anchor href={`#${slugify(title)}`} isSlug={true}>
        <LinkSVG />
        <h2
          id={slugify(title)}
          dangerouslySetInnerHTML={{__html: mdToHTMLUnwrapped(title)}}
        />
      </Anchor>
      {isMissing ?
        <MissingTranslation
          dangerouslySetInnerHTML={{
            __html: mdToHTML(content.missingTranslation),
          }}
        /> :
        null}
      {isOutdated ?
        <OutdatedTranslation
          dangerouslySetInnerHTML={{
            __html: mdToHTML(content.outdatedTranslation).replace(
                '__URL__',
                `${repoEditRootURL}${filename}`,
              ),
          }}
        /> :
        null}
      <glamorous.Div
        paddingLeft={10}
        borderLeft="2px solid #ccc"
        opacity={0.9}
        marginTop={10}
        marginBottom={20}
        dangerouslySetInnerHTML={{__html: mdToHTML(subtitle)}}
      />
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
