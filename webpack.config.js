var debug = process.env.NODE_ENV !== "production";
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
  plugins: debug ? [] : [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
