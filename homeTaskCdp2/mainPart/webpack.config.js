const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackRules = require('./webpack.rules');
const common = require('./webpack.common');

module.exports = (env) => {
  const isProduction = !!env.production;
  const mode = isProduction ? 'production' : 'development';
  const devtool = isProduction ? 'source-map' : 'eval';
  const filename = isProduction ? '[name].[contenthash].js' : '[name].bundle.js';

  return merge(common, {
    mode,
    devtool,
    output: {
      path: path.join(__dirname, 'dist'),
      filename,
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      hot: true,
      https: false,
      port: 8080
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
        }
      })
    ]
  });
};
