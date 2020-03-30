module.exports = {
  testRegex: './*\\.test\\.js$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx'
  },
  setupFilesAfterEnv: [
    './storyshots.test.js'
  ]
}
