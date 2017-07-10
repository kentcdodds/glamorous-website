const path = require('path')
const glob = require('glob')
const chalk = require('chalk')
const translationStatus = require('./translation-status')

const {OUTDATED, UP_TO_DATE, MISSING} = translationStatus

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
  .map(shortPath => glob.sync(`${shortPath}/content/*.md`, {cwd}))
  .reduce((acc, files) => acc.concat(files))
  .reduce(
    (acc, file) => {
      const {dir, base} = path.parse(file)
      const status = translationStatus(file, lang)
      const transFile = `${dir}/${lang}/${base}`
      switch (status) {
        case OUTDATED:
          acc.outdated.push(transFile)
          break
        case UP_TO_DATE:
          acc.upToDate.push(transFile)
          break
        case MISSING:
          acc.nonExistant.push(transFile)
          break
        default:
          throw new Error(`no status for ${transFile}`)
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
