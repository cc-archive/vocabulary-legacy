import VHeader from './VHeader'
import ChooserLogo from '@creativecommons/vocabulary/assets/logos/products/chooser.svg?inline'
import NavItem from './NavItem'
import NavDropdown from './NavDropdown'
import Locale from '../Locale/Locale'
import { addDescription } from '../../utils/addDescription'

export default {
  title: 'Elements/VHeader',
  component: VHeader
}

let menuItems = `
<NavDropdown label="Item Label">
<NavItem tag="a" href="/item" label="Dropdown Item" />
</NavDropdown>
<NavItem tag="a" href="/whatever" label="Item One" />
<NavItem tag="a" href="/whatever" label="Item External" :isExternal="true" />
<NavDropdown label="Item Three">
<NavItem tag="a" href="/whatever" label="Item Three A" />
<NavItem tag="a" href="/whatever" label="Item Three B" />
</NavDropdown>
<NavDropdown label="Item Label">
<NavItem tag="a" href="/item" label="Dropdown Item" />
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
  components: { VHeader, NavItem, ChooserLogo, Locale },
  methods: {
    setLanguage (payload) {
      console.log('setting language, ', payload)
    }
  },
  template: `<VHeader language="Russian" v-bind="{ aria_nav: 'навигация', aria_menu: 'menu' }">
    <template #locale><Locale selected-language="Russian" /></template>
    <template #menu-items>
    <NavItem tag="a" href="/menu_item" label="Пункт меню 1" />
    <NavItem tag="a" href="/menu_item" label="Пункт меню 2" :isExternal="true" />
    </template></VHeader>`
})
addDescription(
  IntlHeader,
  'When using i18n, you should pass translated strings to the header. There are two translated strings you need to provide using `v-bind="{key: value}"` syntax for accessibility: `aria_nav` and `aria_menu`. Locale emits `update` event when a language is changed'
)
