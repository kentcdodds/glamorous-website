//@flow

export default stripIndent

/*
 * This was copied from http://npm.im/strip-indent
 */
function stripIndent(str: string): string {
  const match: Array<string> | null | void = str.match(/^[ \t]*(?=\S)/gm)

  if (!match) {
    return str
  }

  const indent: number = Math.min(
    ...match.map((x: string): number => {
      return x.length
    }),
  )
  const re: RegExp = new RegExp(`^[ \\t]{${indent}}`, 'gm')

  return indent > 0 ? str.replace(re, '') : str
}
