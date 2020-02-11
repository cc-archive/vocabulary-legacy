import LicenseIconography from '@/elements/LicenseIconography/LicenseIconography'

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
