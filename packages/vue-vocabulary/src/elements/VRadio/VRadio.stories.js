import VRadio from './VRadio'
import { figmaConfig } from '@/utils/helpers'

export default {
  title: 'Elements/VRadio',
  parameters: { design: figmaConfig('603%3A3'), docs: { description: { component: 'The Radio component is an essential forms component.' } } },
  component: VRadio
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VRadio },
  template: `
    <div class="radio-container">
      Do you agree? {{radio}}
      <VRadio v-bind="$props" v-model="radioValue" native-value="yes" name="radio">Option Yes</VRadio>
      <VRadio v-bind="$props" v-model="radioValue" native-value="no" name="radio">Option No</VRadio>
    </div>
  `,
  data: () => {
    return {
      radio: 'yes'
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
  },
  methods: {
    updateRadio (val) {
      this.radio = val
    }
  }
})

export const Default = Template.bind({})
