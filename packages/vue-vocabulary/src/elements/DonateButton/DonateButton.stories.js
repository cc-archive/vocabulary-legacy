import DonateButton from './DonateButton'
import { sizes } from '../../utils/values'

export default {
  title: 'Elements/Donate Button',
  parameters: {
    docs: {
      description: {
        component:
          'The donate button is a special version of the button element. It works the same way as [button](/docs/elements-button--default) but without theming.'
      }
    }
  },
  component: DonateButton,
  argTypes: {
    size: {
      control: { type: 'select', options: sizes }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DonateButton },
  template: '<DonateButton v-bind="$props">Text</DonateButton>'
})

export const Default = Template.bind({})
Default.args = {}
