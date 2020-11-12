import { figmaConfig } from '@/utils/helpers'
import VCheckbox from '@/elements/VCheckbox/VCheckbox'

const checkboxDescription = 'The Checkbox component is an essential forms component.'

export default {
  title: 'Elements/VCheckbox',
  parameters: { design: figmaConfig('603%3A3'),
    docs: { description: { component: checkboxDescription } } },
  component: VCheckbox
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VCheckbox },
  template: `
    <div class="checkbox-container">
    <h3>Checkbox selected values</h3>
    <div>
      <p>Default checkbox: <b>{{defaultCheckbox}}</b></p>
      <p>Checked checkbox: <b>{{checkedCheckbox}}</b></p>
      <p>Disabled checkbox: <b>{{disabledCheckbox}}</b></p>
      <p>Disabled Checked checkbox: <b>{{disabledCheckedCheckbox}}</b></p>
      <p>Long checkbox: <b>{{longCheckbox}}</b></p>
    </div>
    <v-checkbox v-model="defaultCheckbox">Default Option</v-checkbox>
    <v-checkbox v-model="checkedCheckbox">Checked Option</v-checkbox>
    <v-checkbox v-model="disabledCheckbox" :disabled="true">Disabled Option</v-checkbox>
    <v-checkbox v-model="disabledCheckedCheckbox" :disabled="true">Disabled Checked Option</v-checkbox>
    <v-checkbox v-model="longCheckbox">
      This is a long label for agreement with conditions of a license. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.</v-checkbox>
    </div>
    `,
  data: () => {
    return {
      defaultCheckbox_: undefined,
      checkedCheckbox_: true,
      disabledCheckbox_: undefined,
      disabledCheckedCheckbox_: true,
      longCheckbox_: undefined
    }
  },
  computed: {
    longCheckbox: {
      get () {
        return this.longCheckbox_
      },
      set (newVal) {
        this.longCheckbox_ = newVal
      }
    },
    disabledCheckedCheckbox: {
      get () {
        return this.disabledCheckedCheckbox_
      },
      set (newVal) {
        this.disabledCheckedCheckbox_ = newVal
      }
    },
    disabledCheckbox: {
      get () {
        return this.disabledCheckbox_
      },
      set (newVal) {
        this.disabledCheckbox_ = newVal
      }
    },
    checkedCheckbox: {
      get () {
        return this.checkedCheckbox_
      },
      set (newVal) {
        this.checkedCheckbox_ = newVal
      }
    },
    defaultCheckbox: {
      get () {
        return this.defaultCheckbox_
      },
      set (newVal) {
        this.defaultCheckbox_ = newVal
      }
    }
  }
})
export const Default = Template.bind({})
