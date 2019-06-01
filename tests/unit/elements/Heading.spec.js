import { shallowMount } from '@vue/test-utils'

import Heading from '@/elements/Heading/Heading'

describe('Heading.vue', () => {
  let propsData, slots, options

  beforeEach(() => {
    let level = 1
    let slot = '<span>Slot</span>'

    propsData = {
      level
    }
    slots = {
      default: slot
    }
    options = {
      propsData,
      slots
    }
  })

  it('renders correct HTML', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.is('h1')).toBe(true)
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.text()).toEqual('Slot')
  })
})
