import { addDecorator, addParameters, } from '@storybook/html'
import { create } from '@storybook/theming'

import vocabularySvg from '../src/assets/logos/products/vocabulary.svg'
import vocabularySvgInverted from '../src/assets/logos/products/vocabulary_inverted.svg'

import { withDesign } from 'storybook-addon-designs'
import { withKnobs } from '@storybook/addon-knobs'

import viewports from './viewport'
import order from './order'

import '../dist/css/vocabulary.css'

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
  brandTitle: 'Vocabulary',
  brandUrl: 'https://opensource.creativecommons.org/cc-vocabulary'
}

addParameters({
  options: {
    showRoots: true,
    storySort: order,
  },
  backgrounds,
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
addDecorator(withKnobs)
