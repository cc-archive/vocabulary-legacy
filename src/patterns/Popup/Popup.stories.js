import Popup from '@/patterns/Popup/Popup'

import Directed from '@/knobs/direction'

import { select, number } from '@storybook/addon-knobs'

export default {
  title: 'Patterns|Popup',
  decorators: [
    () => ({ template: `<div style="padding: 5em 10em;"><story/></div>` })
  ]
}

export const directed = () => ({
  mixins: [Directed],
  components: { Popup },
  template: `
    <Popup :to="direction">
      Hover over me
      <template #popup>
        I'm a popup.
      </template>
    </Popup>
  `
})

export const delayed = () => ({
  components: { Popup },
  props: {
    delay: {
      default: () => number('Delay', 1000)
    }
  },
  template: `
    <Popup :delay="delay">
      Hover over me
      <template #popup>
        I'm a popup.
      </template>
    </Popup>
  `
})

export const actioned = () => ({
  components: { Popup },
  props: {
    action: {
      default: () => select('Actions', {
        Hover: 'hover',
        Click: 'click'
      }, 'hover')
    }
  },
  template: `
    <Popup :action="action">
      Interact with me
      <template #popup>
        I'm a popup.
      </template>
    </Popup>
  `
})
