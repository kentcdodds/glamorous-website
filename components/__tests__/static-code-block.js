import React from 'react'
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import staticCodeBlock from '../static-code-block'

test('renders HTML code block string with the pragma language classname', () => {
  const elements = staticCodeBlock({
    code: '<span>// some code</span>',
    language: 'javascript',
  })
  const wrapper = mount(<div>{elements}</div>)
  expect(toJson(wrapper)).toMatchSnapshot()
})
