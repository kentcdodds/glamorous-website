/* eslint no-unused-vars:0 */
import fs from 'fs'
import content1 from './content'
import content2 from './content/index.md'

const path = require('path') // no change here

const content3 = require('./content')
const content4 = require('./content/index.md')

const array = [require('./content'), require('./content/index.md')]

function someFn() {
  const content5 = require('./content')
  const content6 = require('./content/index.md')
  const array2 = [require('./content'), require('./content/index.md')]
}
