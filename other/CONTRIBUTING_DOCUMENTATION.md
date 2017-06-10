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
modules that export data with the content for that page. See the `README.md`
in each of the `content` folders to get an idea of how that folder is supposed
to work.

### Docs Pages structure

Many of the pages have the same structure, so we'll just document them here:

<details>
<summary>Docs pages structure</summary>

Here's an example of a docs page:

```javascript
import React from 'react'
import {withContent} from '../../components/locale'
import Layout from '../../components/layout'
import PageSections from '../../components/page-sections'

function Advanced({url, content, locale}) {
  return (
    <Layout pathname={url ? url.pathname : ''} locale={locale}>
      <PageSections data={content} />
    </Layout>
  )
}

// the `page` here should be the name of the folder in which this file resides
export default withContent({page: 'advanced'}, Advanced)
```

With this, you'll need a `content/index.js` file with this structure:

```javascript
module.exports = {
  title: 'The title',
  heading: `Some heading thing`,
  sections: [
    // these are local files that you require in
    // see the structure of those next
    require('./doc-section-1'),
    require('./doc-section-2'),
  ],
}
```

Here's an example of what `./doc-section-1` would look like:

```javascript
module.exports = {
  title: 'Title of the section (supports markdown)',
  subtitle: 'The subtitle of the section (also supports markdown)',
  description: `
    # this is markdown parseable
    with support for the special syntax mentioned below
  `.replace(/~/g, '`'), // so you avoid having to escape backticks (read more below)
  codesandboxId: '2k8yll8qj', // optional, will show a codesandbox embed below your docs
  filename: __filename, // required
}
```

</details>

## Translation

First off, thank you soooo much! Your efforts will enable many people to use
this project more effectively. It is important that you understand how things
are supposed to be structured for the files. The files you'll be translating
are *JavaScript*, so you'll need to make sure that you only translate the parts
that should be translated (in strings) and that the end result is valid JS.

### Code samples

Please don't translate code samples unless you're certain the code sample still
works.

### Crowdin

When translating, you will not be submitting PRs to this repo directly, instead
we're using a service called Crowdin to do translations. It should hopefully
make the process smooth and easy. Please sign up for a free account and join
our efforts on the project page
[here](https://crowdin.com/project/glamorous-website). You can find an intro
for how to use Crowdin [here](https://youtu.be/LySRFuiKYLE).

Thank you!

## Important Markdown notes:

Because the markdown is written in a JavaScript file and uses template
literals, we use `~` rather than backticks (\`) because we don't want to have
to escape common things like codeblocks. We use `replace` to swap `~` to a
backtick so hopefully this is pretty straightforward.

### Special Syntax

To strike a good balance between ease of authoring/translation with markdown
and the dynamic power of React, we have a fancy `interactive-markdown.js`
module which parses the markdown and handles some special code blocks syntax.

#### pragmas

These code blocks handlers rely on the "code language" you specify in your
code block. Here are some examples of what's possible:

> these examples assume that you're using ~ to represent a backtick (\`)
> because most (all?) of our markdown is using ~ to represent backticks
> for reasons mentioned above.

##### interactive

> options and defaults: {clickToRender: false, summary: ''}

```md
~~~interactive
render(<button onClick={() => alert('Hello World')}>Hello World</button>)
~~~
```

This will render an interactive bit of code using the `CodePreview` component.

##### callout

> options and defaults: {type: 'info', title: undefined}

```md
~~~callout {type: 'danger', title: 'Footgun'}
You might be tempted to do x, but *don't*!

_markdown works in here_
~~~
```

This will render a highlighted note.

#### pragma options

With these pragmas you can also specify options. These come in the form of an
object literal immediately after the pragma like so:

```md
~~~interactive {clickToRender: true, summary: 'Alert hello world'}
render(<button onClick={() => alert('Hello World')}>Hello World</button>)
~~~
```

There may be more forms in the future, but right now this is all we have.
