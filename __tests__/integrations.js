import React from 'react'
import {mount} from 'enzyme'
import Integrations from '../pages/integrations'

test('renders', () => {
  expect(() => mount(<Integrations />)).not.toThrow()
})
