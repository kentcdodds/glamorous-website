# Locales

Hi! Thank you so much for your willingness to help out with
translation/documentation! From the very beginning localization and
accessibility has been important to this project, so we appreciate you wanting
to help pitch in.

This file will hopefully give you all you need to know about adding
documentation to the project and/or translating it.

## Structure

We try to keep things organized by page. So in the `pages` directory, you'll
find a directory for each of the pages. In each of these you'll find a
`content` directory where the localization files are. These are JavaScript
modules that export data with the content for that page.

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
