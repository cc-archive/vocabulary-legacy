module.exports = {
  stories: [
    './meta/*.stories.*',
    '../src/stories/*.stories.*'
  ],
  addons: [
    {
      name: 'storybook-addon-designs',
      options: {
        renderTarget: 'tab'
      }
    },
    '@storybook/addon-essentials',
  ]
}
