const path = require('path')
const execSync = require('child_process').execSync
const pathExists = require('path-exists')
const glob = require('glob')
const chalk = require('chalk')

const lang = process.argv[2]

if (!lang) {
  const example = `node other/list-l10n.js es`
  console.error(chalk.red(`You must specify a locale:\n  "${example}"`))
  // eslint-disable-next-line no-throw-literal
  throw 'No language arg specified'
}

const cwd = path.join(__dirname, '..')

const dirs = ['components', 'examples', 'pages/**']
const results = dirs
  .map(shortPath => glob.sync(`${shortPath}/content/*.js`, {cwd}))
  .reduce((acc, files) => acc.concat(files))
  .reduce(
    (acc, file) => {
      const {dir, base} = path.parse(file)
      const transFile = `${dir}/${lang}/${base}`
      if (pathExists.sync(transFile)) {
        const enUpdate = git(`log -1 --pretty=format:"%at" -- ${file}`)
        const transUpdate = git(`log -1 --pretty=format:"%at" -- ${transFile}`)
        if (Number(enUpdate) > Number(transUpdate)) {
          acc.outdated.push(transFile)
        } else {
          acc.upToDate.push(transFile)
        }
      } else {
        acc.nonExistant.push(transFile)
      }
      return acc
    },
    {upToDate: [], outdated: [], nonExistant: []}
  )

console.log(
  [
    chalk.green(list('Up to date', results.upToDate)),
    chalk.yellow(list('Needs Translation', results.nonExistant)),
    chalk.red(list('Outdated', results.outdated)),
  ].join('\n\n'),
  '\n'
)

function list(title, array) {
  const heading = chalk.bold(title)
  if (!array.length) {
    return `${heading}: None!`
  }
  return `${heading}:\n - ${array.join('\n - ')}`
}

function git(args) {
  return execSync(`git ${args}`, {cwd}).toString()
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
