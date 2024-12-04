const { createConfig } = require('eslint-config-next');

module.exports = createConfig({
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
});
