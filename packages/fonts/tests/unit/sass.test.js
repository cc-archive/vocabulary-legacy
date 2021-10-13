const glob = require('glob');

const { render } = require('./helpers');

describe('./packages/fonts/tests/unit/', () => {
  const components = glob.sync('./packages/fonts/tests/unit/*.scss');

  it.each(components)('%s compiles to CSS', (file) => {
    return render({ file });
  });
});
