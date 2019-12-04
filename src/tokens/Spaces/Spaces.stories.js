import Spaces from '@/tokens/Spaces/Spaces'

export default { title: 'Tokens|Spaces' }

export const remBased = () => ({
  components: { Spaces },
  template: '<Spaces category="rem"/>'
})

export const emBased = () => ({
  components: { Spaces },
  template: '<Spaces category="em"/>'
})

export const special = () => ({
  components: { Spaces },
  template: '<Spaces category="special"/>'
})
