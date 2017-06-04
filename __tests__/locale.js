/* global it, expect, describe */

import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {matcher, serializer} from 'jest-glamor-react'
import {withLocale} from '../components/locale'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('Testing locale', () => {
  it('Renders withLocale', () => {
    const SampleComponent = () =>
      <withLocale><div sample="prop">Hello World</div></withLocale>

    expect(toJson(shallow(<SampleComponent />))).toMatchSnapshotWithGlamor(
      'shallow',
    )
  })
})
