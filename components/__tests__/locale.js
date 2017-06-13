import React from 'react'
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import {matcher, serializer} from 'jest-glamor-react'
import {
  LocaleProvider,
  withLocale,
  getInitialLocaleProps,
  getContent,
} from '../locale'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('LocaleProvider with a withLocale-ed component gets the locale', () => {
  const SampleComponentSpy = jest.fn(() => <div />)
  const SampleComponent = withLocale(SampleComponentSpy)

  expect(
    toJson(
      mount(<LocaleProvider locale="es"><SampleComponent /></LocaleProvider>),
    ),
  ).toMatchSnapshotWithGlamor()
  expect(SampleComponentSpy).toHaveBeenCalledTimes(1)
  const props = {locale: 'es'}
  const context = {}
  const updateQueue = expect.any(Object)
  expect(SampleComponentSpy).toHaveBeenCalledWith(props, context, updateQueue)
})

test('getInitialLocaleProps gets the locale from the req object', async () => {
  const req = {headers: {host: 'fr.glamorous.rocks'}}
  const localeProps = await getInitialLocaleProps({req})
  expect(localeProps).toEqual({locale: 'fr'})
})

test('getInitialLocaleProps defaults to en', async () => {
  const localeProps = await getInitialLocaleProps()
  expect(localeProps).toEqual({locale: 'en'})
})

test('getInitialLocaleProps gets the host from window', async () => {
  const original = window.location.host
  // why can't we just do window.location.host = 'foo'?
  // https://github.com/facebook/jest/issues/890
  Object.defineProperty(window.location, 'host', {
    writable: true,
    value: 'es.glamorous.rocks',
  })
  const localeProps = await getInitialLocaleProps()
  expect(localeProps).toEqual({locale: 'es'})
  Object.defineProperty(window.location, 'host', {
    writable: true,
    value: original,
  })
})

test('getContent translates the keys - default lang', () => {
  // jest.mock('../locale', () => {
  //   return {
  //     getComponentContent: jest.fn((localePath, component) => `../components/__tests__/fixtures/content/${localePath}${component}`)
  //   }
  // })

  const expected = {
    foo: 'foo in english',
    bar: 'bar in english',
    baz: 'baz in english',
    qux: 'qux in english',
  }
  const actual = getContent('en', {
    component: 'foo.js',
    componentPath: (path, comp) =>
      `../components/__tests__/fixtures/content/${path}${comp}`,
  })
  expect(actual).toEqual(expected)
})

test('getContent translates the keys', () => {
  const expected = {
    foo: 'foo in español',
    bar: 'bar in english',
    baz: null,
    qux: 'qux in english',
  }
  const actual = getContent('es', {
    component: 'foo.js',
    componentPath: (path, comp) =>
      `../components/__tests__/fixtures/content/${path}${comp}`,
  })
  expect(actual).toEqual(expected)
})
