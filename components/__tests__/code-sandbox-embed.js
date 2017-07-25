import React from 'react'
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import CodeSandboxEmbed from '../code-sandbox-embed'

test('renders', () => {
  expect(toJson(mount(<CodeSandboxEmbed />))).toMatchSnapshot()
})
