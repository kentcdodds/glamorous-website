import React from 'react'
import {mount} from 'enzyme'
import {matcher, serializer} from 'jest-glamor-react'
import Basics from '../pages/basics'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

global.docsearch = jest.fn(() => {})

test('renders', () => {
  expect(() => mount(<Basics />)).not.toThrow()
})
