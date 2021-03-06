const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// http://eslint.org/docs/rules/#best-practices
module.exports = {
  rules: {
    'no-extra-semi': ERROR,
    'no-multi-spaces': [ERROR, {
      exceptions: {
        Property: false,
        VariableDeclarator: true,
        ImportDeclaration: true,
      },
    }],
    'block-scoped-var': WARNING,
    'complexity': [OFF, 40],
    'curly': [WARNING, 'multi-line'],
    'default-case': OFF,
    'dot-notation': [ERROR, {
      allowKeywords: true,
    }],
    'eqeqeq': WARNING,
    'guard-for-in': WARNING,
    'no-alert': ERROR,
    'no-with': WARNING,
  },
};
