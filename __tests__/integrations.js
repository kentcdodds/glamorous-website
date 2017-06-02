/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Integrations from '../pages/integrations'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('Testing Integrations', () => {
  it('Renders!', () => {
    const component = renderer.create(<Integrations />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
