module.exports = {
  stories: [
    './welcome.stories.mdx',
    '../src/stories/color.stories.mdx',
    '../src/stories/typography.stories.mdx',
    '../src/stories/spacing.stories.mdx',
    '../src/**/*.stories.[tj]s',
    '../src/**/*.stories.mdx'
  ],
  addons: [
    'storybook-addon-designs',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs'
  ]
}
