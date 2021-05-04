const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ProgressPlugin = new webpack.ProgressPlugin();
const HotModuleReplacement = new webpack.HotModuleReplacementPlugin();

const HtmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
  title: 'Movie Search'
});

module.exports = {
  ProgressPlugin,
  HotModuleReplacement,
  HtmlPlugin,
  CleanWebpackPlugin: new CleanWebpackPlugin({
    protectWebpackAssets: false,
    cleanOnceBeforeBuildPatterns: ['!*.{png,jpg,gif,svg}'],
    cleanAfterEveryBuildPatterns: ['!js', '!*.{png,jpg,gif,svg}', 'js/{theme_style,svgSprite}.js']
  })
};
