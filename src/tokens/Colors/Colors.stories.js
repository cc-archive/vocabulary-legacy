import Colors from '@/tokens/Colors/Colors'

export default { title: 'Tokens|Colors' }

export const brands = () => ({
  render: (h) => <Colors category="brand"/>
})

export const functions = () => ({
  render: (h) => <Colors category="function"/>
})

export const tones = () => ({
  render: (h) => <Colors category="tone"/>
})

export const contexts = () => ({
  render: (h) => <Colors category="context"/>
})

export const overlays = () => ({
  render: (h) => <Colors category="overlay"/>
})
