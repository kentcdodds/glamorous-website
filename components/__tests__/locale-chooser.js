import React from 'react'
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import {ThemeProvider} from 'glamorous'
import {matcher, serializer} from 'jest-glamor-react'
import GlobalStyles from '../../styles/global-styles'
import LocaleChooser from '../locale-chooser'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('closed state', () => {
  const wrapper = localeChooser()

  const links = wrapper.find('a')
  expect(links.length).toBe(0)

  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
})

test('opened state', () => {
  const wrapper = localeChooser()
  wrapper.find('button').simulate('click')
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
})

function localeChooser() {
  return mount(
    <ThemeProvider theme={GlobalStyles}>
      <LocaleChooser />
    </ThemeProvider>,
  )
}
