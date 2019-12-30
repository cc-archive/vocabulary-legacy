import Tabbed from '@/layouts/Tabbed/Tabbed'
import TabbedPane from '@/layouts/Tabbed/TabbedPane'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Simplified from '@/knobs/simplified'

import Invertible from '@/knobs/invertible'
import Raisable from '@/knobs/raisable'
import { boolean } from '@storybook/addon-knobs'

export default { title: 'Layouts|Tabbed' }

export const branded = () => ({
  mixins: [Branded],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :brand="brand">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :color="color" :shade="shade">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :indication="indication">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :simplicity="simplicity">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const roundable = () => ({
  components: { Tabbed, TabbedPane },
  props: {
    isRounded: {
      default: () => boolean('Is rounded?', true)
    }
  },
  template: `
    <Tabbed :is-rounded="isRounded">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :is-inverted="isInverted">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const raised = () => ({
  mixins: [Raisable],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :is-raised="isRaised">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})
