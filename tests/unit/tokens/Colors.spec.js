import { shallowMount } from '@vue/test-utils'

import Colors from '@/tokens/Colors/Colors'

describe('Colors.vue', () => {
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

  it('finds all brands', () => {
    propsData.category = 'brand'

    const wrapper = shallowMount(Colors, options)

    expect(Object.keys(wrapper.vm.colors).length).toBe(1)
    expect(wrapper.vm.colors['creative-commons'].length).toBe(6)
  })

  it('finds all functions', () => {
    propsData.category = 'function'

    const wrapper = shallowMount(Colors, options)

    expect(Object.keys(wrapper.vm.colors).length).toBe(10)
    expect(wrapper.vm.colors['red'].length).toBe(10)
    expect(wrapper.vm.colors['pink'].length).toBe(10)
    expect(wrapper.vm.colors['grape'].length).toBe(10)
    expect(wrapper.vm.colors['violet'].length).toBe(10)
    expect(wrapper.vm.colors['indigo'].length).toBe(10)
    expect(wrapper.vm.colors['cyan'].length).toBe(10)
    expect(wrapper.vm.colors['teal'].length).toBe(10)
    expect(wrapper.vm.colors['green'].length).toBe(10)
    expect(wrapper.vm.colors['lime'].length).toBe(10)
    expect(wrapper.vm.colors['yellow'].length).toBe(10)
  })

  it('finds all tones', () => {
    propsData.category = 'tone'

    const wrapper = shallowMount(Colors, options)

    expect(Object.keys(wrapper.vm.colors).length).toBe(4)
    expect(wrapper.vm.colors['white'].length).toBe(4)
    expect(wrapper.vm.colors['black'].length).toBe(4)
    expect(wrapper.vm.colors['grey'].length).toBe(10)
    expect(wrapper.vm.colors['pure'].length).toBe(2)
  })

  it('finds all contexts', () => {
    propsData.category = 'context'

    const wrapper = shallowMount(Colors, options)

    expect(Object.keys(wrapper.vm.colors).length).toBe(3)
    expect(wrapper.vm.colors['positive'].length).toBe(10)
    expect(wrapper.vm.colors['probably'].length).toBe(10)
    expect(wrapper.vm.colors['negative'].length).toBe(10)
  })

  it('finds all overlays', () => {
    propsData.category = 'overlay'

    const wrapper = shallowMount(Colors, options)

    expect(Object.keys(wrapper.vm.colors).length).toBe(2)
    expect(wrapper.vm.colors['white'].length).toBe(2)
    expect(wrapper.vm.colors['black'].length).toBe(2)
  })
})
