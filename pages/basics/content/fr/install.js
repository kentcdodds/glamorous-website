module.exports = {
  title: 'Installation',
  subtitle: 'Quelque chose',
  description: `
    Ce module est distribué via [npm](https://www.npmjs.com/) qui est empaqueté avec [node](https://nodejs.org) et doit être installé comme une dépendances (~dependencies~) de votre projet :

    ~~~js
    npm install --save glamorous
    ~~~

    Il dépend aussi de ~react~ et ~glamor~ donc vous aurez aussi besoin d'eux dans votre projet (si vous ne les possédez pas déjà) :

    ~~~js
    npm install --save react glamor
    ~~~

    > REMARQUE : Si vous utilisez React v15.5 ou une version supérieure, vous aurez également besoin de
    > ~prop-types~ : ~npm install --save prop-types~

    Vous pouvez ensuite utiliser l'un des formats du module :

    - ~main~: ~dist/glamorous.cjs.js~ - s'exporte en tant que module CommonJS
    - ~global~: ~dist/glamorous.umd.js~ et ~dist/glamorous.umd.min.js~ - s'exporte en tant que module umd qui est consommable dans plusieurs environnements, le plus significatif de manière globale.
    - ~jsnext:main~ et le module : ~dist/glamorous.es.js~ - s'exporte en utilisant la spécification des modules ES, vous aurez besoin de configurer webpack pour faire usage de ce fichier, faites-le en utilisant la propriété resolve.mainFields.

    Le cas d'utilisation le plus courant consomme ce module via CommonJS :

    ~~~js
    const glamorous = require('glamorous')
    const {ThemeProvider} = glamorous
    // etc.
    ~~~

    Si vous transpilez (et/ou en utilisant le jsnext:main) :

    ~~~js
    import glamorous, {ThemeProvider} from 'glamorous'

    // vous pouvez aussi importer les composants spécifiques de Glamorous (Voir la section ci-dessous sur les composants "intégrés")
    import {Div, H2} from 'glamorous'

    // les balises avec un nom identique à un objet JavaScript intégrés sont importable avec un suffixe Tag
    // et les noms de balise qui contiennent des tirets sont transformés en CamelCase
    import {MapTag, ColorProfile} from 'glamorous'
    ~~~

    Si vous voulez l'utiliser de manière globale :

    ~~~js
    <!-- Charge les dépendances -->
    <script src="https://unpkg.com/react/dist/react.js"></script>
    <script src="https://unpkg.com/prop-types/prop-types.js"></script>
    <script src="https://unpkg.com/glamor/umd/index.js"></script>
    <!-- Charge la bibliothèque -->
    <script src="https://unpkg.com/glamorous/dist/glamorous.umd.js"></script>
    <script>
    // Utilisez window.glamorous ici ...
    const glamorous = window.glamorous
    const {ThemeProvider} = glamorous
    </script>
    ~~~
  `.replace(/~/g, '`'),
  filename: __filename,
}
