import LicenseIconography from '@/elements/LicenseIconography/LicenseIconography'

export default {
  title: 'Elements|LicenseIconography',
  decorators: [
    () => ({ template: `<div style="font-size: 2rem;"><story/></div>` })
  ]
}

export const CC = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['']"/>
  `
})

export const BY = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['by']"/>
  `
})

export const NC = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['nc']"/>
  `
})

export const ND = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['nd']"/>
  `
})

export const SA = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['sa']"/>
  `
})

export const NC_EU = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['nc-eu']"/>
  `
})

export const NC_JP = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['nc-jp']"/>
  `
})

export const sampling = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['sampling']"/>
  `
})

export const samplingPlus = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['sampling-plus']"/>
  `
})

export const remix = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['remix']"/>
  `
})

export const share = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['share']"/>
  `
})

export const zero = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['zero']"/>
  `
})

export const PD = () => ({
  components: { LicenseIconography },
  template: `
    <LicenseIconography :icon-list="['pd']"/>
  `
})
