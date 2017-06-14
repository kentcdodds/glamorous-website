import path from 'path'
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

test('getContent for pages translates the keys', () => {
  const options = {
    page: 'foo.js',
    contentFile: (p, {page}) => require(`./fixtures/content/${p}${page}`),
  }

  testTranslation('en', options)
  testTranslation('es', options)
  testTranslation('fr', options)
})

test('getContent for components translates the keys', () => {
  const options = {
    component: 'foo.js',
    contentFile: (p, {component}) =>
      require(`./fixtures/content/${p}${component}`),
  }

  testTranslation('en', options)
  testTranslation('es', options)
  testTranslation('fr', options)
})

test('getContent for examples translates the keys', () => {
  const options = {
    example: 'foo.js',
    contentFile: (p, {example}) =>
      require(`./fixtures/content/${p}${example}`),
  }

  testTranslation('en', options)
  testTranslation('es', options)
  testTranslation('fr', options)
})

function testTranslation(language, options) {
  const expectedEn = {
    foo: 'foo in english',
    bar: 'bar in english',
    baz: 'baz in english',
    qux: 'qux in english',
    sections: [
      {
        foo: 'foo in english',
        bar: 'bar in english',
        baz: 'baz in english',
        qux: 'qux in english',
        filename: path.join(__dirname, 'fixtures', 'content', 'bar.js'),
      },
      {
        foo: 'foo in english',
        bar: 'bar in english',
        baz: 'baz in english',
        qux: 'qux in english',
        filename: path.join(__dirname, 'fixtures', 'content', 'baz.js'),
      },
    ],
  }
  const expectedEs = {
    foo: 'foo in español',
    bar: 'bar in english',
    baz: null,
    qux: 'qux in english',
    sections: [
      {
        foo: 'foo in english',
        bar: 'bar in english',
        baz: 'baz in english',
        qux: 'qux in english',
        filename: path.join(__dirname, 'fixtures', 'content', 'bar.js'),
      },
      {
        foo: 'foo in español',
        bar: 'bar in english',
        baz: null,
        qux: 'qux in english',
        filename: path.join(__dirname, 'fixtures', 'content', 'es', 'baz.js'),
      },
    ],
  }
  const expected = language === 'es' ? expectedEs : expectedEn
  const actual = getContent(language, options)
  expect(actual).toEqual(expected)
}
