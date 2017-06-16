module.exports = {
  title: 'Guías avanzadas',
  heading: `
    Esta sección expone algunas ideas más avanzadas que puedes lograr con glamorous
  `.replace(/~/g, '`'),
  sections: [
    require('./refs'),
    require('./existing-css'),
    require('./theming'),
    require('./size'),
    require('./ssr'),
  ].filter(mod => Boolean(mod.title)),
  contributors: ['kentcdodds', 'paulmolluzzo', 'tdeschryver', 'anthony2025'],
}
