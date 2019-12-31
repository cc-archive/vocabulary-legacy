import ImageView from '@/elements/ImageView/ImageView'

import Scaled from '@/knobs/scaled'

import Circleable from '@/knobs/circleable'

import { boolean, select, text } from '@storybook/addon-knobs'

export default { title: 'Elements|ImageView' }

const source = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG'
const alternateText = '7 weeks old'

export const scaled = () => ({
  mixins: [Scaled],
  components: { ImageView },
  props: {
    primaryDimension: {
      default: () => select('Primary dimension', {
        Height: 'height',
        Width: 'width'
      }, 'height')
    }
  },
  data: function () {
    return { source, alternateText }
  },
  template: `
    <ImageView :source="source" :alternate-text="alternateText" :primary-dimension="primaryDimension" :size="size"/>
  `
})

export const circleable = () => ({
  mixins: [Circleable],
  components: { ImageView },
  data: function () {
    return { source, alternateText }
  },
  template: `
    <ImageView :source="source" :alternate-text="alternateText" size="huge" :is-circular="isCircular"/>
  `
})

export const hoverable = () => ({
  components: { ImageView },
  props: {
    isHoverable: {
      default: () => boolean('Is hoverable?', true)
    },
    title: {
      default: () => text('Title', '7 weeks old')
    }
  },
  data: function () {
    return { source, alternateText }
  },
  template: `
    <ImageView :source="source" :alternate-text="alternateText" :title="title" size="huge" :is-hoverable="isHoverable"/>
  `
})
