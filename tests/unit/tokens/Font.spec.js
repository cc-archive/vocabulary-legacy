import { shallowMount } from '@vue/test-utils'

import Font from '@/tokens/Font/Font'

describe('Font.vue (size)', () => {
  let propsData, options

  beforeEach(() => {
    let property = 'size'
    let name = 'size_test'
    let value = '1.5000rem'

    propsData = {
      property,
      name,
      value
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
      'Test'
    )
  })

  it('renders correct style name', () => {
    const wrapper = shallowMount(Font, options)

    expect(
      wrapper.vm.styleName
    ).toEqual(
      'size-test'
    )
  })
})

describe('Font.vue (weight)', () => {
  let propsData, options

  beforeEach(() => {
    let property = 'weight'
    let name = 'weight_black'
    let value = '900'

    propsData = {
      property,
      name,
      value
    }
    options = {
      propsData
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
