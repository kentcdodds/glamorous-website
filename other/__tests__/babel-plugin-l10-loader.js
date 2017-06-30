import pluginTester from 'babel-plugin-tester'
import plugin from '../babel-plugin-l10n-loader'

pluginTester({
  plugin,
  snapshot: true,
  tests: [{fixture: require.resolve('./fixtures/some-component')}],
})
