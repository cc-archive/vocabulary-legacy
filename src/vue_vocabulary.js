// This is the entrypoint for building Vue Vocabulary.

import '../../vocabulary-styles/dist/vocabulary/vocabulary.css'

const components = {};
const requireComponent = require.context(
    // The relative path of the components folder
    './components',
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)

    // Get PascalCase name of component
    const componentName = fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')


    components[componentName] = componentConfig.default || componentConfig
});


// to export a lib
export default {
    install: (Vue) => Object.keys(components).reduce((acc, componentName) => ({
        ...acc,
        [componentName]: Vue.component(`${componentName}`, components[componentName])
    }), {})
}