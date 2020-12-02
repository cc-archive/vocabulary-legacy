  
module.exports = {
  stories: [
    './meta/*.stories.mdx',
    '../src/stories/*.stories.mdx'
  ],
  addons: [
    {
      name: 'storybook-addon-designs',
      options: {
        renderTarget: 'tab'
      }
    },
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
    '@storybook/addon-a11y', 
    'storybook-dark-mode/register'
  ]
}
