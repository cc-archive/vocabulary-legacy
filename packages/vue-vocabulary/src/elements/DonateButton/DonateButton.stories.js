import DonateButton from './DonateButton'
import { sizes } from '../../utils/values'
import { addSource } from '@/utils/addSource'

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

export const Iconless = Template.bind({})
Iconless.args = { noIcon: true }
addSource(Iconless, '<DonateButton :no-icon="true">Text</DonateButton>')

export const withLink = Template.bind({})
withLink.args = { href: 'http://creativecommons.org/donate' }
addSource(withLink, '<DonateButton href="http://creativecommons.org/donate">Text</DonateButton>')

export const headerDonate = Template.bind({})
headerDonate.args = { href: 'http://creativecommons.org/donate', isHeader: true }
addSource(headerDonate, '<DonateButton href="http://creativecommons.org/donate" is-header="true">Text</DonateButton>')
