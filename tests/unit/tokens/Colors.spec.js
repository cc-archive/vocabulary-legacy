import { shallowMount } from '@vue/test-utils'

import Colors from '@/tokens/Colors/Colors'

describe('Colors.vue', () => {
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

  it('finds all color groups', () => {
    propsData.category = 'color_group'

    const wrapper = shallowMount(Colors, options)

    expect(
      wrapper.vm.colors.length
    ).toBe(
      28
    )
  })

  it('finds all color tones', () => {
    propsData.category = 'color_tone'

    const wrapper = shallowMount(Colors, options)

    expect(
      wrapper.vm.colors.length
    ).toBe(
      8
    )
  })
})
