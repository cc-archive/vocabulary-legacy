import { withKnobs, number, select } from '@storybook/addon-knobs'
import { config, withDesign } from 'storybook-addon-designs'

export default {
  title: 'Typography',
  decorators: [withKnobs, withDesign]
}

const generateKnob = () => {
  const defaultValue = 1
  const options = {
    range: true,
    min: 1,
    max: 6,
    step: 1
  }
  return number('Header Size', defaultValue, options)
}

export const HeaderAs = () => {
  const headerSize = generateKnob()
  return `<h${headerSize}>This is a text</h${headerSize}>`
}
HeaderAs.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=445%3A1053'
    })
  }
}

export const HeaderBs = () => {
  const headerSize = generateKnob()
  return `<h${headerSize} class="b-header">This is a text</h${headerSize}>`
}

export const BodyText = () => {
  const FontSize = {
    Normal: 'text-normal',
    Small: 'text-small',
    Big: 'text-big',
    Bigger: 'text-bigger'
  }

  const fontSize = select('FontSize', FontSize, FontSize.Normal)
  return `<p class="${fontSize}">This is a text</p>`
}

BodyText.story = { name: 'Body Text' }

export const Value = () => '<p class="value">000</p>'
