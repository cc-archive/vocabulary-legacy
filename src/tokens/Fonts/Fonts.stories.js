import Fonts from '@/tokens/Fonts/Fonts'

export default { title: 'Tokens|Fonts' }

export const sizes = () => ({
  components: { Fonts },
  template: `
    <Fonts property="size"/>
  `
})

export const weights = () => ({
  components: { Fonts },
  template: `
    <Fonts property="weight"/>
  `
})
