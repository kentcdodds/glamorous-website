module.exports = {
  title: '`innerRef`',
  subtítulo: 'Cómo accede el subyacente `ref`',
  description: `
    A veces usted necesita el acceso a la
    [~ref~](https://facebook.github.io/react/docs/refs-and-the-dom.html)
    del componente subyacente se representa. Usted puede lograr esto con
    la ~innerRef~ prop.

    Esta es una función y se llamará siempre que, con el elemento interno
    referencia.

    ~~~interactive {clickToRender: true, summary: 'An input in a form'}
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
              Submit
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