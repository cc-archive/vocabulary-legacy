import NavigationLink from '@/patterns/Navigation/NavigationLink'
import Navigation from '@/patterns/Navigation/Navigation'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'

import Invertible from '@/knobs/invertible'

export default { title: 'Patterns|Navigation' }

export const branded = () => ({
  mixins: [Branded],
  components: { Navigation, NavigationLink },
  template: `
    <Navigation :brand="brand">
      <NavigationLink>One</NavigationLink>
      <NavigationLink>Two</NavigationLink>
      <NavigationLink>Three</NavigationLink>
    </Navigation>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Navigation, NavigationLink },
  template: `
    <Navigation :color="color" :shade="shade">
      <NavigationLink>One</NavigationLink>
      <NavigationLink>Two</NavigationLink>
      <NavigationLink>Three</NavigationLink>
    </Navigation>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Navigation, NavigationLink },
  template: `
    <Navigation :is-inverted="isInverted">
      <NavigationLink>One</NavigationLink>
      <NavigationLink>Two</NavigationLink>
      <NavigationLink>Three</NavigationLink>
    </Navigation>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}
