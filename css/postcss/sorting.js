const rules = {
  'properties-order': 'alphabetical'
};

module.exports = (config) => {
  config.use = [
    ...config.use,
    'postcss-sorting'
  ];

  config['postcss-sorting'] = rules;

  return config;
};
