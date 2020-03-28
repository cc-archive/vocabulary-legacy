module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    './setup_tests.js'
  ]
}
