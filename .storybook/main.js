module.exports = {
  stories: [
    './meta/welcome.stories.mdx',
    './meta/usage.stories.mdx',
    '../src/**/*.stories.mdx'
  ],
  addons: [
    'storybook-addon-designs',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs'
  ]
}
