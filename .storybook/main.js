module.exports = {
  stories: [
    './meta/*.stories.mdx',
    '../src/stories/*.stories.mdx'
  ],
  addons: [
    'storybook-addon-designs',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs'
  ]
}
