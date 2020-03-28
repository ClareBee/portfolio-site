import React from 'react';
import PropTypes from 'prop-types';
import { nord } from '../styles/javascript/syntax-theme';
import dynamic from 'next/dynamic';

const SyntaxHighlighter = dynamic(() =>
  import('react-syntax-highlighter'),
);

const WithHighlight = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={nord}>
      {value}
    </SyntaxHighlighter>
  );
};

WithHighlight.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string,
};
export default WithHighlight;
