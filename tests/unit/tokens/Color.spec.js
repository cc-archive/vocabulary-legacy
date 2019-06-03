import { shallowMount } from '@vue/test-utils'

import Color from '@/tokens/Color/Color'

describe('Color.vue', () => {
  let propsData, options

  beforeEach(() => {
    let name = 'color_oxford_blue'
    let value = 'rgb(0, 38, 77)'

    propsData = {
      name,
      value
    }
    options = {
      propsData
    }
  })

  it('renders correct swatch', () => {
    const wrapper = shallowMount(Color, options)

    expect(
      wrapper.find('div.swatch').element.style.backgroundColor
    ).toContain(
      'rgb(0, 38, 77)'
    )
  })

  it('renders correct color name', () => {
    const wrapper = shallowMount(Color, options)

    expect(
      wrapper.vm.properName
    ).toEqual(
      'Oxford Blue'
    )
  })

  it('renders correct style name', () => {
    const wrapper = shallowMount(Color, options)

    expect(
      wrapper.vm.styleName
    ).toEqual(
      'color-oxford-blue'
    )
  })
})
