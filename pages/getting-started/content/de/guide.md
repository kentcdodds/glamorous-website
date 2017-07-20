# Hallo 👋

Wir werden dir `glamorous` beibringen, indem du das Tuturial bearbeitest,
welches du gerade liest 😱

Um anzufangen haben wir links bereits ein paar Komponenten für dich bereitgestellt,
also musst du nur deren Stile anpassen, um die Art und Weise zu verändern,
wie dieser Guide aussieht und sich bewegt.

## Grundstile

Lass uns anfangen indem wir die Überschriften auf dieser Seite verschönern.
Mit `glamorous` nutzen wir normale JavaScript Objekte anstatt der regulären
CSS-Syntax mit der du vielleicht vertraut bist.

Ändere das `Heading` hierzu:

```js
const Heading = glamorous.h1({
  fontSize: '2.4em',
  marginTop: 10,
  color: '#CC3A4B',
})
```

## Media Queries

Wir wollen die Überschriften schrumpfen lassen, wenn der
Darstellungsbereich schmaler wird (wie auf mobilen Endgeräten).

Aktualisiere das `Heading` zu:

```js
const Heading = glamorous.h1({
  fontSize: '2.4em',
  marginTop: 10,
  color: '#CC3A4B',
  [mediaQueries.phone]: {
    fontSize: '1.8em',
    backgroundColor: '#CC3A4B',
    color: 'white'
  },
})
```

Ändere jetzt die Browsergröße, um die Änderungen zu sehen.

## Pseudo-Klassen

Hier haben wir einen [Link](https://www.youtube.com/watch?v=dQw4w9WgXcQ).
Lass uns seine Pseudo-Klassen wie `active`, `visited` und `hover` anpassen.

Aktualisiere den `Link` zu:

```js
const Link = glamorous.a({
  ':visited': {
    color: 'darkblue',
  },
  ':hover,:active,:focus': {
    color: 'darkred',
  },
})
```

_Hast du diesen Link schon mal besucht? 😈_

## Pseudo-Elemente

- dies
- ist
- eine
- Liste

Let's change how the list items are rendered here using pseudo elements.

```js
const ListItem = glamorous.li({
  ':before': {
    content: '"💎"',
  }
})
```

> NOTE! It's really common to forget that in CSS, the `content` property is
> wrapped in quotes. Even though you're technically doing this because you set
> `content` to a string, that string needs to include the quotes that will be
> inserted into the CSS stylesheet.

## Dynamic Styles

You can provide a function as an argument to a `glamorousComponentFactory` (by
the way, that's what `glamorous.h1` is called). This function will be called
with `props`.

The `CodeBlock` component receives the `language` as a prop. Here's code block
that is `html`:

```html
<html>
<head>
  <title>Hello world!</title>
</head>
<body>
  Hello world!
</body>
</html>
```

Let's change the styles for `html` code blocks:

```js
const CodeBlock = glamorous.pre(props => {
  const isHTML = props.language === 'html'
  if (isHTML) {
    return {
      padding: 20,
      backgroundColor: '#0c1e35',
    }
  }
})
```

## Merging Styles

`glamorous` uses [`glamor`](https://github.com/threepointone/glamor) under the
hood to generate and insert the CSS you write. One of the cool features of
`glamor` is how composable it is. So with `glamorousComponentFactory` functions,
(like `glamorous.pre`) you can provide any number of arguments and the styles
will be merged. In addition, you can also provide arrays or return arrays for
dynamic styles and those will also be merged (where the last one wins in the
event of a conflict). Let's try some of that out now:

Update `CodeBlock` to look like this:

```js
const CodeBlock = glamorous.pre({
  position: 'relative',
  padding: 20,
  ':before': {
    position: 'absolute',
    top: '0',
    opacity: '0.6',
    left: '7px',
    fontSize: '0.8rem',
  },
}, props => {
  const isHTML = props.language === 'html'
  let styles = [
    {
      ':before': {
        content: `"${props.language}"`,
      }
    }
  ]
  if (isHTML) {
    styles.push({
      backgroundColor: '#0c1e35',
    })
  }
  // returning an array here.
  return styles
})
```

## That's it!

That's all we have for now, but if you'd like to help with this guide that'd be
super! Please check out [the GitHub repo!](https://github.com/kentcdodds/glamorous-website)
