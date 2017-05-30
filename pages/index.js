import React from 'react'
import glamorous from 'glamorous'
import Logo from '../components/glamorous-logo'
import {Button} from '../components/styled-links'
import Layout from '../components/layout'
import Separator from '../components/separator'
import CodePreview from '../components/code-preview'
import MarkdownWrapper from '../components/markdown-wrapper'

const {Div} = glamorous

// Quick and Dirty copy paste

// Define main file here so we can require the markdown file in the client
let main = ''

// Adds in main.md on client only
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  main = require('../docs/intro.md')
}

const Title = glamorous.h1((props, {colors}) => ({
  margin: '1em 0',
  color: colors.primaryMed,
  fontWeight: 'normal',
  fontSize: '1em',
}))

const CodePreviewWrapper = glamorous.div((props, {colors}) => ({
  position: 'relative',
  padding: '1em',
  background: 'transparent',
  '::after': {
    content: '""',
    top: '8em',
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    background: colors.primaryMed,
    zIndex: -1,
  },
}))

const UsersHeading = glamorous.div((props, {colors}) => ({
  textTransform: 'uppercase',
  color: colors.white,
  fontSize: '0.8rem',
  fontWeight: '600',
  margin: '2.5rem 0 0.5rem',
  opacity: 0.8,
  textAlign: 'center',
}))

const Container = glamorous.div((props, {colors}) => ({
  background: colors.white,
  paddingTop: 1,
  paddingBottom: 1,
}))

const Home = ({url}) => {
  return (
    <Layout pathname={url ? url.pathname : ''}>
      <Div margin={20}>
        <Div margin="0 auto" maxWidth={800} textAlign="center">
          <Logo maxWidth={500} margin="0 auto" />
          <Title>
            Maintainable CSS with React
          </Title>
          <Button href="https://github.com/paypal/glamorous">
            GitHub
          </Button>
          <Button secondary href="http://kcd.im/glamorous-help">
            Try It
          </Button>
        </Div>
      </Div>
      <CodePreviewWrapper>
        <CodePreview />
        <UsersHeading>Used by peeps at</UsersHeading>
      </CodePreviewWrapper>
      <Separator />
      <Container>
        <MarkdownWrapper>
          <div dangerouslySetInnerHTML={{__html: main}} />
        </MarkdownWrapper>
      </Container>
      <Separator />
    </Layout>
  )
}

export default Home
