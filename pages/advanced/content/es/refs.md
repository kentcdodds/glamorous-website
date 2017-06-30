---
title: Ref interior
subtitle: Cómo acceder el `ref` interno
---

Algunas veces necesitarás acceso al
[`ref`](https://facebook.github.io/react/docs/refs-and-the-dom.html)
del componente interior del que `glamorous` renderiza. Puedes lograr esto
con la prop `innerRef`.

Esta prop debe ser una función, y si es proveída debe ser llamada con
una referencia al elemento interior.

```interactive {clickToRender: true, summary: 'Un elemento input dentro de un form'}
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
```
