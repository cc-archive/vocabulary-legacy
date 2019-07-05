import { shallowMount } from '@vue/test-utils'

import Paragraph from '@/elements/Paragraph/Paragraph'

describe('Paragraph.vue', () => {
  let propsData, slots, options

  beforeEach(() => {
    let isInverted = true
    let color = 'blue'
    let shade = 'dark'
    propsData = {
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
    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.is('p')).toBe(true)
  })

  it('renders correct inverted style', () => {
    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.element.classList).toContain('inverted')
  })

  it('renders correct color style', () => {
    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.element.classList).toContain('blue')
    expect(wrapper.element.classList).toContain('dark')
  })

  it('renders correct slot', () => {
    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('renders correct text', () => {
    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.text()).toEqual('Slot')
  })
})
