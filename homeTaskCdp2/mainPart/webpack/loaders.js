const ImageLoader = {
  test: /\.(png|svg|jpg|gif)$/i,
  exclude: /icons\/.*\.svg$/,
  loader: 'file-loader'
};

const JSLoader = {
  test: /\.(js|ts)x?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    }
  ]
};

module.exports = {
  ImageLoader,
  JSLoader
};
