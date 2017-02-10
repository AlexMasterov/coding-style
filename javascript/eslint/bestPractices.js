const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// http://eslint.org/docs/rules/#best-practices
module.exports = (config) => {
  config.rules = Object.assign({},
    config.rules,
    {
      'no-extra-semi': ERROR,
      'no-multi-spaces': [ERROR, {
        exceptions: {
          Property: false,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }],
      'block-scoped-var': WARNING,
      'complexity': [WARNING, 40],
      'curly': [WARNING, 'multi-line'],
      'default-case': WARNING,
      'dot-notation': [ERROR, {
        allowKeywords: true
      }],
      'eqeqeq': WARNING,
      'guard-for-in': WARNING,
      'no-alert': ERROR,
      'no-with': WARNING
    }
  );

  return config;
};
