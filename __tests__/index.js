import React from 'react'
import {mount} from 'enzyme'
import Index from '../pages/index'

test('renders', () => {
  expect(() => mount(<Index />)).not.toThrow()
})
