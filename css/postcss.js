let config = {
  use: []
};

config = require('./postcss/stylefmt')(config);
config = require('./postcss/sorting')(config);

module.exports = config;
