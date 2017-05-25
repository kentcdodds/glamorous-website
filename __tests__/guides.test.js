/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import Guides from '../pages/guides'

describe('Testing Guides', () => {
  it('Renders!', () => {
    const component = renderer.create(<Guides/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
