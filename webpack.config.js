var webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    path: './dist',
    filename: '/app.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
