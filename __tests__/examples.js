import React from 'react'
import {mount} from 'enzyme'
import {matcher, serializer} from 'jest-glamor-react'
import Examples from '../pages/examples'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('renders', () => {
  expect(() => mount(<Examples />)).not.toThrow()
})
