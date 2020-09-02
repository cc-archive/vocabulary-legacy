import { config } from 'storybook-addon-designs'

export const figmaConfig = (nodeId) => config({
  type: 'figma',
  url: `https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=${nodeId}`
})

export const svgCode = (viewBoxX, viewBoxY, fileName, id) => `<svg
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 ${viewBoxX} ${viewBoxY}">
  <use href="logos/${fileName}.svg#${id}"></use>
</svg>`

export const blackText = (content) => `<div class="has-text-black">${content}</div>`

export const whiteText = (content) => `<div class="has-text-white">${content}</div>`
