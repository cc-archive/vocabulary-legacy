import Fonts from '@/tokens/Fonts/Fonts'

export default { title: 'Tokens|Fonts' }

export const sizes = () => ({
  render: (h) => <Fonts property="size"/>
})

export const weights = () => ({
  render: (h) => <Fonts property="weight"/>
})
