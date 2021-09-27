// Adding a description to a single story is rather convoluted. This helper simplifies the process.
export const addDescription = (Story, desc) => {
  // eslint-disable-next-line no-param-reassign
  Story.parameters = { docs: { description: { story: desc } } };
};
