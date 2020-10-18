module.exports = {
  stories: [
    './meta/*.stories.mdx',
    '../src/stories/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs'
  ],
  babel: async (options) => ({
    ...options,
    "presets": ["@babel/preset-react"]
  })
}
