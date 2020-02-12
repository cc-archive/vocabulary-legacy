const fs = require('fs-extra')
const chalk = require('chalk')
const childProcess = require('child_process')

const variables = require('./variables')

console.log(
  chalk.blue.inverse(`● Writing ${variables.verboseName} documentation\n`)
)

clearDir(variables.docsDir)

buildWebsite(variables.docsDir)

buildStorybook()

console.log(chalk.green.inverse('\n✔ Done.'))

// Top level functions

function clearDir (directory) {
  process.stdout.write(chalk.yellow(
    'Clearing folder',
    chalk.bold(directory),
    '... '
  ))
  fs.emptyDirSync(directory)
  process.stdout.write(chalk.green('done\n'))
}

function buildWebsite () {
  process.stdout.write(chalk.yellow(
    'Building website to',
    chalk.bold(variables.docsDir),
    '... '
  ))
  build(`vue-cli-service build --dest ${variables.docsDir}`)
  process.stdout.write(chalk.green('done\n'))
}

function buildStorybook () {
  process.stdout.write(chalk.yellow(
    'Building storybook to',
    chalk.bold(`${variables.storybookDir}`),
    '... '
  ))
  build(`vue-cli-service storybook:build -c storybook -s src/assets -o ${variables.storybookDir}`)
  process.stdout.write(chalk.green('done\n'))
}

// Helper functions

function build (cmd) {
  childProcess.execSync(cmd, { stdio: 'ignore' })
}
