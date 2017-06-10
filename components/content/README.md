# components/content

Here's an example of how these files should work.

Assuming we have a component file called `my-component.js`, the component
should do something like:

```javascript
import React from 'react'
import {withContent} from './locale'

// the `component` value here should be the name of the file
// and is used when resolving the content file.
export default withContent({component: 'my-component'}, MyComponent)

function MyComponent({content}) {
  return (
    <div>{content.translationKey}</div>
  )
}
```

With that, there should be a file in `content` called `my-component.js` with
the contents:

```javascript
module.exports = {
  translationKey: 'Translation String',
}
```
