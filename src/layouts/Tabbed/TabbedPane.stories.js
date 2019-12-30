import Tabbed from '@/layouts/Tabbed/Tabbed'
import TabbedPane from '@/layouts/Tabbed/TabbedPane'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'

export default { title: 'Layouts|TabbedPane' }

export const branded = () => ({
  mixins: [Branded],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed brand="blue">
      <TabbedPane title="Override" :brand="brand">
        This tab overrides parent brand of blue.
      </TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed color="grape">
      <TabbedPane title="Tab 1" :color="color" :shade="shade">
        This tab overrides parent color of grape.
      </TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed indication="negative">
      <TabbedPane title="Tab 1" :indication="indication">
        This tab overrides parent indication of negative.
      </TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})
