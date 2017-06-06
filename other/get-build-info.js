const execSync = require('child_process').execSync

const {
  TRAVIS_BRANCH,
  TRAVIS_PULL_REQUEST_BRANCH,
  TRAVIS_PULL_REQUEST_SHA,
  TRAVIS_COMMIT,
} = process.env
const branch =
  TRAVIS_PULL_REQUEST_BRANCH ||
  TRAVIS_BRANCH ||
  exec('git rev-parse --abbrev-ref HEAD')
const sha =
  TRAVIS_PULL_REQUEST_SHA || TRAVIS_COMMIT || exec('git rev-parse HEAD')
const commitDate = exec(`git show -s --format=%ci ${sha}`)
const committer = exec(`git --no-pager show -s --format='%an' HEAD`)
const buildInfo = {
  branch,
  buildNumber: process.env.TRAVIS_BUILD_NUMBER,
  buildDate: new Date().toString(),
  commit: {sha, commitDate, committer},
}

process.stdout.write(JSON.stringify(buildInfo))

function exec(command) {
  return execSync(command).toString().trim()
}
