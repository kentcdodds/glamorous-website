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

> options and defaults: {clickToRender: false, summary: ''}

```md
~~~interactive
render(<button onClick={() => alert('Hello World')}>Hello World</button>)
~~~
```

This will render an interactive bit of code using the `CodePreview` component.

### pragma options

With these pragmas you can also specify options. These come in the form of an
object literal immediately after the pragma like so:

```md
~~~interactive {clickToRender: true, summary: 'Alert hello world'}
render(<button onClick={() => alert('Hello World')}>Hello World</button>)
~~~
```

There may be more forms in the future, but right now this is all we have.
