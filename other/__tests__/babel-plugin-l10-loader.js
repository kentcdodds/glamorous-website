import pluginTester from 'babel-plugin-tester'
import plugin from '../babel-plugin-l10n-loader'

const locale = process.env.LOCALE

beforeAll(() => {
  process.env.LOCALE = 'en'
})

afterAll(() => {
  process.env.LOCALE = locale
})

pluginTester({
  plugin,
  snapshot: true,
  tests: [
    {
      fixture: require.resolve('./fixtures/some-component'),
      setup() {
        const errorSpy = jest
          .spyOn(console, 'error')
          .mockImplementation(() => {})
        return function teardown() {
          const allCalls = errorSpy.mock.calls
            .reduce((a, c) => a.concat(c), [])
            .join('\n')
            .split(__dirname)
            .join('')

          expect(allCalls).toMatchSnapshot('console error calls')
          errorSpy.mockRestore()
        }
      },
    },
  ],
})
