import React from 'react'
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import {matcher, serializer} from 'jest-glamor-react'
import interactiveMarkdown from '../interactive-markdown'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

function flushAllPromises() {
  return new Promise(resolve => setTimeout(resolve, 200))
}

test('parses interactive pragmas into CodePreviews', async () => {
  const markdown = getMarkdownWithPragma('interactive', {
    clickToRender: true,
    summary: 'I am the summary',
  })
  const elements = interactiveMarkdown(markdown)
  const wrapper = mount(<div>{elements}</div>)
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
  wrapper.find('details').simulate('click')
  wrapper.find('details').first().node.open = true
  await flushAllPromises()
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
})

test('parses JavaScript pragmas into syntax highlighted static code blocks', () => {
  const markdown = getMarkdownWithPragma('js')
  const elements = interactiveMarkdown(markdown)
  const wrapper = mount(<div>{elements}</div>)
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
})

test('parses shell pragmas into syntax highlighted static code blocks', () => {
  const markdown = getMarkdownWithPragma('sh')
  const elements = interactiveMarkdown(markdown)
  const wrapper = mount(<div>{elements}</div>)
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
})

test('parses HTML pragmas into syntax highlighted static code blocks', () => {
  const markdown = getMarkdownWithPragma('sh')
  const elements = interactiveMarkdown(markdown)
  const wrapper = mount(<div>{elements}</div>)
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
})

function getMarkdownWithPragma(pragma, options) {
  return `
    # hello world

    I am some content
    ~~~${pragma} ${JSON.stringify(options)}
    render(<button onClick={() => alert('Hello World')}>Hello World</button>)
    ~~~

    I am some more content
  `
}
