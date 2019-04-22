'use strict'

module.exports = {
  'extends': [
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'rules': {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true }]
  }
}
