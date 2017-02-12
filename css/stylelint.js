let config = {
  rules: {}
};

config = require('./stylelint/color')(config);
config = require('./stylelint/atRule')(config);
config = require('./stylelint/sheet')(config);

module.exports = config;
