// Adding a description to a single story is rather convoluted. This helper simplifies the process.
export const addDescription = (Story, desc) => {
  Story.parameters = { docs: { description: { story: desc } } }
}
