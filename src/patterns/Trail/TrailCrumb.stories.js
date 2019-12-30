import Trail from '@/patterns/Trail/Trail'
import TrailCrumb from '@/patterns/Trail/TrailCrumb'

import Iconified from '@/knobs/iconified'

export default { title: 'Patterns|TrailCrumb' }

export const withIcon = () => ({
  mixins: [Iconified],
  components: { Trail, TrailCrumb },
  template: `
    <Trail>
      <TrailCrumb :icon="icon">Top</TrailCrumb>
      <TrailCrumb :icon="icon">Middle</TrailCrumb>
      <TrailCrumb :icon="icon">Bottom</TrailCrumb>
    </Trail>
  `
})
