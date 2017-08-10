---
title: Работа с текущим CSS
contributors:
  - kentcdodds
---

Часто вам придется внедрять `glamorous` на действующем проекте, который
уже использует глобальный CSS. API `glamorous` позволяет сделать
это без лишних усилий.

`glamorous` также работает с CSS модулями без дополнительных усилий с вашей
стороны. Это Просто Работает™.

Вот пример с использованием [Bootstrap](https://getbootstrap.com):

```jsx
// source https://v4-alpha.getbootstrap.com/components/alerts/

import React from 'react';
import { render } from 'react-dom';
import glamorous from 'glamorous';

const Alert = glamorous.div('alert', props => `alert-${props.type}`);

function App() {
  return (
    <glamorous.Div maxWidth={600} margin="70px auto" fontSize={24}>
      <Alert type="success">
        <strong>Успех!</strong> Тада! 🎉
      </Alert>
      <Alert type="info">
        <strong>Оповещение!</strong> Кое-какая информация ℹ️
      </Alert>
      <Alert type="warning">
        <strong>Внимание!</strong> Что-то случилось ⚠️
      </Alert>

      <Alert type="danger">
        <strong>Ох блин!</strong> Это совсем не хорошо 🚨
      </Alert>
    </glamorous.Div>
  );
}

render(<App />, document.getElementById('root'));
```

> Попробуйте это в своем браузере [здесь](https://codesandbox.io/s/73W7nZ6BQ)!

Если \<Alert success \/\> вам больше по душе, чем \<Alert type="success" \/\>, то
этого просто добиться:

```jsx
// source https://v4-alpha.getbootstrap.com/components/alerts/

import React from 'react';
import { render } from 'react-dom';
import glamorous from 'glamorous';

const Alert = glamorous.div('alert', props => {
  const types = ['success', 'info', 'warning', 'danger'];
  return types.reduce((all, t) => {
    if (props.hasOwnProperty(t)) {
      all = `${all} alert-${t}`;
    }
    return all;
  }, '');
});

function App() {
  return (
    <glamorous.Div maxWidth={600} margin="70px auto" fontSize={24}>
      <Alert success>
        <strong>Успех!</strong> Тада! 🎉
      </Alert>
      <Alert info>
        <strong>Оповещение!</strong> Кое-какая информация ℹ️
      </Alert>
      <Alert warning>
        <strong>Внимание!</strong> Что-то случилось ⚠️
      </Alert>
      <Alert danger>
        <strong>Ох блин!</strong> Это совсем не хорошо 🚨
      </Alert>
    </glamorous.Div>
  );
}

render(<App />, document.getElementById('root'));
```

> Попробуйте это в своем браузере [здесь](https://codesandbox.io/s/mwVv89V5O)!

```callout {title: 'Запомните', type: 'warning'}
Главная цель CSS в JS - это стилизация компонентов и их повторное
использование. Соответсвтенно, если вам нужно добавить стили всему приложению
в целом (например, `html`/`body` или добавить `reset` стили),
не стоит использовать для этого `glamorous`. Вместо этого, используйте обычный
CSS или API glamor для внедрения глобальных стилей.

В дополнение, вместо того, чтобы использовать CSS для стилизации тега `a`
с помощью глобального CSS, стоит создать компонент `Link`, присвоить ему все
необходимые стили и использовать его.
```
