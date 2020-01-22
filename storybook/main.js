module.exports = {
  stories: [
    '../src/stories/index.stories.mdx',
    '../src/tokens/**/*.stories.js',
    '../src/elements/**/*.stories.js',
    '../src/layouts/**/*.stories.js',
    '../src/patterns/**/*.stories.js',
    '../src/templates/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ]
}
