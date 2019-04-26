const path = require('path');
const merge = require('webpack-merge');
const createDefaultConfigs = require('@open-wc/building-webpack/modern-and-legacy-config');

// If you don't need IE11 support, use the modern-config instead
// import createDefaultConfig from '@open-wc/building-webpack/modern-config';

// module.exports = createDefaultConfig({
//   input: path.resolve(__dirname, './index.html'),
// });


const configs = createDefaultConfigs({
  input: path.resolve(__dirname, './src/index.html'),
});

/* eslint-disable no-undef */
module.exports = merge(configs, {
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
/* eslint-enable no-undef */
