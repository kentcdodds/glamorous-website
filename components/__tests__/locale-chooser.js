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

test('it renders', () => {
  setHost()
  const wrapper = renderLocaleChooser()
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor()
})

test('a closed locale-chooser', () => {
  setHost()
  const wrapper = mountLocaleChooser()
  testClosedState(wrapper)
})

test('an open locale-chooser', () => {
  setHost()
  const wrapper = mountLocaleChooser()
  const toggle = wrapper.find('button')
  const selector = wrapper.find('ul')
  toggle.simulate('click')

  expect(toggle.getDOMNode().getAttribute('aria-expanded')).toEqual('true')
  expect(selector.getDOMNode().getAttribute('aria-hidden')).toEqual('false')
  expect(
    selector.childAt(0).find('a').getDOMNode() === document.activeElement,
  ).toBe(true)
})

test('pressing the escape key closes the locale-selector', () => {
  setHost()
  const wrapper = mountLocaleChooser()
  const toggle = wrapper.find('button')
  toggle.simulate('click')
  document.dispatchEvent(new KeyboardEvent('keydown', {keyCode: 27}))

  testClosedState(wrapper)
})

test('an outside click closes the locale-selector', () => {
  setHost()
  const wrapper = mountLocaleChooser()
  const toggle = wrapper.find('button')
  toggle.simulate('click')
  document.dispatchEvent(new Event('click'))

  testClosedState(wrapper)
})

test('creates localization links', () => {
  supportedLocales.forEach(l => {
    setHost(l)
    testLocalizationLinks()
  })
})

function renderLocaleChooser() {
  return render(localeChooser())
}

function mountLocaleChooser() {
  return mount(localeChooser())
}

function localeChooser() {
  return (
    <ThemeProvider theme={GlobalStyles}>
      <LocaleChooser />
    </ThemeProvider>
  )
}

const host = 'glamorous.rocks'
function setHost(lang = fallbackLocale) {
  process.env.LOCALE = lang

  // why can't we just do window.location.host = 'foo'?
  // https://github.com/facebook/jest/issues/890
  Object.defineProperty(window.location, 'host', {
    writable: true,
    value: `${lang === fallbackLocale ? '' : `${lang}.`}${host}`,
  })

  Object.defineProperty(window.location, 'protocol', {
    writable: true,
    value: 'https:',
  })

  Object.defineProperty(window.location, 'pathname', {
    writable: true,
    value: '/',
  })
}

function testClosedState(wrapper) {
  const toggle = wrapper.find('button')
  const selector = wrapper.find('ul')

  expect(toggle.getDOMNode().getAttribute('aria-expanded')).toEqual('false')
  expect(selector.getDOMNode().getAttribute('aria-hidden')).toEqual('true')
}

function testLocalizationLinks() {
  const wrapper = mountLocaleChooser()
  const links = wrapper.find('a')

  expect(links.length).toBe(supportedLocales.length + 1)
  supportedLocales.forEach((l, i) => {
    const prefix = l === fallbackLocale ? '' : `${l}.`
    expect(links.at(i).getDOMNode().getAttribute('href')).toEqual(
      `https://${prefix}${host}/`,
    )
  })
  expect(
    links.at(supportedLocales.length).getDOMNode().getAttribute('href'),
  ).toEqual(
    'https://github.com/kentcdodds/glamorous-website/blob/master/other/CONTRIBUTING_DOCUMENTATION.md',
  )
}
