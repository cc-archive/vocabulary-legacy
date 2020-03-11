module.exports = {
  stories: [
    './welcome.stories.mdx',
    '../src/**/*.stories.[tj]s'
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs'
  ]
}
