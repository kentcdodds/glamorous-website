/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Docs from '../pages/docs'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('Testing Docs', () => {
  it('Renders!', () => {
    const component = renderer.create(<Docs/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
