import { shallowMount } from '@vue/test-utils'

import Radii from '@/tokens/Radii/Radii'

describe('Radii.vue', () => {
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

  it('finds all em-based radii', () => {
    propsData.category = 'em'

    const wrapper = shallowMount(Radii, options)

    expect(
      wrapper.vm.radii.length
    ).toBe(
      3
    )
  })

  it('finds all rem-based radii', () => {
    propsData.category = 'rem'

    const wrapper = shallowMount(Radii, options)

    expect(
      wrapper.vm.radii.length
    ).toBe(
      3
    )
  })

  it('finds all special radii', () => {
    propsData.category = 'special'

    const wrapper = shallowMount(Radii, options)

    expect(
      wrapper.vm.radii.length
    ).toBe(
      3
    )
  })
})
