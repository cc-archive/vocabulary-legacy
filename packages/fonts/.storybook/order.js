const order = {
  'Fonts': [
    'Introduction',
    'Usage',
    'Contribution'
  ],
  'Vocabulary Icons': [],
  'Roboto Condensed': [],
  'Source Sans Pro': [],
  'Accidenz Commons': [],
  'JetBrains Mono': [],
}
const families = Object.keys(order)

export default ([, one], [, two]) => {
  if (one.kind === two.kind) {
    return 0 // Sort stories in a component as defined in the MDX file
  }
  const [famOne, componentOne] = one.kind.split('/')
  const [famTwo, componentTwo] = two.kind.split('/')
  if (famOne === famTwo) {
    if (order[famOne].length) {
      return order[famOne].indexOf(componentOne) - order[famOne].indexOf(componentTwo)
    } else {
      return componentOne.localeCompare(componentTwo) // Sort components in a family in alphabetical order
    }
  } else {
    return families.indexOf(famOne) - families.indexOf(famTwo) // Sort families according to defined order
  }
}
