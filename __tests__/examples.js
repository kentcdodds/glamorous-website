import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Examples from '../pages/examples'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('renders', () => {
  const component = renderer.create(<Examples />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
