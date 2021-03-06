const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  performance: {
    hints: false,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  }
}
