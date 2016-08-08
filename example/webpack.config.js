const reforgeConfig = require('reforge/config/webpack.config');
const postcssPlugins = require('reforge/config/postcss-plugins');

const merge = require('webpack-merge');
const override = {
  postcss: postcssPlugins,
  entry: {
    index: 'example/index.js'
  }
};

module.exports = merge(reforgeConfig, override);
