import Definition from '@/patterns/Definition/Definition'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'

export default { title: 'Patterns|Definition' }

const content = `
  <ul>
    <li>state or describe exactly the nature, scope, or meaning of</li>
    <li>give the meaning of a word or phrase, especially in a dictionary</li>
    <li>make up or establish the character or essence of</li>
  </ul>
`

export const branded = () => ({
  mixins: [Branded],
  components: { Definition },
  template: `
    <Definition :brand="brand" word="de·fine" pronunciation="dɪˈfʌɪn" part-of-speech="verb">
      ${content}
    </Definition>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Definition },
  template: `
    <Definition :color="color" word="de·fine" pronunciation="dɪˈfʌɪn" part-of-speech="verb">
      ${content}
    </Definition>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Definition },
  template: `
    <Definition :indication="indication" word="de·fine" pronunciation="dɪˈfʌɪn" part-of-speech="verb">
      ${content}
    </Definition>
  `
})
