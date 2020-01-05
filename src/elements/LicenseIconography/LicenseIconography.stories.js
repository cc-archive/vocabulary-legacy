import LicenseIconography from '@/elements/LicenseIconography/LicenseIconography'

import { array, optionsKnob as options } from '@storybook/addon-knobs'

export default {
  title: 'Elements|LicenseIconography',
  decorators: [
    () => ({ template: `<div style="font-size: 2rem;"><story/></div>` })
  ]
}

export const creativeCommons = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['']"/>
  `
})

export const licenseAspects = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['by', 'nc', 'nd', 'sa']"/>
  `
})

export const regionSpecifics = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['nc-eu', 'nc-jp']"/>
  `
})

export const domainSpecifics = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['sampling', 'sampling-plus', 'remix', 'share']"/>
  `
})

export const publicWorks = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['zero', 'pd']"/>
  `
})

export const popupable = () => ({
  components: { LicenseIconography },
  props: {
    stringList: {
      default: () => array('String list', ['Creative Commons'])
    },
    iconList: {
      default: () => options('Icon list', {
        CC: '',
        BY: 'by',
        NC: 'nc',
        ND: 'nd',
        SA: 'sa',
        'NC-EU': 'nc-eu',
        'NC-JP': 'nc-jp',
        Sampling: 'sampling',
        'Sampling Plus': 'sampling-plus',
        Remix: 'remix',
        Share: 'share',
        Zero: 'zero',
        PD: 'pd'
      }, [''], {
        display: 'multi-select'
      })
    }
  },
  template: `
    <LicenseIconography :icon-list="iconList" :string-list="stringList"/>
  `
})
popupable.story = {
  decorators: [
    () => ({ template: `<div style="font-size: 1rem; padding: 5em 10em;"><story/></div>` })
  ]
}
