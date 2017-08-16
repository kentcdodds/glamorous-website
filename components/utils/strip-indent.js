export default stripIndent

/*
 * This was copied from http://npm.im/strip-indent
 */
function stripIndent(str) {
  const match = str.match(/^[ \t]*(?=\S)/gm)

  if (!match) {
    return str
  }

  const indent = Math.min(
    ...match.map(x => {
      return x.length
    }),
  )
  const re = new RegExp(`^[ \\t]{${indent}}`, 'gm')

  return indent > 0 ? str.replace(re, '') : str
}
