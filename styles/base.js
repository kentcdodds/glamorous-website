import {fonts, colors, mediaQueries} from '../styles/global-styles'

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
  ${mediaQueries.largeUp} {
    body {
      font-size: 18px;
    }
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
    overflow-x: scroll;
    max-width: 100%;
    color: ${colors.white};
    background-color: ${colors.blue};
    padding: 10px;
  }

  pre code {
    background-color: initial;
    padding: initial;
    border-radius: initial;
    font-size: 1em;
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
`
