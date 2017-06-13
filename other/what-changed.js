const path = require('path')
const execSync = require('child_process').execSync
const chalk = require('chalk')

const file = process.argv[2]
const lang = process.argv[3]

if (!file || !lang) {
  const example = `node other/what-changed.js path/to/english/file.js es`
  console.error(
    chalk.red(`You must specify a file and locale:\n  "${example}"`)
  )
  // eslint-disable-next-line no-throw-literal
  throw 'No language arg specified'
}

const cwd = path.join(__dirname, '..')

const {dir, base} = path.parse(file)
const transFile = `${dir}/${lang}/${base}`
const transUpdate = git(`log -1 --pretty=format:"%at" -- ${transFile}`)
execSync(`git whatchanged --since="${transUpdate}" -p ${file}`, {
  cwd,
  stdio: 'inherit',
})

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
