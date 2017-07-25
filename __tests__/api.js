import React from 'react'
import {mount} from 'enzyme'
import Api from '../pages/api'

test('renders', () => {
  expect(() => mount(<Api />)).not.toThrow()
})
