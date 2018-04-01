const rules = {
  'at-rule-empty-line-before': ['always', {
    except: [
      'blockless-after-same-name-blockless',
      'first-nested',
    ],
    ignore: ['after-comment'],
  }],
  'at-rule-name-case': 'lower',
};

// https://stylelint.io/user-guide/rules/#at-rule
module.exports = (config) => {
  config.rules = { ...config.rules, ...rules };
  return config;
};
