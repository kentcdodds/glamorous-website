module.exports = {
  title: 'Integrations',
  heading: `
    Integrating things with ~glamorous~
  `.replace(/~/g, '`'),
  sections: [
    require('./create-react-app'),
    require('./glamor'),
    require('./jest'),
    require('./next'),
    require('./polished'),
    require('./recompose'),
  ].filter(mod => Boolean(mod.title)),
}
