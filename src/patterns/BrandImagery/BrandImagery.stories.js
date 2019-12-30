import BrandImagery from '@/patterns/BrandImagery/BrandImagery'

import { select } from '@storybook/addon-knobs'

export default { title: 'Patterns|BrandImagery' }

export const creativeCommons = () => ({
  components: { BrandImagery },
  props: {
    type: {
      default: () => select('Type', {
        Wordmark: 'wordmark',
        Lettermark: 'lettermark',
        Letterheart: 'letterheart'
      }, 'wordmark')
    }
  },
  template: `
    <div>
      <BrandImagery :type="type"/>
    </div>
  `
})

export const vocabulary = () => ({
  components: { BrandImagery },
  props: {
    type: {
      default: () => select('Type', {
        Wordmark: 'wordmark',
        Lettermark: 'lettermark'
      }, 'wordmark')
    }
  },
  template: `
    <div>
      <BrandImagery brand="vocabulary" :type="type"/>
    </div>
  `
})
