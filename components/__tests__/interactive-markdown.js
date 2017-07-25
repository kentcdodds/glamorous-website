import React from 'react'
import {mount} from 'enzyme'
import interactiveMarkdown from '../interactive-markdown'

function flushAllPromises() {
  return new Promise(resolve => setTimeout(resolve, 200))
}

test('parses interactive pragmas into CodePreviews', async() => {
  const markdown = `
    # hello world

    I am some content
    ~~~interactive {clickToRender: true, summary: 'I am the summary'}
    render(<button onClick={() => alert('Hello World')}>Hello World</button>)
    ~~~

    I am some more content
  `
  const elements = interactiveMarkdown(markdown)
  const wrapper = mount(
    <div>
      {elements}
    </div>,
  )
  expect(wrapper).toMatchSnapshot()
  wrapper.find('details').simulate('click')
  wrapper.find('details').first().node.open = true
  await flushAllPromises()
  expect(wrapper).toMatchSnapshot()
})
