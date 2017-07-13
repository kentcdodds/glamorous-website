const path = require('path')
const execSync = require('child_process').execSync
const pathExists = require('path-exists')
const {fallbackLocale} = require('../config.json')

const OUTDATED = 'OUTDATED'
const UP_TO_DATE = 'UP_TO_DATE'
const MISSING = 'MISSING'
const cwd = path.join(__dirname, '..')

module.exports = translationStatus
Object.assign(module.exports, {
  OUTDATED,
  UP_TO_DATE,
  MISSING,
})

function translationStatus(englishFilePath, lang) {
  const {dir, base} = path.parse(englishFilePath)
  const transFile = `${dir}/${lang}/${base}`

  // short circuit fallback language as always being up to date
  if (lang === fallbackLocale) {
    return UP_TO_DATE
  }

  if (pathExists.sync(transFile)) {
    const enUpdate = git(`log -1 --pretty=format:"%at" -- ${englishFilePath}`)
    const transUpdate = git(`log -1 --pretty=format:"%at" -- ${transFile}`)
    if (Number(enUpdate) > Number(transUpdate)) {
      return OUTDATED
    } else {
      return UP_TO_DATE
    }
  }
  return MISSING
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
