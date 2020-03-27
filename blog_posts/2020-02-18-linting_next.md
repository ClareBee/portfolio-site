---
title: 'Linting NextJS'
subtitle: 'Setting up linting for a NextJS app with TypeScript & SCSS'
author: Clare
date: 2020-02-18
banner: test_image.png
alt_text: 'linting'
tags: [scss, javascript, linting, typescript]
promoted: true
---

This project started off written in ReactJS, but I wanted the option to incorporate TypeScript at a later date. Linting therefore needed to be 'flexible' and cope with both!

While CSS-in-JS seems to be the most popular choice of styling for NextJS Apps, I decided to use SCSS in the project. I'd used Emotion and Styled-Components elsewhere, and was starting to worry I was losing my knowledge of the fundamentals :)

I therefore also needed to linting to be able to cope with Sass written with SCSS syntax.

## ESLint

TSLint has been deprecated in favour of ESLint, so I needed some extra dependencies:

```
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

File: .eslintignore

```
<!-- files to exclude from linting -->
node_modules
build
.next
public
package-lock.json
test
next.config.js
```

File: .eslintrc.js

```javascript
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // which parser to use
  plugins: ['@typescript-eslint'],
  extends: [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', // use opinionated guides
  ],
};
```

## Making it play nicely with React

```
npm install eslint-plugin-react --save-dev
```

File: .eslintrc.js

```javascript
{
  // ...
  settings: {
    react: {
      version: 'detect', // picks up which version used
    },
  },
  parserOptions: {
    ecmaVersion: 2018, // parsing modern ECMAScript
    sourceType: "module", // allows imports
    ecmaFeatures: {
      jsx: true // allows JSX
    }
  },
  extends: [
    'plugin:react/recommended',
    //...
  ],
}
```

## Adjusting it for NextJS

File: .eslintrc.js

```javascript
{
  //...
  rules: {
    'react/react-in-jsx-scope': 'off', // Next imports React for you
  }
}
```

## Other Bits & Bobs

I'm using 'require' to load images and 'document' for GSAP, so needed the following lines

File: .eslintrc.js

```javascript
{
  env: {
    node: true, // allows require
    browser: true, // allows document
  },
}
```

I had snake case props coming from my markdown frontmatter, so needed to convert them to camel case when destructuring:

```javascript
const props = {
  data: {
    snake_case_variable: 'foo_bar',
  },
};

const { foo_bar: fooBar } = data;
```

This still left the issue of the error in PropTypes, so I ended up including it as an exception in .eslintrc.js

```javascript
{
  rules: {
    // ...
    'camelcase': ['error', {'allow': ['foo_bar']}]
  },
}
```

## When you reach a limit!

I had an unnamed component error when trying to implement lazy loading, so chose to disable ESLint for this section only!

```javascript
/*eslint-disable */

// suppress all warnings between comments

/*eslint-enable */
```

## Adding Prettier

```
npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
npm i pretty-quick --save-dev
```

```
//.prettierignore
node_modules
```

```javascript
// .prettierrc.js
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 70,
};
```

```javascript
{
  //...
  extends: [
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // placed last to override conflicts
  ]
}
```

## Adding Stylelint

```
npm i stylelint --save-dev
```

I chose SCSS (instead of CSS-in-JS):

```
npm i stylelint-scss --save-dev
```

Turn on all errors:

```
npm install stylelint-config-recommended-scss --save-dev
```

.stylelintrc.json

```json
{
  "extends": "stylelint-config-recommended-scss"
}
```

## NPM Scripts & Husky

```
npm i husky --save-dev
```

```json
{
  "scripts": {
    "check-format": "eslint . --ext .js,.jsx,.ts,.tsx",
    "fix-format": "eslint . --fix --ext .js,.jsx,.ts,.tsx",
    "lint-scss": "npx stylelint '**/*.scss'"
  },
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged && npm run check-format"
    }
  }
}
```

## Useful articles

- https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
- https://www.robinwieruch.de/prettier-eslint

## Docs and ReadMes

- https://eslint.org/
- https://github.com/yannickcr/eslint-plugin-react
- https://github.com/bjankord/stylelint-config-sass-guidelines
