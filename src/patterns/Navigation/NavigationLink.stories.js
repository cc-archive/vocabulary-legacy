import NavigationLink from '@/patterns/Navigation/NavigationLink'
import Navigation from '@/patterns/Navigation/Navigation'

import Iconified from '@/knobs/iconified'

export default { title: 'Patterns|NavigationLink' }

export const withIcon = () => ({
  mixins: [Iconified],
  components: { Navigation, NavigationLink },
  template: `
    <Navigation>
      <NavigationLink :icon="icon">One</NavigationLink>
      <NavigationLink :icon="icon">Two</NavigationLink>
      <NavigationLink :icon="icon">Three</NavigationLink>
    </Navigation>
  `
})
