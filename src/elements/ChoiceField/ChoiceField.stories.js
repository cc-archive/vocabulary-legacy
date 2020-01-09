import ChoiceField from '@/elements/ChoiceField/ChoiceField'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Simplified from '@/knobs/simplified'
import Scaled from '@/knobs/scaled'
import Toned from '@/knobs/toned'

import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'

import { boolean } from '@storybook/addon-knobs'

export default { title: 'Elements|ChoiceField' }

export const branded = () => ({
  mixins: [Branded],
  components: { ChoiceField },
  template: `
    <ChoiceField :brand="brand"/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { ChoiceField },
  template: `
    <ChoiceField :color="color" :shade="shade"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { ChoiceField },
  template: `
    <ChoiceField :indication="indication"/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { ChoiceField },
  template: `
    <ChoiceField :size="size"/>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { ChoiceField },
  template: `
    <ChoiceField :simplicity="simplicity"/>
  `
})

export const toned = () => ({
  mixins: [Toned],
  components: { ChoiceField },
  template: `
    <ChoiceField :tone="tone"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { ChoiceField },
  template: `
    <ChoiceField :is-inverted="isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const unactionable = () => ({
  mixins: [Unactionable],
  components: { ChoiceField },
  template: `
    <ChoiceField :is-disabled="isDisabled" :is-read-only="isReadOnly"/>
  `
})

export const unstyleable = () => ({
  components: { ChoiceField },
  props: {
    isUnstyled: {
      default: boolean('Is unstyled?', true)
    }
  },
  template: `
    <ChoiceField :is-unstyled="isUnstyled"/>
  `
})

export const modes = () => ({
  components: { ChoiceField },
  props: {
    isSingleSelect: {
      default: () => boolean('Is single select?', false)
    }
  },
  data: function () {
    const options = ['A', 'B']
    return {
      options,
      picked: null
    }
  },
  watch: {
    isSingleSelect: function (from, to) {
      if (from !== to) {
        this.resetPicked()
      }
    }
  },
  methods: {
    resetPicked: function () {
      this.picked = this.isSingleSelect
        ? this.options[0]
        : this.options
    }
  },
  created: function () {
    this.resetPicked()
  },
  template: `
    <div>
      <template v-for="(option, index) in options">
        <ChoiceField
          :key="index"
          v-model="picked"
          :id="index"
          name="choice"
          :value="option"
          :is-single-select="isSingleSelect"/>
        <label :for="index">
          Option {{ option }}
        </label>
      </template>
      <br/>
      Selected: {{ picked }}
    </div>
  `
})
