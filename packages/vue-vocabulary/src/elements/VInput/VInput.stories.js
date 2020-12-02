import VInput from './VInput'
import { figmaConfig } from '@/utils/helpers'
import { addSource } from '@/utils/addSource'
import Search from '@creativecommons/fonts/assets/svg/symbols/search.svg?inline'
import Cross from '@creativecommons/fonts/assets/svg/symbols/times.svg?inline'

export default {
  title: 'Elements/VInput',
  parameters: { design: figmaConfig('10244%3A140'),
    docs: {
      description: {
        component: `The Input component can be a text input or a textarea. You can modify size, type, add label and/or description and icons` } } },
  component: VInput
}

const inputMethods = {
  onInput (event) {
    this.text = event.target.value
  },
  clearInput (event) {
    // Hack to get it to work in storybook
    event.currentTarget.parentElement.parentElement.querySelector('input').value = ''
    this.inputValue = ''
  }
}
const inputData = () => {
  return {
    text: ''
  }
}
const inputComputed = {
  inputValue: {
    get () {
      return this.text
    },
    set (newVal) {
      this.text = newVal
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VInput },
  template: `
    <div class="input-container" @input="onInput">
      <VInput v-bind="$props" />
      <p class="margin-top-big">Text input value: {{text}}</p>
    </div>
  `,
  methods: inputMethods,
  data: inputData,
  computed: inputComputed
})

const inputValue = 'value1'

export const Default = Template.bind({})

export const Normal = Template.bind({})
Normal.args = { label: 'Input label', description: 'Input description', placeholder: 'Placeholder text', 'v-model': inputValue }
addSource(Normal, '<VInput label="Input label" description="Input description" placeholder="Placeholder text" v-model ="inputValue" />')

export const NormalDisabled = Template.bind({})
NormalDisabled.args = { label: 'Input label', description: 'Input description', placeholder: 'Placeholder text', 'v-model': inputValue, 'is-disabled': true }
addSource(NormalDisabled, '<VInput label="Input label" description="Input description" placeholder="Placeholder text" is-disabled="true" v-model ="inputValue" />')

export const Medium = Template.bind({})
Medium.args = { size: 'is-medium', label: 'Input label', description: 'Input description', placeholder: 'Placeholder text', 'v-model': inputValue }
addSource(Medium, '<VInput size="is-medium" label="Input label" description="Input description" placeholder="Placeholder text" v-model ="inputValue" />')

export const Large = Template.bind({ })
Large.args = { size: 'is-large', label: '' }
addSource(Large, '<VInput size="is-large" label="" v-model ="inputValue" />')

export const HasIcons = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VInput, Search, Cross },
  template: `<div class="input-container" @input="onInput">
      <VInput v-bind="$props" label="Input with Icons" size="is-large" v-model="inputValue" :has-left-icon="true" :has-right-icon="true">
        <template #left-icon><Search class="icon-svg" /></template>
        <template #right-icon><Cross class="icon-svg clickable" @click="clearInput"/></template>
      </VInput>
      <p class="margin-top-big">Text input value: {{text}}</p>
    </div>`,
  methods: inputMethods,
  data: inputData,
  computed: inputComputed
})
addSource(HasIcons, `
 <VInput v-bind="$props" label="Input with Icons" size="is-large" v-model="inputValue" :has-left-icon="true" :has-right-icon="true" placeholder = 'Placeholder text'>
 <template #left-icon><Search class="icon-svg" /></template>
 <template #right-icon><Cross class="icon-svg clickable" @click="clearInput"/></template>
 </VInput>`)

export const Textarea = Template.bind({ })
Textarea.args = { isTextArea: true, placeholder: 'Textarea placeholder text' }
addSource(Textarea, '<VInput :is-text-area="true" placeholder="Textarea placeholder text" v-model="inputValue" />')

export const TextareaReadonly = Template.bind({ })
TextareaReadonly.args = { isTextArea: true, placeholder: 'Textarea placeholder text', isReadonly: true }
addSource(TextareaReadonly, '<VInput :is-text-area="true" is-readonly="true" v-model="inputValue" />')

export const Password = Template.bind({})
Password.args = { type: 'password', label: 'Password', placeholder: 'Type your password', 'v-model': inputValue }
addSource(Password, '<VInput type="password" label="Password" placeholder="Type your password" v-model ="inputValue" />')
