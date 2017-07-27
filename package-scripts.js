const {concurrent, series, crossEnv, rimraf, mkdirp} = require('nps-utils')
const {supportedLocales} = require('./config.json')

const hiddenFromHelp = true
const cleanup = rimraf('./node_module/.cache')

const localeBuilds = supportedLocales.reduce((obj, locale) => {
  const env = crossEnv(
    `LOCALE=${locale} DISABLE_CACHE=true NODE_ENV=production USE_PREFETCH=true`
  )
  const build = `dist/${locale}`
  const target = `out/${locale}`
  obj[locale] = {
    default: series(
      cleanup,
      rimraf(`${build} ${target}`),
      mkdirp(build), // for some reason next.js won't create this for us 😑
      `${env} next build`,
      `${env} next export -o ${target}`,
      `${env} node other/get-build-info.js > ${target}/build-info.json`,
      process.env.CI ? `${env} ./other/now-travis` : ''
    ),
  }
  return obj
}, {})

const localeDeploys = supportedLocales.reduce((obj, locale) => {
  const target = `out/${locale}`
  obj[locale] = `now --public --static --name ${locale}-glamorous ${target}`
  return obj
}, {})

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
    test: {
      default: crossEnv('NODE_ENV=test LOCALE=en jest --coverage'),
      update: crossEnv('NODE_ENV=test LOCALE=en jest -u'),
      watch: crossEnv('NODE_ENV=test LOCALE=en jest --watch'),
    },
    // default is run when you run `nps` or `npm start`
    default: 'next start',
    cleanup,
    dev: series(cleanup, crossEnv('NODE_ENV=development next')),
    build: Object.assign(localeBuilds, {
      default: series.nps(...supportedLocales.map(s => `build.${s}`)),
    }),
    deploy: localeDeploys,
    lint: {description: 'lint the entire project', script: 'eslint .'},
    flow: {description: 'flow type-check the entire project', script: 'flow'},
    reportCoverage: {
      description:
        'Report coverage stats to codecov. This should be run after the `test` script',
      script: 'codecov',
    },
    validate: {
      description:
        'This runs several scripts to make sure things look good before committing or on clean install',
      script: concurrent.nps('lint', 'flow', 'test'),
    },
    validateAndBuild: {
      hiddenFromHelp,
      script: concurrent.nps('validate', 'build'),
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
