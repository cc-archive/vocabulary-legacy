const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const childProcess = require('child_process')

const variables = require('./variables')

const componentsRegistry = require('./components.json')

const families = ['utils', 'elements', 'layouts', 'patterns', 'templates']

console.log(
  chalk.blue.inverse(`● Bundling ${variables.verboseName} library\n`)
)

clearDir(variables.distDir)

indexComponents()

buildLibrary(variables.distDir)

organiseLibrary(variables.distDir)

putMetafiles(variables.distDir)

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

function indexComponents () {
  const fileContent = index()
  process.stdout.write(chalk.yellow(
    'Writing library exports to',
    chalk.bold(variables.srcIndexPath),
    '... '
  ))
  fs.writeFileSync(variables.srcIndexPath, fileContent)
  process.stdout.write(chalk.green('done\n'))
}

function buildLibrary (directory) {
  process.stdout.write(chalk.yellow(
    'Building library to',
    chalk.bold(directory),
    '... '
  ))
  build(
    variables.srcIndexPath,
    directory
  )
  process.stdout.write(chalk.green('done\n'))
}

function organiseLibrary (directory) {
  process.stdout.write(chalk.yellow(
    'Organising library in',
    chalk.bold(directory),
    '... '
  ))

  let files

  // Delete the useless demo
  fs.remove(path.join(directory, 'demo.html'))

  // Move UMD files to their own directory
  files = [
    'vocabulary.umd.js',
    'vocabulary.umd.js.map',
    'vocabulary.umd.min.js',
    'vocabulary.umd.min.js.map'
  ]
  put(files, directory, path.join(directory, 'umd'), true)

  // Move CJS files to their own directory
  files = [
    'vocabulary.common.js',
    'vocabulary.common.js.map'
  ]
  put(files, directory, path.join(directory, 'cjs'), true)

  // Move stylesheets to their own directory
  files = [
    'vocabulary.css'
  ]
  put(files, directory, path.join(directory, 'css'), true)

  process.stdout.write(chalk.green('done\n'))
}

function putMetafiles (directory) {
  process.stdout.write(chalk.yellow(
    'Adding metafiles to',
    chalk.bold(directory),
    '... '
  ))

  let files

  // Copy minimum package requirements to the root directory
  files = [
    'README.md',
    'package.json'
  ]
  put(files, variables.metafilesDir, directory)

  files = [
    'LICENSE'
  ]
  put(files, variables.rootDir, directory)

  process.stdout.write(chalk.green('done\n'))
}

// Helper functions

function index () {
  process.stdout.write(chalk.yellow(
    'Forming content for index at',
    chalk.bold(variables.srcIndexPath),
    '... '
  ))

  const imports = families.map(
    family => componentsRegistry[family].map(
      component => {
        let directory = component
        let name = component
        if (name instanceof Array) {
          directory = component[0]
          name = name.join('')
        }
        return `import ${name} from './${family}/${directory}/${name}'`
      }
    ).join('\n')
  ).join('\n\n')

  const components = families.map(
    family => componentsRegistry[family].map(
      component => {
        let name = component
        if (name instanceof Array) {
          name = name.join('')
        }
        return `  ${name}`
      }
    ).join(',\n')
  ).join(',\n\n')

  const registrations = families.map(
    family => componentsRegistry[family].map(
      component => {
        let name = component
        if (name instanceof Array) {
          name = name.join('')
        }
        return `    Vue.component('${name}', ${name})`
      }
    ).join('\n')
  ).join('\n\n')
  process.stdout.write(chalk.green('done\n'))

  const indexStencilContent = fs.readFileSync(
    variables.libraryStencilPath,
    {
      encoding: 'utf-8'
    }
  )
  return indexStencilContent
    .replace('{{imports}}', imports)
    .replace('{{components}}', components)
    .replace('{{registrations}}', registrations)
}

function build (source, destination) {
  let target = '--target lib'
  let name = '--name vocabulary'
  let dest = `--dest ${destination}`
  let options = [
    target,
    name,
    dest
  ].join(' ')

  const cmd = `vue-cli-service build ${options} ${source}`

  childProcess.execSync(cmd, { stdio: 'ignore' })
}

function put (files, source, destination, move = false) {
  files.forEach(file => {
    if (move) {
      fs.moveSync(
        path.resolve(source, file),
        path.resolve(destination, file)
      )
    } else {
      fs.copySync(
        path.resolve(source, file),
        path.resolve(destination, file)
      )
    }
  })
}
