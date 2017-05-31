/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Guides from '../pages/guides'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('Testing Guides', () => {
  it('Renders!', () => {
    const component = renderer.create(<Guides/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
