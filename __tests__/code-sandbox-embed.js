/* global it, expect, describe */

import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {matcher, serializer} from 'jest-glamor-react'
import CodeSandboxEmbed from '../components/code-sandbox-embed'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('Testing CodeSandboxEmbed', () => {
  it('Renders!', () => {
    expect(toJson(shallow(<CodeSandboxEmbed />))).toMatchSnapshotWithGlamor(
      'shallow',
    )
  })
})
