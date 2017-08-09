---
title: '`innerRef`'
subtitle: Как получить доступ к внутреннему свойству `ref`
---

Иногда бывает необходимо получить доступ к 
[`ref`](https://facebook.github.io/react/docs/refs-and-the-dom.html)
компонента, лежащего в основе вашего. Это возможно с помощью свойства
`innerRef`.

Это свойство принимает функцию, которая будет вызвана с ref'ом внутреннего
элемента в качестве аргумента.

```interactive {clickToRender: true, summary: 'Поле ввода в форме'}
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
          Отправить
        </glamorous.Button>
      </form>
    );
  }
}

render(<MyComponent />)
```
