module.exports = {
  title: 'Advanced Guides (Spanish)',
  heading: `
    This is some of the more advanced stuff you can do with glamorous
  `.replace(/~/g, '`'),
  sections: [require('./refs')].filter(mod => Boolean(mod.title)),
}
