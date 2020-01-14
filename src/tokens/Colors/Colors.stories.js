import Colors from '@/tokens/Colors/Colors'

export default { title: 'Tokens|Colors' }

export const brands = () => ({
  components: { Colors },
  template: `
    <Colors category="brand"/>
  `
})

export const functions = () => ({
  components: { Colors },
  template: `
    <Colors category="function"/>
  `
})

export const tones = () => ({
  components: { Colors },
  template: `
    <Colors category="tone"/>
  `
})

export const contexts = () => ({
  components: { Colors },
  template: `
    <Colors category="context"/>
  `
})

export const overlays = () => ({
  components: { Colors },
  template: `
    <Colors category="overlay"/>
  `
})
