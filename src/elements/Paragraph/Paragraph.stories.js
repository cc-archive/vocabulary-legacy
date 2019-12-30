import Paragraph from '@/elements/Paragraph/Paragraph'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'

import Text from '@/knobs/text'

import { select } from '@storybook/addon-knobs'

export default { title: 'Elements|Paragraph' }

export const branded = () => ({
  mixins: [Branded],
  components: { Paragraph },
  template: `
    <Paragraph :brand="brand">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Paragraph },
  template: `
    <Paragraph :color="color" :shade="shade">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Paragraph },
  template: `
    <Paragraph :indication="indication">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
  `
})

export const densities = () => ({
  components: { Paragraph },
  props: {
    density: {
      default: select(
        'Density',
        {
          Dense: 'dense',
          Normal: 'normal',
          Sparse: 'sparse'
        },
        'normal'
      )
    }
  },
  template: `
    <Paragraph :density="density">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
  `
})

export const withText = () => ({
  mixins: [Text],
  components: { Paragraph },
  template: `
    <Paragraph>
      {{ text }}
    </Paragraph>
  `
})
