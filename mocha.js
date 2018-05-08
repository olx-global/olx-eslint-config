'use strict'

module.exports = {
  'plugins': [ 'mocha' ],
  'rules': {
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/handle-done-callback': 'error',
    'mocha/no-synchronous-tests': 'off',
    'mocha/no-global-tests': 'error',
    'mocha/valid-test-description': 'off',
    'mocha/valid-suite-description': 'off'
  }
}
