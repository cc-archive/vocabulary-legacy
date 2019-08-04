import { shallowMount } from '@vue/test-utils'

import Paragraph from '@/elements/Paragraph/Paragraph'

describe('Paragraph.vue', () => {
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
    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('renders correct text', () => {
    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.text()).toEqual('Slot')
  })

  it('renders correct tag', () => {
    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.is('p')).toBe(true)
  })

  it('renders correct color', () => {
    options.propsData.color = 'blue'
    options.propsData.shade = 'dark'

    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.element.classList).toContain('blue-colored')
    expect(wrapper.element.classList).toContain('dark-shaded')
  })

  it('renders correct indication', () => {
    options.propsData.indication = 'positive'

    const wrapper = shallowMount(Paragraph, options)

    expect(wrapper.element.classList).toContain('positive-indicating')
  })
})
