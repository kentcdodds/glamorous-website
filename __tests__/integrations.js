import React from 'react'
import {mount} from 'enzyme'
import {matcher, serializer} from 'jest-glamor-react'
import Integrations from '../pages/integrations'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

global.docsearch = jest.fn(() => {})

test('renders', () => {
  expect(() => mount(<Integrations />)).not.toThrow()
})
