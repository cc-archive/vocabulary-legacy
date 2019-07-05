import { shallowMount } from '@vue/test-utils'

import Heading from '@/elements/Heading/Heading'

describe('Heading.vue', () => {
  let propsData, slots, options

  beforeEach(() => {
    let level = 1
    let isInverted = true
    let color = 'blue'
    let shade = 'dark'
    propsData = {
      level,
      isInverted,
      color,
      shade
    }

    let slot = '<span>Slot</span>'
    slots = {
      default: slot
    }

    options = {
      propsData,
      slots
    }
  })

  it('renders correct tag', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.is('h1')).toBe(true)
  })

  it('renders correct inverted style', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.element.classList).toContain('inverted')
  })

  it('renders correct color style', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.element.classList).toContain('blue')
    expect(wrapper.element.classList).toContain('dark')
  })

  it('renders correct slot', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('renders correct text', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.text()).toEqual('Slot')
  })
})
