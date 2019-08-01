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

  it('finds all hues', () => {
    propsData.category = 'hue'

    const wrapper = shallowMount(Colors, options)

    expect(
      wrapper.vm.colors.length
    ).toBe(
      36
    )
  })

  it('finds all tones', () => {
    propsData.category = 'tone'

    const wrapper = shallowMount(Colors, options)

    expect(
      wrapper.vm.colors.length
    ).toBe(
      8
    )
  })

  it('finds all contexts', () => {
    propsData.category = 'context'

    const wrapper = shallowMount(Colors, options)

    expect(
      wrapper.vm.colors.length
    ).toBe(
      9
    )
  })

  it('finds all overlays', () => {
    propsData.category = 'overlay'

    const wrapper = shallowMount(Colors, options)

    expect(
      wrapper.vm.colors.length
    ).toBe(
      4
    )
  })
})
