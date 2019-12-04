import Spaces from '@/tokens/Spaces/Spaces'

export default { title: 'Tokens|Spaces' }

export const remBased = () => ({
  render: (h) => <Spaces category="rem"/>
})

export const emBased = () => ({
  render: (h) => <Spaces category="em"/>
})

export const special = () => ({
  render: (h) => <Spaces category="special"/>
})
