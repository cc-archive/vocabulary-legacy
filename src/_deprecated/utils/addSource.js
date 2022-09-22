/**
 * This function helps set the correct Source code for a Vue component documentation
 * @param Story
 * @param source {string}
 */
export const addSource = (Story, source) => {
  // eslint-disable-next-line no-param-reassign
  Story.parameters = { docs: { source: { code: source } } };
};
