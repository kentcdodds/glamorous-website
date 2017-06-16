module.exports = {
  title: 'Trabajando con CSS existente',
  description: `
    Muchas veces querrás usar ~glamorous~ dentro de un proyecto ya existente,
    que se encuentre usando CSS global. La API de ~glamorous~ intenta que trabajar
    en estos proyectos sea lo más fácil posible.

    ~~~callout {title: 'Recuerda esto', type: 'warning'}
    Con CSS en JS, el objetivo es estilar componentes y reusarlos. Con esto en
    mente, si necesitas estilar tu aplicación entera (usando selectores ~html~/~body~
    o añadiendo estilos de reseteo), no lo harás con ~glamorous~ directamente.
    En su lugar debes usar CSS regular, o usar la API de ~glamor~ para inyectar
    estos estilos de forma global.

    Adicionalmente, en lugar de usar CSS global para estilar un elemento ~a~,
    debes crear un componente ~Link~ con todos los estilos que necesites,
    y reusar este elemento alrededor de tu aplicación.
    ~~~

        // TODO
  `.replace(/~/g, '`'),
  filename: __filename,
}
