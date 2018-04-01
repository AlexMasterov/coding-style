let config = {
  root: false,
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },

  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
    ecmaFeatures: {
      arrowFunctions: true,
      impliedStrict: true,
    },
  },

  plugins: [],
  rules: {},
};

// Rules
config = require('./eslint/es6')(config);
config = require('./eslint/stylistic')(config);
config = require('./eslint/bestPractices')(config);

// Plugins
config = require('./eslint/react')(config);

module.exports = config;
