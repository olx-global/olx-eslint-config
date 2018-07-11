'use strict'

module.exports = {
  'extends': [ 'plugin:react/recommended' ],
  'plugins': [ 'react' ],
  'rules': {

    // React
    'react/forbid-prop-types': 'error',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-multi-comp': [ 'error', { 'ignoreStateless': true } ],
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'off',
    'react/require-optimization': 'off',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [ 1, {
      'order': [
        'static-methods',
        'type-annotations',
        'lifecycle',
        '/^on.+$/',
        'everything-else',
        'render'
      ],
      'groups': {
        'lifecycle': [
          'displayName',
          'propTypes',
          'contextTypes',
          'defaultProps',
          'statics',
          'childContextTypes',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'mixins',
          'state',
          'constructor',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }
    ],
    'react/sort-prop-types': 'error',

    // JSX
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': [ 'error', 'line-aligned' ],
    'react/jsx-curly-spacing': [ 'error', { "when": "never", "children": true } ],
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [ 'error', { 'maximum': 4 } ],
    'react/jsx-no-bind': [ 'error', { 'allowArrowFunctions': true } ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': [ 'error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never'
    } ],
    'react/jsx-wrap-multilines': [ 'error', { 'assignment': false } ]
  }
}
