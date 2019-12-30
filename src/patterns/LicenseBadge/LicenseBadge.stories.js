import LicenseBadge from '@/patterns/LicenseBadge/LicenseBadge'

import { select } from '@storybook/addon-knobs'

export default { title: 'Patterns|LicenseBadge' }

export const licenses = () => ({
  components: { LicenseBadge },
  props: {
    license: {
      default: () => select('License', {
        'CC [BY] Attribution': 'by',
        'CC [BY-NC] Attribution-NonCommercial': 'by-nc',
        'CC [BY-NC-ND] Attribution-NonCommercial-NoDerivs': 'by-nc-nd',
        'CC [BY-NC-SA] Attribution-NonCommercial-ShareAlike': 'by-nc-sa',
        'CC [BY-ND] Attribution-NoDerivs': 'by-nd',
        'CC [BY-SA] Attribution-ShareAlike': 'by-sa',
        'CC [0] Zero': 'zero',
        'Public Domain Mark': 'pd'
      }, 'by')
    },
    version: {
      default: () => select('Version', {
        Full: 'full',
        Reduced: 'reduced'
      }, 'full')
    }
  },
  template: `
    <LicenseBadge :license="license" :version="version"/>
  `
})
