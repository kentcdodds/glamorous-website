import pluginTester from 'babel-plugin-tester'
import plugin from '../babel-plugin-l10n-loader'

const locale = process.env.LOCALE

beforeAll(() => {
  process.env.LOCALE = 'fr'
})

afterAll(() => {
  process.env.LOCALE = locale
})

pluginTester({
  plugin,
  snapshot: true,
  tests: [{fixture: require.resolve('./fixtures/some-component')}],
})
