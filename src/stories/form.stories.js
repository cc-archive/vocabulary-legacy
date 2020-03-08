import { config, withDesign } from 'storybook-addon-designs'

export default {
  title: 'Form',
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

export const BigTextBox = () => '<input id="input1" class="input is-large" type="text" name="input1" placeholder="Search..." /> '
BigTextBox.story =
  figmaPage('https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=647%3A567')

export const NormalTextBox = () => '<input id="input1" class="input" type="text" name="input1" placeholder="Search..." /> '
NormalTextBox.story =
  figmaPage('https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=647%3A401')
