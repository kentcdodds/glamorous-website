import remark from 'remark'
import remarkHtml from 'remark-html'
import stripIndent from './strip-indent'

export default mdToHTML

function mdToHTML(md) {
  return remark().use(remarkHtml).processSync(stripIndent(md)).toString()
}
