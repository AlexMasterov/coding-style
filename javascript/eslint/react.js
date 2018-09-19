const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react'],

  rules: {
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-curly-spacing': [ERROR, 'never', {
      allowMultiline: false,
    }],
    'react/jsx-equals-spacing': [ERROR, 'never'],
    'react/jsx-tag-spacing': [ERROR, {
      beforeSelfClosing: 'always',
    }],
    'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],
    'react/self-closing-comp': [ERROR, {
      component: true,
      html: true,
    }],
  },
};
