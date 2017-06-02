import React from 'react'

export default CodeSandboxEmbed

function CodeSandboxEmbed({title, id}) {
  return (
    <iframe
      title={title}
      src={`https://codesandbox.io/embed/${id}`}
      style={{
        width: '100%',
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  )
}
