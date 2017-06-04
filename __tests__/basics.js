import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Basics from '../pages/basics'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('renders', () => {
  const component = renderer.create(<Basics />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
