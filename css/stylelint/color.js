const rules = {
  'color-hex-case': 'upper',
};

// https://stylelint.io/user-guide/rules/#color
module.exports = (config) => {
  config.rules = { ...config.rules, ...rules };
  return config;
};
