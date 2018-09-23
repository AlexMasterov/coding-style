const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// http://eslint.org/docs/rules/#stylistic-issues
module.exports = {
  rules: {
    'array-bracket-spacing': [WARNING, 'never'],
    'comma-dangle': [WARNING, 'always-multiline'],
    'indent': [WARNING, 2, {
      SwitchCase: 1,
    }],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'semi': [WARNING, 'always'],
    'semi-spacing': ERROR,
    'eol-last': [WARNING, 'unix'],
    'linebreak-style': [ERROR, 'unix'],
    'block-spacing': [ERROR, 'always'],
    'padded-blocks': [ERROR, {
      switches: 'never',
      classes: 'never',
    }],
    'no-trailing-spaces': WARNING,
    'func-call-spacing': [ERROR, 'never'],
    'key-spacing': [WARNING, {
      afterColon: true,
    }],
    'keyword-spacing': [ERROR, {
      before: true,
      after: true,
    }],
    'object-curly-spacing': [ERROR, 'always'],
    'no-whitespace-before-property': WARNING,
    'space-before-function-paren': [ERROR, {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    }],
    'computed-property-spacing': [WARNING, 'never'],
  },
};
