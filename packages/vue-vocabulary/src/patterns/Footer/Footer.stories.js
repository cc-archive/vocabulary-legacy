import Footer from './Footer'

export default {
  title: 'Patterns/Footer',
  component: Footer
}

const demoLinks = [
  {
    href: '#',
    content: 'Item 1'
  },
  {
    href: '#',
    content: 'Item 2'
  },
  {
    href: '#',
    content: 'Item 3'
  },
  {
    href: '#',
    content: 'Item 4'
  },
  {
    href: '#',
    content: 'Item 5'
  },
  {
    href: '#',
    content: 'Item 6'
  },
  {
    href: '#',
    content: 'Item 7'
  }
]

const Template = '<Footer v-bind="$props"></Footer>'

export const Default = () => ({
  components: { Footer },
  template: Template,
  props: {
    links: {
      default: () => demoLinks
    }
  }
})
