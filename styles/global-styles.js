// Inspired by http://foundation.zurb.com/sites/docs/media-queries.html

const smallBreakpoint = 480
const mediumBreakpoint = 1024
const largeBreakpoint = 1224

const [, upperSmallRange] = [0, smallBreakpoint]
const [lowerMediumRange, upperMediumRange] = [smallBreakpoint + 1, mediumBreakpoint]
const [lowerLargeRange, upperLargeRange] = [mediumBreakpoint + 1, largeBreakpoint]

const screen = 'only screen'

export default {
  font: {
    sansserif: '"Montserrat", sans-serif',
    glamorous: '"Playfair Display, serif"'
  },
  colors: {
    primary: '#FD8180',
    primaryLight: '#FFEFEF',
    secondary: '#BD3D90',
    faded: '#B2C1C0',
    white: '#fff',
    blue: '#00c3db',
    purple: '#fe0072',
    lightGray: '#f7f7f7',
    gray: '#cccccc',
    medGray: '#777',
    darkGray: '#333',
    black: '#000'
  },
  mediaQueries: {
    smallUp: `@media ${screen}`,
    smallOnly: `@media ${screen} and (max-width: ${upperSmallRange}px)`,

    mediumUp: `@media ${screen} and (min-width: ${lowerMediumRange}px)`,
    mediumOnly: `@media ${screen} and (min-width: ${lowerMediumRange}px and (min-width: ${upperMediumRange}px)`,

    largeUp: `@media ${screen} and (min-width: ${lowerLargeRange}px)`,
    largeOnly: `@media ${screen} and (min-width: ${lowerLargeRange}px and (min-width: ${upperLargeRange}px)`
  }
}
