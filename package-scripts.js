const npsUtils = require('nps-utils')

const concurrent = npsUtils.concurrent
const rimraf = npsUtils.rimraf
const hiddenFromHelp = true

module.exports = {
  scripts: {
    contributors: {
      add: {
        description: 'When new people contribute to the project, run this',
        script: 'all-contributors add',
      },
      generate: {
        description: 'Update the badge and contributors table',
        script: 'all-contributors generate',
      },
    },
    commit: {
      description:
        'This uses commitizen to help us generate well formatted commit messages',
      script: 'git-cz',
    },
    test: {
      default: 'cross-env NODE_ENV=test jest --coverage',
      update: 'cross-env NODE_ENV=test jest -u',
      watch: 'cross-env NODE_ENV=test jest --watch',
    },
    // default is run when you run `nps` or `npm start`
    default: 'next start',
    dev: 'next',
    build: {
      default: concurrent({
        next: 'next build',
        buildInfo: 'node other/get-build-info.js > static/build-info.json',
      }),
      clean: rimraf('.next static/build-info.json'),
    },
    lint: {description: 'lint the entire project', script: 'eslint .'},
    reportCoverage: {
      description:
        'Report coverage stats to codecov. This should be run after the `test` script',
      script: 'codecov',
    },
    validate: {
      description:
        'This runs several scripts to make sure things look good before committing or on clean install',
      script: concurrent.nps('lint', 'test', 'build'),
    },
    deploy: {
      hiddenFromHelp,
      description: 'Runs the deploy script.',
      script: 'NOW_ALIAS=rc.glamorous.rocks ./other/now-travis || true',
    },
    validateAndDeploy: {
      hiddenFromHelp,
      description: 'This runs the validation and deploy concurrently',
      script: concurrent.nps('validate', 'deploy'),
    },
  },
  options: {silent: false},
}
// This is not transpiled
/*
  eslint
  max-len: 0,
  comma-dangle: [
    2,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'never'
    }
  ]
 */
