var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    entry: {
        javascript: "./js/app.js"
    },
    output: {
        path: './dist',
        filename: '/app.min.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
      }
    ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
      }
    ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};