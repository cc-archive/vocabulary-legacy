const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(mdx|js|jsx|ts|tsx)"],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias["@"] = path.resolve(__dirname, "..", "src");
    return config;
  },
};
