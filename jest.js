'use strict'

module.exports = {
  'env': { 'jest/globals': true },
  'plugins': [ 'jest' ],
  'rules': {
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error'
  }
}
