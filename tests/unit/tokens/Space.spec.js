import { shallowMount } from '@vue/test-utils'

import Space from '@/tokens/Spaces/Space'

describe('Space.vue', () => {
  let propsData, options

  beforeEach(() => {
    let name = 'rspace_dedh'
    let value = '1.5rem'
    let comment = 'Extreme spacing in rem units'

    propsData = {
      name,
      value,
      comment
    }
    options = {
      propsData
    }
  })

  it('renders correct box', () => {
    const wrapper = shallowMount(Space, options)

    expect(
      wrapper.find('div.box').element.style.height
    ).toBe(
      '1.5rem'
    )
  })

  it('renders correct space name', () => {
    const wrapper = shallowMount(Space, options)

    expect(
      wrapper.vm.properName
    ).toEqual(
      'Dedh'
    )
  })

  it('renders correct style name', () => {
    const wrapper = shallowMount(Space, options)

    expect(
      wrapper.vm.styleName
    ).toEqual(
      'rspace-dedh'
    )
  })
})
