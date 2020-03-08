import { config, withDesign } from 'storybook-addon-designs'

export default {
  title: 'Buttons',
  decorators: [withDesign]
}

const figmaPage = (figmaUrl) => ({
  parameters: {
    design: config({
      type: 'figma',
      url: figmaUrl
    })
  }
})

export const Button = () => '<button class="button big">Button</button>'
Button.story =
  figmaPage('https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=1403%3A28')

export const ButtonPrimary = () => '<button class="button is-primary big">Button</button>'
ButtonPrimary.story =
  figmaPage('https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=1403%3A23')

export const ButtonInfo = () => '<button class="button is-info">Button</button>'
ButtonInfo.story =
  figmaPage('https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=1403%3A44')

export const ButtonDonate = () => '<button class="button donate medium">Button</button>'

export const ButtonSuccess = () => '<button class="button is-success">Button</button>'

export const ButtonWarning = () => '<button class="button is-warning">Button</button>'

export const ButtonError = () => '<button class="button is-danger">Button</button>'
