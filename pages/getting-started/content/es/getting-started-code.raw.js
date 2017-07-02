// normally you'll start out with something like:
// import glamorous from 'glamorous'

const Heading = glamorous.h1({

})

const Link = glamorous.a({

})

const Paragraph = glamorous.p({

})

const Code = glamorous.code({

})

const CodeBlock = glamorous.pre({

})

const List = glamorous.ul({

})

const ListItem = glamorous.li({

})


render(
  <ReactMarkdown
    renderers={{
      Heading,
      Link,
      Paragraph,
      Code,
      CodeBlock: props => (
        <CodeBlock key={props.nodeKey} className={props.className}>
          <Code>{props.literal}</Code>
        </CodeBlock>
      ),
      List,
      Item: ListItem,
    }}
  />
)