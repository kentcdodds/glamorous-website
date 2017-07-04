// @flow

import remark from 'remark'
import remarkHtml from 'remark-html'
import stripIndent from './strip-indent'

export default mdToHTML
export {mdToHTMLUnwrapped}

function mdToHTML(md: string | null): string {
  if (!md) {
    return ''
  }
  return remark().use(remarkHtml).processSync(stripIndent(md)).toString()
}

function mdToHTMLUnwrapped(md: string | null): string {
  return mdToHTML(md).slice(3, -5)
}
