---
title: '[`recompose`](https://github.com/acdlite/recompose)'
codeSandboxId: Woywqpzv
contributors:
  - kentcdodds
---

`glamorous` creates simple components, if you'd like to enhance these components
further, you can do so easily by wrapping them in a component yourself:

```interactive {clickToRender: true, summary: 'Example of wrapping a glamorous component'}
const Anchor = glamorous.a(props => ({
  color: props.dark ? 'darkblue' : 'blue',
}))

const DarkAnchor = props => <Anchor {...props} dark={true} />

render(
  <div>
    <Anchor href="#">Normal Anchor</Anchor>
    <br />
    <DarkAnchor href="#">Dark Anchor</DarkAnchor>
  </div>
)
```

If that's a bit too much of a song and dance for you, then you might consider
using [`recompose`](https://github.com/acdlite/recompose).
