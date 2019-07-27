import { shallowMount } from '@vue/test-utils'

import Radius from '@/tokens/Radii/Radius'

describe('Radius.vue', () => {
  let propsData, options

  beforeEach(() => {
    let name = 'rradius_dedh'
    let value = '1.5rem'
    let comment = 'Extremely rounded radius in rem units'

    propsData = {
      name,
      value,
      comment
    }
    options = {
      propsData
    }
  })

  it('renders correct rectangle', () => {
    const wrapper = shallowMount(Radius, options)

    expect(
      wrapper.find('div.rectangle').element.style.borderRadius
    ).toBe(
      '1.5rem'
    )
  })

  it('renders correct radius name', () => {
    const wrapper = shallowMount(Radius, options)

    expect(
      wrapper.vm.properName
    ).toEqual(
      'Dedh'
    )
  })

  it('renders correct style name', () => {
    const wrapper = shallowMount(Radius, options)

    expect(
      wrapper.vm.styleName
    ).toEqual(
      'rradius-dedh'
    )
  })
})
