module.exports = {
  title: 'API de `glamorous`',
  heading: '',
  sections: [
    require('./glamorous'),
    require('./glamorous-component-factory'),
    require('./typescript'),
  ].filter(mod => Boolean(mod.title)),
  contributorsTitle: 'Contributeurs:',
}
