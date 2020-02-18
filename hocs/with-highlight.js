import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from '../styles/javascript/syntax-theme';

console.log('nord', nord)

const WithHighlight = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={nord} >
      {value}
    </SyntaxHighlighter>
  );
};


export default WithHighlight
