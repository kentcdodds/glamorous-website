---
title: '[`styled-system`](https://github.com/jxnblk/styled-system)'
codeSandboxId: mNEBG3OR
contributors:
  - kentcdodds
---
`glamorous` works with `styled-system` helper functions.

```interactive {summary: 'Interactive demo', clickToRender: true} // assuming import * as styledSystem from 'styled-system' // normally you'd just do import { space, width, fontSize } from 'styled-system' const { space, width, fontSize } = styledSystem

const Box = glamorous.div(space, width, fontSize) render( <glamorous.Div maxWidth={600} margin="auto"> <box width={1 / 2}>width: 50%</box> <box fontsize={4}>font-size: 20px</box> <box m={2}>margin: 16px</box> <box p={3}>padding: 32px</box> <box width={[1, 1 >responsive width</box> <box fontsize={[2, 3, 4]}>responsive font-size</box> <box m={[1, 2, 3]}>responsive margin</box> <box p={[1, 2, 3]}>responsive padding</box> </glamorous.Div> ) ```