import React from 'react'
import { nord } from '../styles/javascript/syntax-theme';
import dynamic from 'next/dynamic';

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'));

console.log('nord', nord)

const WithHighlight = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={nord} >
      {value}
    </SyntaxHighlighter>
  );
};


export default WithHighlight
