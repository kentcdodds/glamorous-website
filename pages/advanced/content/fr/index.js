module.exports = {
  title: 'Guides avancés',
  heading: `
    Voici quelques-unes des choses les plus avancées que vous pouvez faire avec glamorous
  `.replace(/~/g, '`'),
  sections: [
    require('./refs'),
    require('./existing-css'),
    require('./theming'),
    require('./size'),
    require('./ssr'),
  ].filter(mod => Boolean(mod.title)),
  contributorsTitle: 'Contributeurs:',
  contributors: ['forresst', 'Macxim'],
}
