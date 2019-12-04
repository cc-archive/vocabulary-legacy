import Radii from '@/tokens/Radii/Radii'

export default { title: 'Tokens|Radii' }

export const remBased = () => ({
  components: { Radii },
  template: '<Radii category="rem"/>'
})

export const emBased = () => ({
  components: { Radii },
  template: '<Radii category="em"/>'
})

export const special = () => ({
  components: { Radii },
  template: '<Radii category="special"/>'
})
