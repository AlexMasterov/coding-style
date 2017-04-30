const rules = {
  'indentation': [2],
};

// https://stylelint.io/user-guide/rules/#general--sheet
module.exports = (config) => {
  config.rules = Object.assign({}, config.rules, rules);
  return config;
};
