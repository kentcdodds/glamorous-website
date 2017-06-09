module.exports = {
  title: 'Advanced Guides',
  heading: `
    This is some of the more advanced stuff you can do with glamorous
  `.replace(/~/g, '`'),
  sections: [
    require('./refs'),
    require('./existing-css'),
    require('./theming'),
    require('./size'),
    require('./ssr'),
  ].filter(mod => Boolean(mod.title)),
}