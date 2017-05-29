/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Index from '../pages/index'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('Testing Index', () => {
  it('Renders!', () => {
    const component = renderer.create(<Index/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshotWithGlamor()
  })
})
