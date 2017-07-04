import React from 'react'
import {render, mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import {ThemeProvider} from 'glamorous'
import {matcher, serializer} from 'jest-glamor-react'
import GlobalStyles from '../../styles/global-styles'
import LocaleChooser from '../locale-chooser'

const {supportedLocales, fallbackLocale} = require('../../config.json')

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('closed state', () => {
  const wrapper = renderLocaleChooser()

  const links = wrapper.find('a')
  expect(links.length).toBe(0)

  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
})

test('opened state', () => {
  const wrapper = mountLocaleChooser()
  wrapper.find('button').simulate('click')
  const links = wrapper.find('a')
  expect(links.length).toBe(supportedLocales.length + 1)
  expect(links.at(0).getDOMNode().getAttribute('href')).not.toEqual(
    expect.stringContaining('en.'),
  )
  supportedLocales.forEach((l, i) => {
    if (l === fallbackLocale) {
      return
    }
    expect(links.at(i).getDOMNode().getAttribute('href')).toEqual(
      expect.stringContaining(`${l}.`),
    )
  })
  expect(
    links.at(supportedLocales.length).getDOMNode().getAttribute('href'),
  ).toEqual(expect.stringContaining('CONTRIBUTING_DOCUMENTATION.md'))
})

function renderLocaleChooser() {
  return render(
    <ThemeProvider theme={GlobalStyles}>
      <LocaleChooser />
    </ThemeProvider>,
  )
}

function mountLocaleChooser() {
  return mount(
    <ThemeProvider theme={GlobalStyles}>
      <LocaleChooser />
    </ThemeProvider>,
  )
}
