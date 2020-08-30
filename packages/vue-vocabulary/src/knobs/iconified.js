import { select } from '@storybook/addon-knobs'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faCircle,
  faSquare
} from '@fortawesome/free-solid-svg-icons'
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons'

library.add(
  faBars,
  faCircle,
  faSquare,
  faCreativeCommons
)

const iconOptions = {
  Circle: 'circle',
  Square: 'square',
  Bars: 'bars',
  'Creative Commons': 'creative-commons'
}

export default {
  props: {
    icon: {
      default: () => {
        // Change icon into an array to allow display icons from the brand set
        let icon = select('Icon', iconOptions, iconOptions['Creative Commons'])
        if (icon === 'creative-commons') {
          return ['fab', icon]
        }
        return icon
      }
    }
  }
}
