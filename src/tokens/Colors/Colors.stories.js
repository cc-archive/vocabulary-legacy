import Colors from '@/tokens/Colors/Colors'

export default { title: 'Tokens|Colors' }

export const hues = () => ({
  render: (h) => <Colors category="hue"/>
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
