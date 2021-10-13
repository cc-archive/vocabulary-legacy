const glob = require('glob');

const { render } = require('./helpers');

describe('./packages/vocabulary/tests/unit/', () => {
  const components = glob.sync('./packages/vocabulary/tests/unit/*.scss')

  it.each(components)('%s compiles to CSS', (file) => {
    return render({ file });
  });
});
