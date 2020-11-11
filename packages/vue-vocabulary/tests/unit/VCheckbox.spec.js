import VCheckbox from '@/elements/VCheckbox/VCheckbox'
import { mount } from '@vue/test-utils'
describe('VCheckbox', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(VCheckbox, {
      slots: {
        default: 'Default Checkbox'
      }
    })
  })
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('emits "true" when checked', () => {
    const checkbox = wrapper.find('input[type="checkbox"]')
    checkbox.setChecked()
    expect(wrapper.emitted().input[0]).toEqual([true])
  })
  it('emits "false" when unchecked', async () => {
    await wrapper.setProps({
      value: true
    })
    const checkbox = wrapper.find('input[type="checkbox"]')
    expect(checkbox.element.checked).toBeTruthy()
    await checkbox.element.click()
    expect(wrapper.emitted().input[0]).toEqual([false])
  })
  it('cannot be clicked when disabled', async () => {
    await wrapper.setProps({
      value: true,
      disabled: true
    })
    const checkbox = wrapper.find('input[type="checkbox"]')
    expect(checkbox.element.checked).toBeTruthy()
    await checkbox.element.click()
    expect(wrapper.emitted().input).toBeFalsy()
  })
})
