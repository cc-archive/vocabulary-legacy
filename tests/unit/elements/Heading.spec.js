import { shallowMount } from '@vue/test-utils'

import Heading from '@/elements/Heading/Heading'

describe('Heading.vue', () => {
  let propsData, slots, options

  beforeEach(() => {
    propsData = {}

    let slot = '<span>Slot</span>'
    slots = {
      default: slot
    }

    options = {
      propsData,
      slots
    }
  })

  it('renders correct slot', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('renders correct text', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.text()).toEqual('Slot')
  })

  it('renders correct tag', () => {
    options.propsData.level = 1

    const wrapper = shallowMount(Heading, options)

    expect(wrapper.is('h1')).toBe(true)
  })

  it('renders correct color', () => {
    options.propsData.color = 'indigo'
    options.propsData.shade = 9

    const wrapper = shallowMount(Heading, options)

    expect(wrapper.element.classList).toContain('indigo-colored')
    expect(wrapper.element.classList).toContain('s9-shaded')
  })

  it('renders correct brand', () => {
    options.propsData.brand = 'blue'

    const wrapper = shallowMount(Heading, options)

    expect(wrapper.element.classList).toContain('blue-branded')
  })

  it('renders correct indication', () => {
    options.propsData.indication = 'positive'

    const wrapper = shallowMount(Heading, options)

    expect(wrapper.element.classList).toContain('positive-indicating')
  })
})
