import { shallowMount } from '@vue/test-utils'

import Spaces from '@/tokens/Spaces/Spaces'

describe('Spaces.vue', () => {
  let propsData, options

  beforeEach(() => {
    let category = ''

    propsData = {
      category
    }
    options = {
      propsData
    }
  })

  it('finds all em-based spaces', () => {
    propsData.category = 'em'

    const wrapper = shallowMount(Spaces, options)

    expect(
      wrapper.vm.spaces.length
    ).toBe(
      5
    )
  })

  it('finds all rem-based spaces', () => {
    propsData.category = 'rem'

    const wrapper = shallowMount(Spaces, options)

    expect(
      wrapper.vm.spaces.length
    ).toBe(
      5
    )
  })

  it('finds all special spaces', () => {
    propsData.category = 'special'

    const wrapper = shallowMount(Spaces, options)

    expect(
      wrapper.vm.spaces.length
    ).toBe(
      1
    )
  })
})
