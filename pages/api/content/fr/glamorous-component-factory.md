---
title: '`glamorousComponentFactory`'
---

Si vous en créez un vous-même ou utilisez l'un des éléments intégrés mentionnés ci-dessus, chaque `glamorousComponentFactory` vous permet de l'appeler avec des styles et vous renvoie un nouveau composant qui aura ces styles appliqués lors de son rendu. Ceci est réalisé par la génération d'un `className` pour les styles donnés et par le transfert du `className` sur l'élément rendu. Donc, si vous enveloppez un composant que vous avez l'intention de styliser, vous devez vous assurer que vous acceptez le `className` comme une prop et que vous l'appliquez à l'endroit où vous voulez que les styles soient appliqués dans votre composant personnalisé (normalement l'élément racine).

```js
const UnstyledComp = ({ className, children }) => <div className={`\${className} other-class`}>{children}</div>
const MyStyledComp = glamorous(UnstyledComp)({ margin: 1 })

<MyStyledComp>content</MyStyledComp>
// rendu : <div class="<glamor-generated-class> other-class">content</div>
// styles appliqués : {margin: 1}
```
##### ...styles

Le `glamorousComponentFactory` accepte n'importe quel nombre d'arguments d'objets de style. Ceux-ci peuvent être des objets de style ou des fonctions qui sont appelés avec des `props` sur tous ceux rendus et elles retournent des objets de style. Pour en savoir plus sur ces objets de style, regardez la documentation de [`glamor`](https://github.com/threepointone/glamor).

```js
const MyStyledDiv = glamorous.div(
  {
    margin: 1,
  },
  (props) => ({
    padding: props.noPadding ? 0 : 4,
  })
)

<MyStyledDiv /> // styles appliqués : {margin: 1, padding: 4}
<MyStyledDiv noPadding /> // styles appliqués : {margin: 1, padding: 0}
```

```callout {title: 'Astuce', type: 'info'}
Astuce : glamorous prend simplement ces objets de style et les transmet à `glamor`.
Ensuite, `glamor` les fusionnera ensemble comme vous le souhaitez. Une bonne pratique
que vous pouvez faire, c'est de spécifier un tableau d'objets de style et `glamor` le traitera
exactement de la même façon. C'est plus expressif ! Consultez les [exemples][/examples/]
pour voir comment cela fonctionne.
```

Vous pouvez également spécifier d'autres classes que vous souhaitez appliquer au composant. Si ces classes sont générées par glamor, leurs styles seront fusionnés avec le style de glamor, sinon le nom de la classe sera simplement transmis. Par exemple :

```javascript
const className1 = glamor.css({paddingTop: 1, paddingRight: 1}).toString()
const styles2 = {paddingRight: 2, paddingBottom: 2}
const className3 = glamor.css({paddingBottom: 3, paddingLeft: 3}).toString()
const styles4 = {paddingLeft: 4}
const styles5 = props => (props.active ? 'active' : 'not-active')
const MyStyledDiv = glamorous.div(
  className1,
  styles2,
  className3,
  styles4,
  styles5,
  'extra-thing',
)
<MyStyledDiv /> // styles appliqués : {padding-top: 1, padding-right: 2, padding-bottom: 3, padding-left: 4}, 'not-active' et tout ce qui vient de `extra-thing`.
```
