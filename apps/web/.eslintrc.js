/* eslint-env node */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'next',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['src/app/**/page.tsx', 'src/app/**/layout.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  ignorePatterns: ['src/global/contracts/abi.ts'],
};
