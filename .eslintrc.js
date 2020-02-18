module.exports = {
  env: {
    node: true, // to allow require
    browser: true, // to allow document
    es6: true, // to allow Promise
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  rules: {
    'react/react-in-jsx-scope': 'off', // Next imports React for you
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // placed last to override
  ],
};
