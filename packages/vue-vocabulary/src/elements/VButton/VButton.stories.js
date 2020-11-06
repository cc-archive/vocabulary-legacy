import VButton from './VButton'
import { sizes, theme } from '@/utils/values'
import { addDescription } from '@/utils/addDescription'
import { addSource } from '@/utils/addSource'

export default {
  title: 'Elements/VButton',
  component: VButton,
  argTypes: {
    size: {
      control: { type: 'select', options: sizes }
    },
    theme: {
      control: { type: 'select', options: theme }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VButton },
  template: '<VButton v-bind="$props">Text</VButton>'
})

export const Default = Template.bind({})
addSource(Default, `<VButton>Text</VButton>`)

export const Theme = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VButton },
  template: `<div style="display: flex; gap: 4px;">
    <VButton v-bind="$props" theme="primary">Primary</VButton>
    <VButton v-bind="$props" theme="success">Success</VButton>
    <VButton v-bind="$props" theme="info">Info</VButton>
  </div>`
})
addDescription(Theme, 'Buttons can be styled with various colors. The primary button should be used for major site actions. There should rarely be more than one primary button per page.')
Theme.args = {}
addSource(Theme, `<VButton theme="primary">Primary</VButton>
<VButton theme="success">Success</VButton>
<VButton theme="info">Info</VButton>`)

export const Link = Template.bind({})
addDescription(Link, 'Buttons with `href` props will be rendered as anchor tags.')
Link.args = { href: 'https://creativecommons.org', target: '_blank' }
addSource(Link, `<VButton href="https://creativecommons.org" target: "_blank">Button</VButton>`)

export const Text = Template.bind({})
addDescription(Text, 'Text buttons lack background color or border.')
Text.args = { theme: 'text' }
addSource(Text, `<VButton theme="text">Button</VButton>`)
