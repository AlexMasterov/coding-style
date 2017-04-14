const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const rules = {
  'react/jsx-indent-props': [ERROR, 2],
  'react/jsx-curly-spacing': [ERROR, 'never', {
    allowMultiline: false,
  }],
  'react/jsx-equals-spacing': [ERROR, 'never'],
  'react/jsx-space-before-closing': [ERROR, 'always'],
  'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],
  'react/self-closing-comp': [ERROR, {
    component: true,
    html: true,
  }],
};

// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
module.exports = (config) => {
  config.parserOptions.ecmaFeatures = Object.assign({},
    config.parserOptions.ecmaFeatures,
    {
      jsx: true,
    }
  );

  config.plugins = [
    ...config.plugins,
    'react',
  ];

  config.rules = Object.assign({}, config.rules, rules);

  return config;
};
