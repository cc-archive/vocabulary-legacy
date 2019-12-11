import { shallowMount } from '@vue/test-utils'

import Color from '@/tokens/Colors/Color'

describe('Color.vue', () => {
  let propsData, options

  beforeEach(() => {
    let category = 'function'
    let subcategory = 'oxford'
    let colors = [{
      name: 'color_function_oxford_blue',
      value: 'rgb(0, 33, 71)',
      comment: 'Official color of the University of Oxford'
    }]

    propsData = {
      category,
      subcategory,
      colors
    }
    options = {
      propsData
    }
  })

  it('renders correct swatch', () => {
    const wrapper = shallowMount(Color, options)

    expect(
      wrapper.find('.swatch').element.style.backgroundColor
    ).toContain(
      'rgb(0, 33, 71)'
    )
  })

  it('renders correct subcategory name', () => {
    const wrapper = shallowMount(Color, options)

    expect(
      wrapper.vm.properSubcategory
    ).toEqual(
      'Oxford'
    )
  })
})
