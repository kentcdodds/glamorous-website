import React from 'react'
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import {matcher, serializer} from 'jest-glamor-react'
import CodeSandboxEmbed from '../code-sandbox-embed'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('renders', () => {
  expect(toJson(mount(<CodeSandboxEmbed />))).toMatchSnapshotWithGlamor()
})
