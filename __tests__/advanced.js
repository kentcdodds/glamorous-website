import React from 'react'
import {mount} from 'enzyme'
import Advanced from '../pages/advanced'

test('renders', () => {
  expect(() => mount(<Advanced />)).not.toThrow()
})
