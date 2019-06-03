import { shallowMount } from '@vue/test-utils'

import Paragraph from '@/elements/Paragraph/Paragraph'

describe('Paragraph.vue', () => {
  let propsData, slots, options

  beforeEach(() => {
    let inverted = true
    let slot = '<span>Slot</span>'

    propsData = {
      inverted
    }
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

  it('renders correct style', () => {
    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.element.classList).toContain('inverted')
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
