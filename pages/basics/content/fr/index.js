module.exports = {
  title: 'Concepts de base',
  heading: `
    Une brève introduction à ~glamorous~
  `.replace(/~/g, '`'),
  sections: [
    require('./install'),
    require('./getting-started'),
    require('./core-concepts'),
    require('./dynamic-styles'),
    require('./animation'),
    require('./react-native'),
  ].filter(mod => Boolean(mod.title)),
  contributorsTitle: 'Contributeurs:',
}
