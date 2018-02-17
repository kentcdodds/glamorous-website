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
`content` directory where the localization files are. These are markdown files
and are `import`ed or `require`ed into the file that's using them. We have a
special babel plugin (`other/babel-plugin-l10n-loader.js`) that inlines the
right markdown file for the locale at compile-time.

For the `pages` content, you'll find that they have an `index.md` which starts
with some `YAML` at the top and has no other content. It's normally pretty
minimal just for the basic outline of the page. For example:

```md
---
title: The awesome title
heading: Some heading
note: >
  This is an optional note.
  Notice that I can do multiline
  by adding the `>` and indenting the lines.
---
```

> `note` and `heading` are optional.

For the sections of the page, that looks like this:

```md
---
title: The section title
subtitle: A subtitle for the section
codeSandboxId: 2k8yll8qj
contributors:
  - kentcdodds
  - santaclaus
---

The markdown content that will be rendered for the section goes here.
See below for some of the nifty things you can do with the markdown!
```

`codeSandboxId` is optional, but it can be nice to have a codeSandboxId for
people to play around with if you can't use an interactive example (see below).

## Translation

First off, thank you soooo much! Your efforts will enable many people to use
this project more effectively. It is important that you understand how things
are supposed to be structured for the files. The files you'll be translating
are *JavaScript*, so you'll need to make sure that you only translate the parts
that should be translated (in strings) and that the end result is valid JS.

### Adding a new language

To add a new language to the site, you need to make a few updates:

1. Add your locale code to the `config.json` file in `supportedLocales`.
2. Download the SVG for a flag that best represents that language from
   [flag-icon-css](https://github.com/lipis/flag-icon-css/tree/master/flags/4x3)
   and put it in `components/svgs/{LOCALE}.svg`
3. Import the svg into `components/locale-chooser.js` and add a reference to it
   in the `localeMap` in that file.

Make a PR for that. Once it's been merged you can start contributing
translations!

> You can look at [this PR](https://github.com/kentcdodds/glamorous-website/pull/259/files)
> for an example of how to do this.

### Code samples

Please don't translate code samples unless you're certain the code sample still
works.

### Workflow

We don't yet have things set up to work with a tool (hopefully soon!).
So we've got some tooling of our own to make your workflow as good
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

For the sections in the normal docs pages, you should be able to just go to the
website to find the sections that are out of date or missing (there will be a
note indicating that). But there are some translations files which don't have
a notice on the website. For those, this workflow can be helpful:

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
run: `node other/what-changed.js {path/to/english/file.md} {locale}`. This will
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

````md
```interactive
render(<button onClick={() => alert('Hello World')}>Hello World</button>)
```
````

This will render an interactive bit of code using the `CodePreview` component.

##### callout

> options and defaults: {type: 'info', title: undefined}

````md
```callout {type: 'danger', title: 'Footgun'}
You might be tempted to do x, but *don't*!

_markdown works in here_
```
````

This will render a highlighted note.

#### pragma options

With these pragmas you can also specify options. These come in the form of an
object literal immediately after the pragma like so:

````md
```interactive {clickToRender: true, summary: 'Alert hello world'}
render(<button onClick={() => alert('Hello World')}>Hello World</button>)
```
````

There may be more forms in the future, but right now this is all we have.
