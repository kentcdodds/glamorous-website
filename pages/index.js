import React from 'react'
import glamorous from 'glamorous'
import Logo from '../components/glamorous-logo'
import Layout from '../components/layout'
import CodePreview from '../components/code-preview'
import {HomePageExample} from '../examples/home-page-example'

const {Div} = glamorous

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
    top: '15em',
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
  fontWeight: '600',
  margin: '2.5rem 0 0.5rem',
  textAlign: 'center',
}))

const CodeBlock = glamorous.div((props, {colors, fonts}) => ({
  background: colors.code,
  borderRadius: 5,
  fontFamily: fonts.monospace,
  color: colors.lightGray,
  padding: '15px 0',
  maxWidth: 650,
  width: '100%',
  textAlign: 'center',
  margin: '0 auto',
  marginTop: 40,
}))

const UsersList = glamorous.ul((props, {colors}) => ({
  color: colors.white,
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '2em',
  fontWeight: 'bold',
  margin: '0 auto',
  padding: 0,
  maxWidth: '50rem',
  textTransform: 'uppercase',
  flexWrap: 'wrap',
}))

const User = glamorous.li((props, {mediaQueries}) => ({
  [mediaQueries.smallOnly]: {
    width: '100vw',
    textAlign: 'center',
  },
}))

const Home = ({url}) => {
  return (
    <Layout pathname={url ? url.pathname : ''}>
      <Div margin={20}>
        <Div margin="0 auto" maxWidth={800} textAlign="center">
          <Logo margin="0 auto" />
          <Title>
            Maintainable CSS with React
          </Title>
        </Div>
      </Div>
      <CodePreviewWrapper>
        <CodePreview code={HomePageExample} />
        <CodeBlock>
          npm install --save glamorous react glamor prop-types
        </CodeBlock>
        <UsersHeading>Used by peeps at</UsersHeading>
        <UsersList>
          <User>Target</User>
          <User>Walmart</User>
          <User>Reddit</User>
          <User>Bloomberg</User>
        </UsersList>
      </CodePreviewWrapper>
    </Layout>
  )
}

export default Home
