import Button from './Button'
import { sizes, theme } from '@/utils/values'
import { addDescription } from '@/utils/addDescription'

export default {
  title: "Elements/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select", options: sizes },
    },
    theme: {
      control: { type: "select", options: theme },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props">Text</Button>'
})

export const Default = Template.bind({})
Default.args = { theme: 'primary' }

export const Theme = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<div style="display: flex; gap: 4px;">
    <Button v-bind="$props" theme="primary">Primary</Button>
    <Button v-bind="$props" theme="secondary">Secondary</Button>
    <Button v-bind="$props" theme="info">Info</Button>
    <Button v-bind="$props" theme="warning">Warning</Button>
    <Button v-bind="$props" theme="danger">Danger</Button>
  </div>`
})
addDescription(Theme, 'Buttons can be styled with various colors. The primary button should be used for major site actions. There should rarely be more than one primary button per page.')
Theme.args = {}

export const Link = Template.bind({})
addDescription(Link, 'Buttons with `href` props will be rendered as anchor tags.')
Link.args = { href: 'https://creativecommons.org', target: '_blank' }

export const Text = Template.bind({})
addDescription(Text, 'Text buttons lack background color or border.')
Text.args = { theme: 'text' }
