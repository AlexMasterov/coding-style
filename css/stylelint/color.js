const rules = {
  'color-hex-case': 'upper'
};

// https://stylelint.io/user-guide/rules/#color
module.exports = (config) => {
  config.rules = Object.assign({}, config.rules, rules);
  return config;
};
