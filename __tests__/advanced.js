import React from 'react'
import {mount} from 'enzyme'
import {matcher, serializer} from 'jest-glamor-react'
import Advanced from '../pages/advanced'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('renders', () => {
  expect(() => mount(<Advanced />)).not.toThrow()
})
