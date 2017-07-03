module.exports = {
  title: 'Ejemplos de la comunidad',
  heading: `
    Si tienes un ejemplo de algo que has hecho con glamorous que realmente
    no ha sido tratado en una de las otras páginas, entonces no dude en
    abrir un pull request en esta página!
  `.replace(/~/g, '`'),
  sections: [require('./css-grid'), require('./style-overrides')],
}
