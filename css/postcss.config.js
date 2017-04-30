let config = {
  map: false,
  syntax: 'sugarss',
  plugins: [],
};

// Plugins
config = require('./postcss/stylefmt')(config);
config = require('./postcss/sorting')(config);

module.exports = config;
