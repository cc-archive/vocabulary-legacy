import Colors from '@/tokens/Colors/Colors'

export default { title: 'Tokens|Colors' }

export const hues = () => ({
  components: { Colors },
  template: '<Colors category="hue"/>'
})

export const tones = () => ({
  components: { Colors },
  template: '<Colors category="tone"/>'
})

export const contexts = () => ({
  components: { Colors },
  template: '<Colors category="context"/>'
})

export const overlays = () => ({
  components: { Colors },
  template: '<Colors category="overlay"/>'
})
