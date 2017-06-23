module.exports = {
  title: 'Conceptos básicos',
  heading: `
    Una breve introducción a ~glamorous~
  `.replace(/~/g, '`'),
  sections: [
    require('./install'),
    require('./getting-started'),
    require('./core-concepts'),
    require('./dynamic-styles'),
    require('./animation'),
    require('./react-native'),
  ].filter(mod => Boolean(mod.title)),
}
