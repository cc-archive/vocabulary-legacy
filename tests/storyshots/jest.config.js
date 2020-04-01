module.exports = {
  testRegex: './*\\.test\\.js$',
  moduleNameMapper: {
    '\\.(css|scss|stylesheet)$': '<rootDir>/__mocks__/styleMock.js'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(storybook-addon-designs)/)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ]
}
