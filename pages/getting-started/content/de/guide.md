# Hallo 👋

Wir werden dir `glamorous` beibringen, indem du das Tuturial bearbeitest,
welches du gerade liest 😱

Um anzufangen haben wir links bereits ein paar Komponenten für dich bereitgestellt,
also musst du nur deren Stile anpassen, um die Art und Weise zu verändern,
wie dieser Guide aussieht und sich bewegt.

## Grundstile

Lass uns anfangen indem wir die Überschriften auf dieser Seite verschönern.
Mit `glamorous` nutzen wir normale JavaScript Objekte anstatt der regulären
CSS-Syntax, mit der du vielleicht vertraut bist.

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

Nun verändern wir, wie die Einträge gerendert werden,
indem wir die Pseudo-Elemente anpassen.

```js
const ListItem = glamorous.li({
  ':before': {
    content: '"💎"',
  }
})
```

> Anmerkung! In CSS vergisst man häufig, dass die `content`-Eigenschaft von
> Anführungszeichen umschlossen wird. Obwohl man dies eigentlich tut, weil
> man `content` einen String zuweist, muss dieser die Anführungszeichen
> enthalten, welche in das CSS eingefügt werden.

## Dynamische Stile

Du kannst eine Funktion als Argument an eine `glamorousComponentFactory` übergeben.
(So heißt übrigens `glamorous.h1`). Diese Funktion wird mit `props` aufgerufen.

Die `CodeBlock`-Komponente erhält die `language` als prop. Hier ist der Codeblock
als `html`:

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

Nun lass uns das Aussehen von `html` Codeblöcken verändern:

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

  ## Stile verbinden

`glamorous` benutzt [`glamor`](https://github.com/threepointone/glamor),
um das CSS zu generieren und einzufügen, welches du schreibst. Eins der tollen
Eigenschaften von `glamor` ist die Zusammensetzbarkeit. Also kannst du mit
`glamorousComponentFactory`-Funktionen (wie beispielsweise `glamorous.pre`)
beliebig viele Argumente übergeben und die Stile werden kombiniert.
Zusätzlich kannst du für dynamische Stile Arrays übergeben oder zurückgeben,
welche ebenfalls zusammengefügt werden (wobei im Falle eines Konflikts der
letztere gewinnt). Probieren wir einiges davon mal aus:

Ändere `CodeBlock` hierzu:

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
  // Hier wird ein Array zurückgegeben.
  return styles
})
```

## Das war's!

Das ist alles, was wir bis jetzt haben, aber wenn du zu diesem Guide beitragen möchtest,
wäre das super! Schau dir doch dazu [das GitHub Projekt](https://github.com/kentcdodds/glamorous-website) an.
