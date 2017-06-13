# Content

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

### Workflow

Unfortunately we've been unsuccessful in setting up a workflow with an existing
free tool. So we've got some tooling of our own to make your workflow as good
as it can be. You will need to set up the project locally (see `CONTRIBUTING.md`
for how to do this).

Before you get started, try to coordinate efforts with others who may be
translating the same language. Search
[the issues](https://github.com/kentcdodds/glamorous-website/issues) to see if
anyone else is working on the language you are. If no issue exists, then
[file a new issue](https://github.com/kentcdodds/glamorous-website/issues/new)
indicating you'd like to translate content to a new language and you can use
that to keep track of what translations you're working on and to coordinate with
others who want to help.

First, run `node other/list-l10n.js {locale}` (if you were doing French,
`{locale}` would be `fr`, for Spanish, it would be `es`). This will list the
files which have up to date translations, outdated translations, and files
missing translations for the locale you specified. Go ahead and work your way
through these files one-by-one. You don't have to do them all at once, you can
do some of them, [submit a pull request](http://makeapullrequest.com), and come
back later to do more.

To keep things up to date, you can update your local copy of the project, then
run the above script again. If you see any files listed under `Outdated`, then
you know that there have been modifications to source files since translations
were last completed. To know what changed, go through each file one by one and
run: `node other/what-changed.js {path/to/english/file.js} {locale}`. This will
show you the changes to that particular file since translations were last
completed and should give you the insight you need to update the existing
translations.

Another useful tip is to
[`watch`](https://help.github.com/articles/watching-repositories/)
[the GitHub repo](https://github.com/kentcdodds/glamorous-website)
for changes. This way, GitHub will notify you when pull requests are made
and you can keep up with any changes to content.

Thank you so much for your help! Now, please read the notes below!

## Important Markdown notes:

Because the **content and markdown is written in a JavaScript file** and uses
template literals, we use `~` rather than backticks (\`) because we don't want
to have to escape common things like codeblocks. We use `replace` to swap `~` to
a backtick so hopefully this is pretty straightforward.

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
