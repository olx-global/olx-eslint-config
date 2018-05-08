'use strict'

module.exports = {
  'env': { 'es6': true },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': { 'experimentalObjectRestSpread': true }
  },
  'rules': {

    // ECMAScript 6
    'arrow-body-style': 'error',
    'arrow-parens': [ 'error', 'as-needed' ],
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-confusing-arrow': 'off',
    'no-duplicate-imports': 'error',
    'no-restricted-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': [ 'error', { 'ignoreCase': true } ],
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error'
  }
}
