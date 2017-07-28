const path = require('path')
const execSync = require('child_process').execSync

const cwd = path.join(__dirname, '..')

module.exports = git

function git(...args) {
  return execSync(`git ${args.join(' ')}`, {cwd}).toString()
}
// This is not transpiled
/*
  eslint
  no-console: 0,
  camelcase: 0,
  comma-dangle: [
    2,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'never'
    }
  ]
 */
