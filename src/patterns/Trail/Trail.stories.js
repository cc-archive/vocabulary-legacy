import Trail from '@/patterns/Trail/Trail'
import TrailCrumb from '@/patterns/Trail/TrailCrumb'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'

import Invertible from '@/knobs/invertible'

export default { title: 'Patterns|Trail' }

export const branded = () => ({
  mixins: [Branded],
  components: { Trail, TrailCrumb },
  template: `
    <Trail :brand="brand">
      <TrailCrumb>Top</TrailCrumb>
      <TrailCrumb>Middle</TrailCrumb>
      <TrailCrumb>Bottom</TrailCrumb>
    </Trail>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Trail, TrailCrumb },
  template: `
    <Trail :color="color" :shade="shade">
      <TrailCrumb>Top</TrailCrumb>
      <TrailCrumb>Middle</TrailCrumb>
      <TrailCrumb>Bottom</TrailCrumb>
    </Trail>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Trail, TrailCrumb },
  template: `
    <Trail :is-inverted="isInverted">
      <TrailCrumb>Top</TrailCrumb>
      <TrailCrumb>Middle</TrailCrumb>
      <TrailCrumb>Bottom</TrailCrumb>
    </Trail>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}
