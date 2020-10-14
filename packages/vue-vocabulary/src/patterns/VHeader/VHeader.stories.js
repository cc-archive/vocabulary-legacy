import VHeader from './VHeader'

export default {
  title: 'Elements/VHeader',
  component: VHeader
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VHeader },
  template: '<VHeader v-bind="$props"></VHeader>'
})

export const Default = Template.bind({})
