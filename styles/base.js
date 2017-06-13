import {fonts, colors, mediaQueries} from '../styles/global-styles'

export default () => `
  * {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: ${fonts.sansserif};
    font-size: 16px;
    line-height: 1.5;
    color:  ${colors.darkGray};
    min-height: 100%;
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
  ${mediaQueries.largeUp} {
    html {
      font-size: 18px;
    }
  }

  body {
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
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${colors.primary}
  }

  a:hover {
    text-decoration: underline;
  }

  h1,
  h2,
  h3 {
    font-weight: bold;
    line-height: 1.25;
    text-rendering: optimizeLegibility;
    font-size: 2rem;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  pre {
    overflow-x: scroll;
    max-width: 100%;
    color: ${colors.white};
    background-color: ${colors.blue};
    padding: 10px;
    margin-bottom: 0.5rem;
  }

  pre code {
    background-color: initial;
    padding: initial;
    border-radius: initial;
    font-size: 1em;
  }

  code {
    background-color: #eee;
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 0.9em;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 5px solid ${colors.primaryMed}
  }
`
