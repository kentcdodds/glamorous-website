import {fonts, colors} from '../styles/global-styles'

export default () => `
  * {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  html {
    min-height: 100%;
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: ${fonts.sansserif};
    font-weight: 100;
    font-size: 16px;
    color:  ${colors.darkGray};
    line-height: 1.5em;
    -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  p {
    margin-bottom: 24px;
  }

  a {
    text-decoration: none;
    color: ${colors.primary}
  }

  a:hover {
    text-decoration: underline;
  }

  h1 { font-size: 3.998em; }
  h2 { font-size: 2.827em; }
  h3 { font-size: 1.999em; }
  h4 { font-size: 1.414em; }
  h5 { font-size: 1em; }
  h6 { font-size: 1em; }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  code,
  ul,
  ol {
    margin: 0 0 1.5rem 0;
  }

  h1,
  h2,
  h3 {
    text-rendering: optimizeLegibility;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 2em;
  }

  li {
    margin-bottom: 10px;
  }

  li:before {
    content: "💋";
    margin-right: 10px;
    color: ${colors.primaryMed};
  }

  pre {
    overflow-x: hidden;
    white-space: pre-wrap;
    max-width: 100%;
    color: ${colors.white};
    background-color: ${colors.blue};
    padding: 10px;
  }

  pre code {
    background-color: initial;
    padding: initial;
    border-radius: initial;
    font-size: 0.85em;
  }

  code {
    background-color: #f6f6f6;
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 0.9em;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 5px solid ${colors.primaryMed}
  }

  button {
    font-family: ${fonts.sansserif}
  }

  /* prism CSS */
  /* "borrowed" from react-live */
  /* to be used by our code blocks */
  .prism-code {
    display: block;
    white-space: pre;

    background-color: #1D1F21;
    color: #C5C8C6;

    padding: 0.5rem;
    margin: 0;

    box-sizing: border-box;
    vertical-align: baseline;
    outline: none;
    text-shadow: none;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    word-wrap: normal;
    word-break: normal;
    text-align: left;
    word-spacing: normal;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }

  .token.punctuation {
    opacity: .7;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: hsl(350, 40%, 70%);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: hsl(75, 70%, 60%);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: hsl(40, 90%, 60%);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: hsl(350, 40%, 70%);
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }
`
