import Footer from './Footer'

export default {
  title: 'Patterns/Footer',
  component: Footer
}

export const items = [
  {
    href: 'test1.com',
    content: 'test1'
  },
  {
    href: 'test1.com',
    content: 'test2'
  },
  {
    href: 'test1.com',
    content: 'test3'
  },
  {
    href: 'test1.com',
    content: 'test4'
  }
]

const Template = '<Footer v-bind="$props"></Footer>'

export const Default = () => ({
  components: { Footer },
  template: Template,
  props: {
    customItems: {
      default: () => items
    }
  }
})
