export default highlighter

function highlighter(highlight) {
  return function pragmaHighlighter(language) {
    return function pragmaHighlightedHandler(codeHandler) {
      return function highlightedCodeHandler(options, value) {
        const pragmaScheme = codeHandler(options, value)
        const code = highlight(pragmaScheme.code, language)
        return Object.assign(pragmaScheme, {code, language})
      }
    }
  }
}
