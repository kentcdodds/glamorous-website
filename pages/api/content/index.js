module.exports = {
  title: '`glamorous` API',
  heading: '',
  sections: [
    require('./glamorous'),
    require('./glamorous-component-factory'),
    require('./typescript'),
  ].filter(mod => Boolean(mod.title)),
}
