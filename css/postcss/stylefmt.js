const rules = {
    // Color
  'color-hex-case': 'upper',

    // Declaration
  'declaration-colon-space-after': 'always',
  'declaration-colon-space-before': 'never',

    // Block
  'block-closing-brace-newline-after': 'always',
  'block-closing-brace-newline-before': 'always',
  'block-opening-brace-newline-after': 'always',

    // Selector list
  'selector-list-comma-newline-after': 'always',

    // Number
  'number-leading-zero': 'never',
  'number-no-trailing-zeros': true,

    // String
  'string-quotes': 'double',

    // Sheet
  'indentation': [2]
};

module.exports = (config) => {
  config.use = [
    ...config.use,
    'stylefmt'
  ];

  config.stylefmt = { rules };

  return config;
};
