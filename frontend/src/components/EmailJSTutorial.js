import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import markdown from './codeExamples.js'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
const EmailJSTutorial = () => {
  return (
    <SyntaxHighlighter
      language='jsx'
      style={darcula}
      wrapLines={true}
      lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
    >
      {markdown}
    </SyntaxHighlighter>
  )
}

export default EmailJSTutorial
