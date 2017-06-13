import React from 'react'

function StaticCodeBlock({code, language}) {
  const languageClassName = `language-${language}`
  return (
    <pre className={languageClassName}>
      <code
        className={languageClassName}
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      />
    </pre>
  )
}

export default StaticCodeBlock
