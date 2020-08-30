module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/script-indent': ['error', 2, {
      switchCase: 1,
      baseIndent: 1
    }] // Supersedes the normal indent rule
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off' // Replaced by vue/script-indent
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
