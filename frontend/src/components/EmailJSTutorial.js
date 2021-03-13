import React from 'react'
// import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import markdown from './markdownExamples.js'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const EmailJSTutorial = () => {
  //   return <ReactMarkdown children={markdown} />
  return (
    <SyntaxHighlighter language='javascript' style={atelierDuneDark}>
      {markdown}
    </SyntaxHighlighter>
  )
}

export default EmailJSTutorial
