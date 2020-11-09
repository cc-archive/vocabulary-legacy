import VHeader from './VHeader'
import ChooserLogo from '@creativecommons/vocabulary/assets/logos/products/chooser.svg?inline'
import MenuItem from './MenuItem'
import { addDescription } from '../../utils/addDescription'

export default {
  title: 'Elements/VHeader',
  component: VHeader
}

let menuItems = `
<MenuItem tag="a" href="/whatever" label="Item One" />
<MenuDropdown label="Item Three">
  <MenuItem tag="a" href="/whatever" label="Item Three A" />
  <MenuItem tag="a" href="/whatever" label="Item Three B" />
</MenuDropdown>
<MenuItem href="/whatever" label="Item Two" />`

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VHeader },
  template: `<VHeader v-bind="$props"><slot #menu-items>${menuItems}</slot></VHeader>`
})

export const Default = Template.bind({})

export const ChooserHeader = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VHeader, MenuItem, ChooserLogo },
  template: `<VHeader v-bind="$props">
<template #logo><ChooserLogo /></template>
<template #menu-items>
<MenuItem tag="a" href="https://docs.google.com/forms/d/e/1FAIpQLSfF7MCKxlPsPuMn17v_sLYWMkxBkudQSPXCXoJKjh5GCtx63g/viewform" label="Feedback" />
</template></VHeader>`
})
addDescription(ChooserHeader, 'This is a sample header for the Chooser page. It uses `<ChooserLogo />` svg component as the logo, and one `<MenuItem>` component.')

export const IntlHeader = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VHeader, MenuItem, ChooserLogo },
  template: `<VHeader v-bind="$props">
<template #menu-items>
<MenuItem tag="a" href="/menu_item" :label="$t('Menu Item')" />
</template></VHeader>`
})
addDescription(IntlHeader, 'When using i18n, you should pass translated strings to the header')
