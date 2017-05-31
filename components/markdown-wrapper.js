import glamorous from 'glamorous'
import {colors} from '../styles/global-styles'

const MarkdownWrapper = glamorous.div({
  margin: '20px auto',
  width: '100%',
  maxWidth: '50rem',
  padding: '0 1rem',
  '& img': {width: '100%'},
  '& pre, & code': {backgroundColor: '#eee', fontSize: '1rem'},
  '& pre': {padding: '1rem', overflowX: 'scroll'},
  '& a': {textDecoration: 'none', color: colors.primary},
  '& p, & li': {lineHeight: '2rem'},
  '& p code, & li code, & blockquote code': {
    padding: '.3rem',
    borderRadius: '.3rem',
  },
  '& blockquote': {
    margin: '1rem 0',
    padding: '0 1rem',
    color: '#666',
    borderLeft: '6px solid #ddd',
  },
})

export default MarkdownWrapper
