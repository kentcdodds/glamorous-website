---
title: Anfangen
subtitle: Mit `glamorous` beginnen
---

<a href="https://youtu.be/lmrQTpJ_3PM" title="glamorous walkthrough">
  <img src="https://github.com/paypal/glamorous/raw/master/other/glamorous-walkthrough.png" alt="Video-Screenshot" title="Video-Screenshot" width="700" />
</a>

Hier ist ein grundlegendes Beispiel, das Ihnen zeigt, wie man anfängt, mit `css-in-js` Magie zusammenzuarbeiten.

```interactive
const { Div } = glamorous

function App() {
  return (
    <Div
      fontSize={20}
      textAlign="center"
    >
      Hallo Glamorous!
    </Div>
  )
}

render(<App/>)
```
