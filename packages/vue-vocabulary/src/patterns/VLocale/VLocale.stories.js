import VLocale from '@/patterns/VLocale/VLocale'

export default {
  title: 'Patterns/VLocale',
  component: VLocale
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VLocale },
  template: `<div class="navbar"><VLocale v-bind="$props"></VLocale></div>`
})

export const Default = Template.bind({})
