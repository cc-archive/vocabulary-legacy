import Button from '@/elements/Button/Button'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'

export default { title: 'Elements|Button' }

export const colored = () => ({
  mixins: [Colored],
  components: { Button },
  template: `
    <Button :color="color" :shade="shade">{{ color }} {{ shade}}</Button>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { Button },
  template: `
    <Button :brand="brand">{{ brand }}</Button>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Button },
  template: `
    <Button :indication="indication">{{ indication }}</Button>
  `
})
