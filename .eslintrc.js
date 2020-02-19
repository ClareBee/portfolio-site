module.exports = {
  env: {
    node: true, // allows require
    browser: true, // allows document
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2018, // parsing modern ECMA Script
    sourceType: 'module', // allows imports
    ecmaFeatures: {
      jsx: true, // parsing JSX
    },
  },
  root: true,
  rules: {
    'react/react-in-jsx-scope': 'off', // Next imports React for you
    camelcase: ['error', { allow: ['alt_text'] }],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // placed last to override
  ],
};
