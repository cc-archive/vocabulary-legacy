import { shallowMount } from '@vue/test-utils'

import Colors from '@/tokens/Colors/Colors'

describe('Colors.vue', () => {
  let propsData, options

  beforeEach(() => {
    let group = ''

    propsData = {
      group
    }
    options = {
      propsData
    }
  })

  it('finds all colors', () => {
    propsData.group = 'meh'

    const wrapper = shallowMount(Colors, options)

    expect(
      wrapper.vm.colors.length
    ).toBe(
      36
    )
  })

  it('finds all tones', () => {
    propsData.group = 'tone'

    const wrapper = shallowMount(Colors, options)

    expect(
      wrapper.vm.colors.length
    ).toBe(
      8
    )
  })

  it('finds all contexts', () => {
    propsData.group = 'context'

    const wrapper = shallowMount(Colors, options)

    expect(
      wrapper.vm.colors.length
    ).toBe(
      3
    )
  })
})
