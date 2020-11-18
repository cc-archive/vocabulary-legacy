import VInput from './VInput'
import { figmaConfig } from '@/utils/helpers'
import { addSource } from '@/utils/addSource'

export default {
  title: 'Elements/VInput',
  parameters: { design: figmaConfig('10244%3A140'),
    docs: {
      description: {
        component: `The Input component can be an input or a textarea. You can modify size, type, add label and/or description and icons` } } },
  component: VInput
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
  data: () => {
    return {
      text: ''
    }
  },
  methods: {
    onInput (event) {
      this.text = event.target.value
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.text
      },
      set (newVal) {
        this.text = newVal
      }
    }
  }
})

const inputValue = 'value1'

export const Default = Template.bind({})

export const Medium = Template.bind({})
Medium.args = { size: 'is-medium', label: 'Input label', description: 'Input description', 'v-model': inputValue }
addSource(Medium, '<VInput size="is-medium" label="Input label" description="Input description" v-model ="inputValue" />')

export const Large = Template.bind({ })
Large.args = { size: 'is-large', label: '' }
addSource(Large, '<VInput size="is-large" label="" v-model ="inputValue" />')

export const Textarea = Template.bind({ })
Textarea.args = { isTextArea: true, value: 'Textarea long text' }
addSource(Textarea, '<VInput :is-text-area="true" v-model="Textarea long text" />')
