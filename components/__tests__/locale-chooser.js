import React from 'react'
import {mount} from 'enzyme'
import {ThemeProvider} from 'glamorous'
import LocaleChooser from '../locale-chooser'

let assignSpy

beforeEach(() => {
  assignSpy = jest.spyOn(window.location, 'assign')
})

afterEach(() => {
  assignSpy.mockRestore()
})

test('redirects to the right URL when the locale is changed', () => {
  const wrapper = mountLocaleChooser({locale: 'en'})
  wrapper.find('select').simulate('change', {target: {value: 'fr'}})
  expect(assignSpy).toHaveBeenCalledTimes(1)
  expect(assignSpy).toHaveBeenCalledWith(expect.stringContaining('fr.'))
})

test('redirects to the root of the site when changed to english', () => {
  const wrapper = mountLocaleChooser({locale: 'es'})
  wrapper.find('select').simulate('change', {target: {value: 'en'}})
  expect(assignSpy).toHaveBeenCalledTimes(1)
  expect(assignSpy).not.toHaveBeenCalledWith(expect.stringContaining('en.'))
})

test('redirects to the docs about docs on github', () => {
  const wrapper = mountLocaleChooser({locale: 'fr'})
  wrapper.find('select').simulate('change', {target: {value: 'another'}})
  expect(assignSpy).toHaveBeenCalledTimes(1)
  expect(assignSpy).toHaveBeenCalledWith(
    expect.stringContaining('CONTRIBUTING_DOCUMENTATION.md'),
  )
})

function mountLocaleChooser(props = {}) {
  return mount(
    <ThemeProvider theme={{colors: {}}}>
      <LocaleChooser {...props} />
    </ThemeProvider>,
  )
}
