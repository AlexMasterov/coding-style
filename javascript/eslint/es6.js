const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// http://eslint.org/docs/rules/#ecmascript-6
module.exports = {
  rules: {
    'arrow-parens': [WARNING, 'as-needed'],
    'arrow-spacing': [ERROR, {
      before: true,
      after: true,
    }],
    'no-var': WARNING,
    'no-useless-rename': ERROR,
    'prefer-const': [ERROR, {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
    'rest-spread-spacing': [ERROR, 'never'],
    'generator-star-spacing': [ERROR, {
      before: false,
      after: true,
    }],
    'yield-star-spacing': [ERROR, 'after'],
  },
};
