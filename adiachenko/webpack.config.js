const path = require('path');
const { merge } = require('webpack-merge');
const webpackRules = require('./webpack.rules');
const common = require('./webpack.common');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProduction = !!env.production;
  const mode = isProduction ? 'production' : 'development';
  const devtool = isProduction ? 'source-map' : 'eval';
  const filename = isProduction ? '[name].[contenthash].js' : '[name].bundle.js';

  return merge(common, {
    mode,
    devtool,
    output: {
      path: path.join(__dirname, '/dist'),
      filename
    },
    module: {
      rules: webpackRules(isProduction)
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        minify: {
          collapseWhitespace: isProduction
        },
      })
    ]
  });
};
