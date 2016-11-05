const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

module.exports = {
    module: {
        // det här är viktigt för att minifiering av ES6 funkar
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/app.js",
    output: {
        path: "./dist",
        filename: "app.min.js"
    },
    plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    ],
};
