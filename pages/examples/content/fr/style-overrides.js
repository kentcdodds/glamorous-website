module.exports = {
  title: 'Accepter les remplacements de style',
  subtitle:
    'Comment exposer une API pour remplacer les styles dans un composant',
  description: `
    Ceci montre une façon de prendre un composant réutilisable et d'exposer un
    mécanisme de remplacement de styles pour les composants au sein du composant
    à l'aide d'une prop appelée ~styleOverrides~.
    
    La partie fondamentale ici, c'est le passage de ~styleOverrides~ à la prop ~theme~
    du ~ThemeProvider~ de glamorous. Comme vous pouvez encore avoir besoin d'utiliser la
    ~theme~ pour autres choses, c'est très agréable de les nommer (comme l'illustre cet exemple).

    Ensuite, vous pouvez écrire une petite fonction d'aide (~getStyleOverrides~) to make
    pour ajouter cette fonctionnalité de substitution à chacun de vos composants glamorous.
     Il fonctionne même avec la prop ~css~ !
  `.replace(/~/g, '`'),
  codeSandboxId: 'ERNVNoxEv',
  filename: __filename,
}
