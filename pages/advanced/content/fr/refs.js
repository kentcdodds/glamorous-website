module.exports = {
  title: '`innerRef`',
  subtitle: 'How to access the underlying `ref`',
  description: `
    Sometimes you need access to the
    [~ref~](https://facebook.github.io/react/docs/refs-and-the-dom.html)
    of the underlying component that's rendered. You can accomplish this with
    the ~innerRef~ prop.

    This is a function and if provided, will be called with the inner element's
    reference.

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