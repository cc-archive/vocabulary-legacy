import { shallowMount } from '@vue/test-utils'

import Fonts from '@/tokens/Fonts/Fonts'

describe('Fonts.vue', () => {
  let propsData, options

  beforeEach(() => {
    let property = ''

    propsData = {
      property
    }
    options = {
      propsData
    }
  })

  it('finds all font sizes', () => {
    propsData.property = 'size'

    const wrapper = shallowMount(Fonts, options)

    expect(
      wrapper.vm.values.length
    ).toBe(
      8
    )
  })

  it('finds all font weights', () => {
    propsData.property = 'weight'

    const wrapper = shallowMount(Fonts, options)

    expect(
      wrapper.vm.values.length
    ).toBe(
      9
    )
  })
})
