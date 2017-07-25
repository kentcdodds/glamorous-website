import React from 'react'
import {mount} from 'enzyme'
import Examples from '../pages/examples'

test('renders', () => {
  expect(() => mount(<Examples />)).not.toThrow()
})
