module.exports = {
  stories: [
    './meta/*.stories.mdx',
    '../src/**/*.stories.mdx'
  ],
  addons: [
    'storybook-addon-designs',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-docs'
  ]
}
