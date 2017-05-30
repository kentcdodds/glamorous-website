import GlobalStyles from '../styles/global-styles'

export default () => `
  * {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: ${GlobalStyles.font.sansserif};
    font-size: 16px;
    line-height: 1.5;
    color:  ${GlobalStyles.colors.darkGray};
    min-height: 100%;
    margin: 0;
    padding: 0;
    min-height: 100%;
  }
  ${GlobalStyles.mediaQueries.largeUp} {
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
  }

  a {
    text-decoration: none;
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
`
