import pluginTester from 'babel-plugin-tester'
import plugin from '../babel-plugin-val-loader'

pluginTester({
  plugin,
  snapshot: true,
  tests: [
    {
      fixture: require.resolve('./fixtures/val-component'),
    },
  ],
})
