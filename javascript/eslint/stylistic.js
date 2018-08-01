const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const rules = {
  'array-bracket-spacing': [ERROR, 'never'],
  'comma-dangle': [ERROR, 'always-multiline'],
  'indent': [WARNING, 2, {
    SwitchCase: 1,
  }],
  'jsx-quotes': [ERROR, 'prefer-single'],
  'semi': [ERROR, 'always'],
  'semi-spacing': ERROR,
  'eol-last': [ERROR, 'unix'],
  'block-spacing': [ERROR, 'always'],
  'padded-blocks': [ERROR, {
    switches: 'never',
    classes: 'never',
  }],
  'no-trailing-spaces': ERROR,
  'func-call-spacing': [ERROR, 'never'],
  'key-spacing': [ERROR, {
    afterColon: true,
  }],
  'keyword-spacing': [ERROR, {
    before: true,
    after: true,
  }],
  'object-curly-spacing': [ERROR, 'always'],
  'no-whitespace-before-property': ERROR,
  'space-before-function-paren': [ERROR, {
    anonymous: 'always',
    asyncArrow: 'always',
    named: 'never',
  }],
  'computed-property-spacing': [WARNING, 'never'],
};

// http://eslint.org/docs/rules/#stylistic-issues
module.exports = (config) => {
  config.rules = { ...config.rules, ...rules };
  return config;
};
