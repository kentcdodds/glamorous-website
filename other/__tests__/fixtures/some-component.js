/* eslint no-unused-vars:0 */
import fs from 'fs'
import content1 from './content'
import content2 from './content/index.md'
import raw1 from './content/file.raw'

const path = require('path') // no change here

const content3 = require('./content')
const content4 = require('./content/index.md')
const raw2 = require('./content/file.raw')

const array = [
  require('./content'),
  require('./content/index.md'),
  require('./content/file.raw'),
]
