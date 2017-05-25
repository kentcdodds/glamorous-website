/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'

describe('Testing Index', () => {
  it('Renders!', () => {
    const component = renderer.create(<Index/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
