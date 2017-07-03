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

  const links = wrapper.find('a')
  expect(links.length).toBe(4)
  expect(links.at(0).getDOMNode().getAttribute('href')).not.toEqual(
    expect.stringContaining('en.'),
  )
  expect(links.at(1).getDOMNode().getAttribute('href')).toEqual(
    expect.stringContaining('es.'),
  )
  expect(links.at(2).getDOMNode().getAttribute('href')).toEqual(
    expect.stringContaining('fr.'),
  )
  expect(links.at(3).getDOMNode().getAttribute('href')).toEqual(
    expect.stringContaining('CONTRIBUTING_DOCUMENTATION.md'),
  )

  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
})

function localeChooser() {
  return mount(
    <ThemeProvider theme={GlobalStyles}>
      <LocaleChooser />
    </ThemeProvider>,
  )
}
