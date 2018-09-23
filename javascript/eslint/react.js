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
    'react/sort-comp': [ERROR, {
      order: [
        'static-methods',
        'constructor',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        'render',
      ],
    }],
    'react/self-closing-comp': [ERROR, {
      component: true,
      html: true,
    }],

    // JSX
    'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-max-props-per-line': [ERROR, {
      maximum: 3,
    }],
    'react/jsx-curly-spacing': [ERROR, 'never', {
      allowMultiline: false,
    }],
    'react/jsx-equals-spacing': [ERROR, 'never'],
    'react/jsx-tag-spacing': [ERROR, {
      beforeSelfClosing: 'always',
    }],
  },
};
