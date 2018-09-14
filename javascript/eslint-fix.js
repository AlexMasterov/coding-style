module.exports = {
  root: false,

  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      arrowFunctions: true,
      impliedStrict: true,
    },
  },

  extends: [
    './eslint/es6.js',
    './eslint/stylistic.js',
    './eslint/bestPractices.js',
    './eslint/possibleErrors.js',
    // './eslint/react.js',
  ],
};
