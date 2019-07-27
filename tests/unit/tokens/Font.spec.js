import { shallowMount } from '@vue/test-utils'

import Font from '@/tokens/Fonts/Font'

describe('Font.vue (size)', () => {
  let propsData, options

  beforeEach(() => {
    let property = 'size'
    let name = 'size_dedh'
    let value = '1.5000rem'
    let comment = 'Font size for <~H5 and equivalent'

    propsData = {
      property,
      name,
      value,
      comment
    }
    options = {
      propsData
    }
  })

  it('renders correct demo', () => {
    const wrapper = shallowMount(Font, options)

    expect(
      wrapper.find('div.demo').element.style.fontSize
    ).toBe(
      '1.5000rem'
    )
  })

  it('renders correct size name', () => {
    const wrapper = shallowMount(Font, options)

    expect(
      wrapper.vm.properName
    ).toEqual(
      'Dedh'
    )
  })

  it('renders correct style name', () => {
    const wrapper = shallowMount(Font, options)

    expect(
      wrapper.vm.styleName
    ).toEqual(
      'size-dedh'
    )
  })
})

describe('Font.vue (weight)', () => {
  let propsData, mocks, options

  beforeEach(() => {
    let property = 'weight'
    let name = 'weight_black'
    let value = '900'
    let comment = 'Bolder-than-bolder-than-normal weight'

    propsData = {
      property,
      name,
      value,
      comment
    }
    options = {
      propsData,
      mocks
    }
  })

  it('renders correct demo', () => {
    const wrapper = shallowMount(Font, options)

    expect(
      wrapper.find('div.demo').element.style.fontWeight
    ).toBe(
      '900'
    )
  })

  it('renders correct weight name', () => {
    const wrapper = shallowMount(Font, options)

    expect(
      wrapper.vm.properName
    ).toEqual(
      'Black'
    )
  })

  it('renders correct style name', () => {
    const wrapper = shallowMount(Font, options)

    expect(
      wrapper.vm.styleName
    ).toEqual(
      'weight-black'
    )
  })
})
