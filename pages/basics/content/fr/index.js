module.exports = {
  title: 'Basic Concepts',
  heading: `
    A brief introduction to ~glamorous~
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