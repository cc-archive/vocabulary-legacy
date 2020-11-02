const path = require('path');

const pathToInlineSvg = path.resolve(__dirname, '../src/assets/svg/');

module.exports = ({config}) => {
  const rules = config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
  if (fileLoaderRule) {
    fileLoaderRule.exclude = pathToInlineSvg;
  }

  rules.push({
    test: /\.svg$/,
    resourceQuery: /r/,
    include: pathToInlineSvg,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
      },
    }],
  });
  rules.push({
    test: /\.svg$/,
    resourceQuery: /inline/,
    include: pathToInlineSvg,
    use: [{
      loader: 'raw-loader',
    }],
  })

  return config;
};
