import { shallowMount } from '@vue/test-utils'

import Shadows from '@/tokens/Shadows/Shadows'

describe('Shadows.vue', () => {
  let propsData, options

  beforeEach(() => {
    options = {
      propsData
    }
  })

  it('finds all shadows', () => {
    const wrapper = shallowMount(Shadows, options)

    expect(
      wrapper.vm.shadows.length
    ).toBe(
      3
    )
  })
})
