const rules = {
  'properties-order': 'alphabetical',
};

module.exports = (config) => {
  config.plugins = Object.assign({},
    config.plugins,
    {
      'postcss-sorting': { rules },
    }
  );

  return config;
};
