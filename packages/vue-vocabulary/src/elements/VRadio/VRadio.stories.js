import VRadio from './VRadio'
import { figmaConfig } from '@/utils/helpers'

export default {
  title: 'Elements/VRadio',
  parameters: { design: figmaConfig('603%3A3'),
    docs: {
      description: {
        component: 'The Radio component is an essential forms component. To use it, you have to pass it a reactive value with a `get()` function and a `set()` function as a `v-model`, as in the code below:'
      } } },
  component: VRadio
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VRadio },
  template: `
    <div class="radio-container">
    Radio selected value: <b>{{radio ? radio : 'undefined'}}</b>
      <VRadio v-bind="$props" v-model="radioValue" native-value="Yes" name="radio">Yes, I do</VRadio>
      <VRadio v-bind="$props" v-model="radioValue" native-value="No" name="radio">No, I don't</VRadio>
      <VRadio v-bind="$props" v-model="radioValue" native-value="Disabled" name="radio" disabled>Disabled</VRadio>
    </div>
  `,
  data: () => {
    return {
      radio: undefined
    }
  },
  computed: {
    radioValue: {
      get () {
        return this.radio
      },
      set (newVal) {
        this.radio = newVal
      }
    }
  }
})
export const Default = Template.bind({})
