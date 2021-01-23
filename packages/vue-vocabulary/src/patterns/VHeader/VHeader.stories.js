import VHeader from './VHeader'
import ChooserLogo from '@creativecommons/vocabulary/assets/logos/products/chooser.svg?inline'
import NavItem from './NavItem'
import NavDropdown from './NavDropdown'
import { addDescription } from '../../utils/addDescription'

export default {
  title: 'Elements/VHeader',
  component: VHeader
}

let menuItems = `
<NavItem tag="a" href="/whatever" label="Item One" />
<NavItem tag="a" href="/whatever" label="Item External" :isExternal="true" />
<NavDropdown label="Item Three">
<NavItem tag="a" href="/whatever" label="Item Three A" />
<NavItem tag="a" href="/whatever" label="Item Three B" />
</NavDropdown>`

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VHeader, NavItem, NavDropdown },
  template: `<VHeader v-bind="$props"><template #menu-items>${menuItems}</template></VHeader>`
})

export const Default = Template.bind({})

export const ChooserHeader = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VHeader, NavItem, ChooserLogo },
  template: `<VHeader v-bind="$props">
<template #logo><ChooserLogo /></template>
<template #menu-items>
<NavItem tag="a" href="https://docs.google.com/forms/d/e/1FAIpQLSfF7MCKxlPsPuMn17v_sLYWMkxBkudQSPXCXoJKjh5GCtx63g/viewform" label="Feedback" :isExternal="true" />
</template></VHeader>`
})
addDescription(
  ChooserHeader,
  'This is a sample header for the Chooser page. It uses `<ChooserLogo />` svg component as the logo, and one `<NavItem>` component.'
)

export const IntlHeader = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VHeader, NavItem, ChooserLogo },
  template: `<VHeader v-bind="$props">
<template #menu-items>
<NavItem tag="a" href="/menu_item" label="Меню 1" />
<NavItem tag="a" href="/menu_item" label="Меню 2" :isExternal="true" />
</template></VHeader>`
})
IntlHeader.args = { ariaPrimaryLabel: 'Основная', ariaMenuLabel: 'Меню' }

addDescription(
  IntlHeader,
  'When using i18n, you should pass translated strings to the header. Header has two aria labels that need to be bound to it if the language is not English.'
)
