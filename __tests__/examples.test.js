/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import Examples from '../pages/examples'

describe('Testing Examples', () => {
  it('Renders!', () => {
    const component = renderer.create(<Examples/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
