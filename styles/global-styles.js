// Inspired by http://foundation.zurb.com/sites/docs/media-queries.html
import * as polished from 'polished'

const smallBreakpoint = 480
const mediumBreakpoint = 1024
const largeBreakpoint = 1224

const [, upperSmallRange] = [0, smallBreakpoint]
const [lowerMediumRange, upperMediumRange] = [
  smallBreakpoint + 1,
  mediumBreakpoint,
]
const [lowerLargeRange, upperLargeRange] = [
  mediumBreakpoint + 1,
  largeBreakpoint,
]

const screen = 'only screen'
const statusColors = {
  danger: '#d9534f',
  info: '#5bc0de',
  warning: '#f0ad4e',
  success: '#50af51',
}
Object.assign(statusColors, {
  dangerLight: polished.lighten(0.35, statusColors.danger),
  infoLight: polished.lighten(0.31, statusColors.info),
  warningLight: polished.lighten(0.31, statusColors.warning),
  successLight: polished.lighten(0.37, statusColors.success),
})

export const colors = {
  primary: '#DA233C',
  primaryMed: '#CC3A4B',
  primaryLight: '#FFF2F2',
  secondary: '#BD3D90',
  faded: '#B2C1C0',
  white: '#fff',
  blue: '#28384e',
  purple: '#fe0072',
  lightGray: '#f7f7f7',
  gray: '#cccccc',
  medGray: '#777',
  darkGray: '#333',
  code: '#4F4F4F',
  black: '#000',
  ...statusColors,
}

export const fonts = {
  sansserif: '"Montserrat", sans-serif',
  glamorous: '"Playfair Display, serif"',
  monospace: 'monospace',
}

export const mediaQueries = {
  smallUp: `@media ${screen}`,
  smallOnly: `@media ${screen} and (max-width: ${upperSmallRange}px)`,
  mediumUp: `@media ${screen} and (min-width: ${lowerMediumRange}px)`,
  mediumOnly: `@media ${screen} and (min-width: ${lowerMediumRange}px and (min-width: ${upperMediumRange}px)`,
  largeUp: `@media ${screen} and (min-width: ${lowerLargeRange}px)`,
  largeOnly: `@media ${screen} and (min-width: ${lowerLargeRange}px and (min-width: ${upperLargeRange}px)`,
}

export default {fonts, colors, mediaQueries}
