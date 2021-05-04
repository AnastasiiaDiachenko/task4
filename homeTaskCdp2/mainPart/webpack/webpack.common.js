const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.ImageLoader
    ]
  },
  plugins: [
    plugins.ProgressPlugin,
    plugins.CleanWebpackPlugin,
    plugins.HotModuleReplacement,
    plugins.HtmlPlugin
  ]
};
