// normalerweise würdest du in etwa so anfangen:
// import glamorous from 'glamorous'

const mediaQueries = {
  phone: '@media only screen and (max-width: 500px)',
}



const Heading = glamorous.h1({

})



const Link = glamorous.a({

})



const ListItem = glamorous.li({

})



const CodeBlock = glamorous.pre({

})



// du kannst diese hier auch ausprobieren, wenn du möchtest

const Paragraph = glamorous.p({

})

const Code = glamorous.code({

})

const List = glamorous.ul({

})


render(
  <ReactMarkdown
    renderers={{
      Heading,
      Link,
      Paragraph,
      Code,
      CodeBlock: props => (
        <CodeBlock
          key={props.nodeKey}
          language={props.language}
          className={`language-${props.language} ${props.className}`}
        >
          <Code>
            {props.literal}
          </Code>
        </CodeBlock>
      ),
      List,
      Item: ListItem,
    }}
  />
)
