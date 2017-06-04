import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Advanced from '../pages/advanced'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('renders', () => {
  const component = renderer.create(<Advanced />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
