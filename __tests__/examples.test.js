/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Examples from '../pages/examples'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('Testing Examples', () => {
  it('Renders!', () => {
    const component = renderer.create(<Examples/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
