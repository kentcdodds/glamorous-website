# Locales

This is where all translated text will go. Still working out how this is going
to work...

## Important notes:

1. Because the markdown is written in a JavaScript file and uses template
   literals, we use `~` rather than backticks (\`) because we don't want to have
   to escape common things like codeblocks. We use `replace` to swap `~` to a
   backtick so hopefully this is pretty straightforward.
2. Please do not translate codeblocks unless you're able to verify that the
   example functions the same.

## Special Syntax

To strike a good balance between ease of authoring/translation with markdown
and the dynamic power of React, we have a fancy `interactive-markdown.js`
module which parses the markdown and handles some special code blocks syntax.

### pragmas

These code blocks handlers rely on the "code language" you specify in your
code block. Here are some examples of what's possible:

> these examples assume that you're using ~ to represent a backtick (\`)

#### interactive

> options and defaults: N/A

```md
~~~interactive
render(<button onClick={() => alert('Hello World')}>Hello World</button>)
~~~
```

This will render an interactive bit of code using the `CodePreview` component.

#### click-to-render

> options and defaults: title: undefined, rerender: true

```md
~~~click-to-render
<div>I am not rendered until now!</div>
~~~
```

This will render an expandable `<details>` tag with the contents of the
codeblock rendered as HTML. The use case for this is if you want something to
not be rendered at all until it's been clicked (normally `<details>` will render
its contents and do effectively `display: none`). The biggest use case for this
is for `iframes` for embedding something. Normally you should just use regular
`<details>` tags though.

#### codesandbox

> options and defaults: title: undefined, rerender: false

```md
~~~codesandbox
o2j4QkLwA
~~~
```

This will render a codesandbox embed that's inside a `<details>` tag. It wont
render until it's been expanded.

### pragma options

With these pragmas you can also specify options. These come in the form of an
object literal immediately after the pragma like so:

```md
~~~codesandbox {title: 'CSS Grid'}
o2j4QkLwA
~~~
```
