import React from 'react'

export default InlineScript

function InlineScript({fn, vars}) {
  const code = toStringFn(fn, vars)
  return <script dangerouslySetInnerHTML={{__html: code}} />
}

function toStringFn(fn, vars = {}) {
  return `(function(){${replaceAll(fn.toString(), vars)};${fn.name}()})()`
}

function replaceAll(string, thingsToReplace) {
  return Object.keys(thingsToReplace).reduce((replaced, regexString) => {
    const valueToUse = thingsToReplace[regexString]
    return replaced.replace(new RegExp(regexString, 'g'), valueToUse)
  }, string)
}
