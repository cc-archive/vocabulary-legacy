import Radii from '@/tokens/Radii/Radii'

export default { title: 'Tokens|Radii' }

export const remBased = () => ({
  render: (h) => <Radii category="rem"/>
})

export const emBased = () => ({
  render: (h) => <Radii category="em"/>
})

export const special = () => ({
  render: (h) => <Radii category="special"/>
})
