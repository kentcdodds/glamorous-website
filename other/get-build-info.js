const execSync = require('child_process').execSync

const branch = exec('git rev-parse --abbrev-ref HEAD')
const sha = exec('git rev-parse HEAD')
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
