module.exports = {
  title: 'Guías de avanzada',
  heading: `
    Se trata de algunas de las cosas más avanzadas que se puede hacer con glamour
  `.replace(/~/g, '`'),
  sections: [
    require('./refs'),
    require('./existing-css'),
    require('./theming'),
    require('./size'),
    require('./ssr'),
  ].filter(mod => Boolean(mod.title)),
}