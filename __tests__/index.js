/* global it, expect, describe */

import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {matcher, serializer} from 'jest-glamor-react'
import Index from '../pages'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('Testing Index', () => {
  it('Renders!', () => {
    expect(toJson(shallow(<Index />))).toMatchSnapshotWithGlamor('shallow')
  })
})
