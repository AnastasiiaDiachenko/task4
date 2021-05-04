module.exports = (isProd = true) => [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    },
  },
  {
    test: /\.(svg|png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: isProd ? '[name].[ext]' : '[name].[contenthash].[ext]'
        },
      },
    ],
  }
]

