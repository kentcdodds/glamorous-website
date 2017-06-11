import glamorous from 'glamorous'

const MarkdownWrapper = glamorous.div((props, {colors}) => ({
  margin: '20px auto 0',
  width: '100%',
  padding: '1rem',
  backgroundColor: colors.white,
  '& > div': {maxWidth: '50rem', margin: '0 auto'},
  '& img:not([src*="img.badgesize.io"])': {width: '100%'}, // exclude images with a source at img.badgesize.io
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
}))

export default MarkdownWrapper
