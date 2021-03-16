import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
const CodeHighlight = ({ codeBlock }) => {
  return (
    <SyntaxHighlighter
      language='jsx'
      style={darcula}
      wrapLines={true}
      lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
    >
      {codeBlock}
    </SyntaxHighlighter>
  )
}

export default CodeHighlight
