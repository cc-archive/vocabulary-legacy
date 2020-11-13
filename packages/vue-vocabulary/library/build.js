const fs = require('fs-extra')
const chalk = require('chalk')
const path = require('path')

const { srcDir, srcIndexPath, verboseName, libraryStencilPath } = require('./variables')

console.log(
  chalk.blue.inverse(`● Indexing ${verboseName}`)
)
indexComponents()
console.log(
  chalk.green.inverse('\n✔ Done.')
)

// Functions

function indexComponents () {
  const fileContent = formContent()
  writeIndex(fileContent)
}

function isDir (item) {
  return fs.lstatSync(item).isDirectory()
}

/**
 * Returns an array of Paths inside the directory, filtered by `callback`
 * @param {string} dirPath - Directory to search in
 * @param {function} callback - filter function, by default it filters only directories
 * @returns {string[]}
 */
function listDirPaths (dirPath, callback = isDir) {
  return fs.readdirSync(dirPath)
    .map((item) => path.join(dirPath, item))
    .filter((item) => callback(item))
}

/**
 * Walks the directory to depth `depth` and finds all Vue components,
 * i.e. files with '.vue' extension
 * @param {string} directory - Directory to search for Vue components
 * @param {number} depth - Depth until which to search
 * @returns {string[]|[]} - List of Vue component relative paths (Unix-style)
 */
function getVueComponentsFromDir (directory, depth) {
  if (!fs.existsSync(directory)) return []
  let subdirPaths = [directory]
  const isVueComponent = (item) => (path.extname(item) === '.vue')
  for (let i = 0; i <= depth; i++) {
    const currentCallback = i === depth ? isVueComponent : isDir
    subdirPaths = subdirPaths
      .reduce((res, item) => [...res, ...listDirPaths(item, currentCallback)], [])
  }
  return subdirPaths
}

function formContent () {
  process.stdout.write(chalk.yellow(
    '├─ Forming content for index at',
    chalk.bold(srcIndexPath),
    '... '
  ))

  /**
   * Returns an array of all Vue components' paths in the `srcDir` 2 levels deep:
   * i.e. `./(1)elements/(2)DonateButton/DonateButton.vue`
   * @type {string[]|[]} - relative Posix paths of Vue components
   */
  const comps = getVueComponentsFromDir(srcDir, 2)
  const libComponents = comps.map((comp) => {
    // Make sure that the path is Posix path, even if built on Windows
    const relativePath = `./${path.relative(srcDir, comp).split(path.sep).join(path.posix.sep)}`
      .replace('.vue', '')
    return { name: path.parse(comp).name, path: relativePath }
  })

  /**
   * Produces import statements for all components in libComponents list,
   * newline-separated, no comma at the end
   * @type {string}
   */
  const imports = libComponents
    .map((comp) => {
      const { name, path } = comp
      return `import ${name} from '${path}'`
    }).join('\n')
  const components = libComponents
    .map((comp, index) => {
      return index === libComponents.length - 1
        ? `  ${comp.name}`
        : `  ${comp.name},`
    })
    .join('\n')

  /**
   * Produces Vue component registration statements for all components in libComponents,
   * newline-separated
   * @type {string}
   */
  const registrations = libComponents
    .map((comp) => `    Vue.component('${comp.name}', ${comp.name})`)
    .join('\n')
  process.stdout.write(chalk.green('done\n'))

  const indexStencilContent = fs.readFileSync(
    libraryStencilPath,
    {
      encoding: 'utf-8'
    }
  )
  return indexStencilContent
    .replace('{{imports}}', imports)
    .replace('{{components}}', components)
    .replace('{{registrations}}', registrations)
}

function writeIndex (fileContent) {
  process.stdout.write(chalk.yellow(
    '└─ Writing library exports to',
    chalk.bold(srcIndexPath),
    '... '
  ))
  fs.writeFileSync(srcIndexPath, fileContent)
  process.stdout.write(chalk.green('done\n'))
}
