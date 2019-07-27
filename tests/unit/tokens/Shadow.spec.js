import { shallowMount } from '@vue/test-utils'

import Radius from '@/tokens/Shadows/Shadow'

describe('Shadow.vue', () => {
  let propsData, options

  beforeEach(() => {
    let name = 'shadow_plane'
    let value = '0 1em 1em 0'
    let comment = 'Object appears flying'

    propsData = {
      name,
      value,
      comment
    }
    options = {
      propsData
    }
  })

  it('renders correct saucer', () => {
    const wrapper = shallowMount(Radius, options)

    expect(
      wrapper.find('div.saucer').element.style.boxShadow
    ).toBe(
      '0 1em 1em 0 rgb(237, 237, 238)'
    )
  })

  it('renders correct radius name', () => {
    const wrapper = shallowMount(Radius, options)

    expect(
      wrapper.vm.properName
    ).toEqual(
      'Plane'
    )
  })

  it('renders correct style name', () => {
    const wrapper = shallowMount(Radius, options)

    expect(
      wrapper.vm.styleName
    ).toEqual(
      'shadow-plane'
    )
  })
})
