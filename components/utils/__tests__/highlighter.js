import highlighter from '../highlighter'

test('a language specific code syntax highlighter can be created and used for handling code pragmas', () => {
  const highlightFn = jest
    .fn()
    .mockImplementation(code => `<span>${code}</span>`)
  const codeHandler = jest
    .fn()
    .mockImplementation((options, value) => ({
      code: value,
      component: 'a component',
      ...options,
    }))
  const javaScriptCodeBlock = highlighter(highlightFn)('javascript')(
    codeHandler,
  )
  const actual = javaScriptCodeBlock({option: true}, '// some code')
  expect(actual).toEqual({
    code: '<span>// some code</span>',
    language: 'javascript',
    option: true,
    component: 'a component',
  })
})
