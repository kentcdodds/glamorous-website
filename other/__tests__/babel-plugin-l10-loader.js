import pluginTester from 'babel-plugin-tester'
import plugin from '../babel-plugin-l10n-loader'

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
          expect(errorSpy.mock.calls).toMatchSnapshot('console error calls')
          errorSpy.mockRestore()
        }
      },
    },
  ],
})
