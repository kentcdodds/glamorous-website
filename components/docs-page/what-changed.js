import React from 'react'
import glamorous from 'glamorous'
import mdToHTML from '../utils/md-to-html'
import {Anchor} from '../styled-links'
import content from './content/what-changed.md'

const ChangedLink = glamorous(Anchor)({
  display: 'block',
  marginBottom: 20,
  fontSize: '1.3em',
})

function WhatChanged({filename, fallbackFilename, start, end}) {
  const data = {
    FILE: filename,
    FALLBACK_FILE: fallbackFilename,
  }
  const details = interpolate(content.details, data)
  return (
    <div>
      <glamorous.Div dangerouslySetInnerHTML={{__html: mdToHTML(details)}} />
      <glamorous.Div textAlign="center">
        <ChangedLink href={getWhatChangedLink(start, end)}>
          {content.whatChangedLink}
        </ChangedLink>
        <ChangedLink href={getEditorLink(filename)}>
          {interpolate(content.editorLink, {FILE: filename})}
        </ChangedLink>
      </glamorous.Div>
    </div>
  )
}

function getEditorLink(filename) {
  return `https://github.com/kentcdodds/glamorous-website/edit/master${filename}`
}

function getWhatChangedLink(start, end) {
  return `https://github.com/kentcdodds/glamorous-website/compare/${start}...${end}`
}

function interpolate(string, data) {
  let interpolatedString = [string]
  if (data) {
    interpolatedString = string.split(/({.*?})/).map(interpolation => {
      const [, key] = interpolation.match(/^{(.*)}$/) || []
      return key ? data[key] : interpolation
    })
  }
  return interpolatedString.join('')
}

export default WhatChanged
