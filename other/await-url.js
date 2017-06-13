// this is based on this PR: https://github.com/sholladay/await-url/pull/1
// use the actual module when that's merged
// and remove the `got` dep :)

const got = require('got')

const awaitUrl = (url, option) => {
  const config = Object.assign(
    {
      interval: 1000,
      tries: 60,
    },
    option
  )

  return new Promise((resolve, reject) => {
    const attempt = async tries => {
      const res = await got(url, {
        followRedirect: false,
        timeout: {
          connect: 10000,
          socket: 10000,
          request: 10000,
        },
      })
      if (res.statusCode === 200) {
        resolve()
      } else if (Math.max(1, tries) > 1) {
        setTimeout(attempt, config.interval, tries - 1)
      } else {
        reject(
          new RangeError(`Expected 200 response but got ${res.statusCode}`)
        )
      }
    }
    attempt(config.tries).catch(reject)
  })
}

module.exports = awaitUrl

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
