module.exports = {
  title: '`innerRef`',
  subtitle: 'Comment accéder au `ref`',
  description: `
    Parfois, vous avez besoin d'accéder au
    [~ref~](https://facebook.github.io/react/docs/refs-and-the-dom.html)
    du composant qui est rendu. Vous pouvez accomplir cela avec
    le prop ~innerRef~.

    C'est une fonction, et si elle est fournie, elle sera appelée avec la référence de l'élément
    intérieur.

    ~~~interactive {clickToRender: true, summary: 'Un ~input~ dans un ~form~'}
    const MyInput = glamorous.input({ borderRadius: 4, padding: '4px 8px' });

    class MyComponent extends React.Component {
      constructor() {
        this.alertValue = e => {
          e.preventDefault();
          alert(this._inputRef.value);
        };
      }
      render() {
        return (
          <form onSubmit={this.alertValue}>
            <MyInput innerRef={r => (this._inputRef = r)} />
            <glamorous.Button type="submit" marginTop={12} display="block">
              Envoyer
            </glamorous.Button>
          </form>
        );
      }
    }

    render(<MyComponent />)
    ~~~
  `.replace(/~/g, '`'),
  filename: __filename,
}
