module.exports = {
  stories: [
    './welcome.stories.mdx',
    '../src/**/*.stories.[tj]s',
    '../src/**/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    'storybook-addon-designs'
  ]
}
