const falafel = require('falafel'); // eslint-disable-line import/no-extraneous-dependencies
const babel = require('@babel/core');
const jestPreset = require('babel-preset-jest');

module.exports.process = (src, filename) => {
  let output = falafel(src, { sourceType: 'module' }, (node) => { // AST just to import getStorybook. overkill?
    if (node.type === 'ImportSpecifier' && node.imported.name === 'storiesOf') {
      node.update(`${node.source()}, getStorybook`);
    }
  });

  output = `
import addons, { mockChannel } from '@storybook/addons';
addons.setChannel(mockChannel());
${output.toString()}
const storybook = getStorybook();
storybook.forEach((story) => {
story.stories.forEach((subStory) => {
describe(story.kind, () => {
it(subStory.name, () => {
expect(subStory.render()).toMatchSnapshot();
}); }); }); });`;

  if (babel.util.canCompile(filename)) {
    src = babel.transform(output, {
      filename,
      presets: [jestPreset],
    });
  }

  return src;
};
