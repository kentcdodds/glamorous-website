/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import Docs from '../pages/docs'

describe('Testing Docs', () => {
  it('Renders!', () => {
    const component = renderer.create(<Docs/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
