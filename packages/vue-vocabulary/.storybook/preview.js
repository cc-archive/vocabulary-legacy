import { addDecorator, addParameters } from '@storybook/vue'
import { withDesign } from "storybook-addon-designs"
import { create } from '@storybook/theming'

import vocabularySvg from '@creativecommons/vocabulary/assets/logos/products/vocabulary.svg'
import vocabularySvgInverted from '../src/assets/vocabulary_inverted.svg'

import i18n from '@/i18n'

import viewports from './viewport'
import order from './order'

import '@creativecommons/vocabulary/css/vocabulary.css'

const base = {
  colorSecondary: "rgb(251, 119, 41)",
  barSelectedColor: "rgb(251, 119, 41)",
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: '"Fira Code", monospace',
};

const light = {
  base: "light",
  colorPrimary: "rgb(0, 0, 0)",
  appBg: "rgb(255, 255, 255)",
  barTextColor: "rgb(73, 80, 87)",
  barBg: "rgb(255, 255, 255)",
  textColor: "rgb(0, 0, 0)",
  textInverseColor: "rgb(255, 255, 255)",
  ...base,
};

const dark = {
  base: "dark",
  colorPrimary: "rgb(255, 255, 255)",
  appBg: "rgb(47, 47, 47)",
  barTextColor: "rgb(193, 193, 193)",
  barBg: "rgb(47, 47, 47)",
  textColor: "rgb(255, 255, 255)",
  textInverseColor: "rgb(0, 0, 0)",
  ...base,
};

const backgrounds = {
  default: "canvas",
  values: [
    { name: "canvas", value: "#f5f5f5" },
    { name: "white", value: "#ffffff" },
    { name: "black", value: "#000000" },
  ],
};

const meta = {
  brandTitle: 'Vue Vocabulary',
  brandUrl: 'https://opensource.creativecommons.org/cc-vue-vocabulary'
}

addParameters({
  backgrounds,
  options: {
    storySort: order,
  },
  viewport: {
    viewports
  },
  darkMode: {
    light: {
      ...meta,
      ...create(light),
      brandImage: vocabularySvg
    },
    dark: {
      ...meta,
      ...create(dark),
      brandImage: vocabularySvgInverted
    }
  }
})

addDecorator(withDesign)
addDecorator(
  () => ({
    i18n,
    template: '<story/>',
    // https://github.com/storybookjs/storybook/issues/6548#issuecomment-504336665
    beforeCreate() {
      this.$root._i18n = this.$i18n
    }
  })
)
