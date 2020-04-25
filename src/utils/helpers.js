import { config } from 'storybook-addon-designs'

export const figmaConfig = (nodeId) => config({
  type: 'figma',
  url: `https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=${nodeId}`
})
