import SelectField from '@/elements/SelectField/SelectField'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Rounded from '@/knobs/rounded'
import Scaled from '@/knobs/scaled'
import Simplified from '@/knobs/simplified'
import Toned from '@/knobs/toned'

import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'
import Iconified from '@/knobs/iconified'

export default { title: 'Elements|SelectField' }

const optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
]

export const branded = () => ({
  mixins: [Branded],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :brand="brand" :option-list="optionList" />
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :color="color" :shade="shade" :option-list="optionList"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :indication="indication" :option-list="optionList"/>
  `
})

export const rounded = () => ({
  mixins: [Rounded],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :roundness="roundness" :option-list="optionList"/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :size="size" :option-list="optionList"/>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :simplicity="simplicity" :option-list="optionList"/>
  `
})

export const toned = () => ({
  mixins: [Toned],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :tone="tone" :option-list="optionList"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :is-inverted="isInverted" :option-list="optionList"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const unactionable = () => ({
  mixins: [Unactionable],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :is-disabled="isDisabled" :is-read-only="isReadOnly" :option-list="optionList"/>
  `
})

export const withIcon = () => ({
  mixins: [Iconified],
  components: { SelectField },
  data: function () {
    return {
      optionList
    }
  },
  template: `
    <SelectField :icon="icon" :option-list="optionList"/>
  `
})
