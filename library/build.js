const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const childProcess = require('child_process')

const variables = require('./variables')

const componentsRegistry = require('./components.json')

const families = ['elements', 'layouts', 'patterns', 'templates']

console.log(
  chalk.blue.inverse(`● Bundling ${variables.verboseName} library\n`)
)

clearDir(variables.distDir)

indexComponents()

buildLibrary(path.join(variables.distDir, 'css'))

copySources(variables.distDir)

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
  families.forEach(
    family => {
      build(
        path.join(variables.srcDir, family),
        path.join(directory, family)
      )
    }
  )
  build(
    variables.srcIndexPath,
    directory
  )
  build(
    variables.srcRootPath,
    directory
  )
  process.stdout.write(chalk.green('done\n'))
}

function copySources (directory) {
  process.stdout.write(chalk.yellow(
    'Copying sources to',
    chalk.bold(directory),
    '... '
  ))

  let files

  // Copy Stylus files to their own directory
  files = [
    'index.styl',
    'root.styl',
    'styles',
    ...families.filter(family => family !== 'templates'),
    'templates/Index.styl'
  ]
  put(files, variables.srcDir, path.join(directory, 'styl'))

  // Copy assets to their own directory
  files = [
    'assets'
  ]
  put(files, variables.srcDir, directory)

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

  // Copy token datafiles to their own directory
  files = [
    'tokens.raw.json',
    'tokens.scss',
    'tokens.styl'
  ]
  put(files, variables.tokensDir, path.join(directory, 'tokens'))

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
        let name = component
        if (name instanceof Array) {
          name = name.join('')
        }
        return `@import "./${family}/${name}.styl"`
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
  return indexStencilContent.replace('{{imports}}', imports)
}

function build (source, destination) {
  let dest = `--out ${destination}`
  let options = [
    '--compress',
    dest
  ].join(' ')

  const cmd = `stylus -u autoprefixer-stylus ${options} ${source}`

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
