/**
 * This function helps set the correct Source code for a Vue component documentation
 * @param Story
 * @param source {string}
 */
export const addSource = (Story, source) => {
  Story.parameters = { docs: { source: { code: source } } }
}
