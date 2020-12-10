import { addParameters } from '@storybook/html'
import { create } from '@storybook/theming'

import order from './order'

import fontsSvg from '../src/assets/logos/fonts.svg'
import fontsSvgInverted from '../src/assets/logos/fonts_inverted.svg'

import '../dist/css/fonts.css'
import '../dist/css/accidenz_commons.css'

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
  brandTitle: 'Fonts',
  brandUrl: 'https://opensource.creativecommons.org/cc-fonts'
}

addParameters({
  storySort: order,
  showRoots: true,
  backgrounds,
  darkMode: {
    light: {
      ...meta,
      ...create(light),
      brandImage: fontsSvg
    },
    dark: {
      ...meta,
      ...create(dark),
      brandImage: fontsSvgInverted
    }
  }
})
