import React from 'react'
import {mount} from 'enzyme'
import Basics from '../pages/basics'

test('renders', () => {
  expect(() => mount(<Basics />)).not.toThrow()
})
