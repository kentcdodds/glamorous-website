import React from 'react'

function CodeBlock({code, language}) {
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

function StaticCodeBlock({code, language, summary}) {
  return Boolean(summary) ?
    <details>
      <summary>{summary}</summary>
      <CodeBlock code={code} language={language} />
    </details> :
    <CodeBlock code={code} language={language} />
}

export default StaticCodeBlock
