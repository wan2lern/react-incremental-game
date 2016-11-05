// webpack konfigurationsfil
// minifiering sker med Terminal kommando => webpack --progress -p 
const debug = process.env.NODE_ENV !== "production";
// importaera webpack som ska användas i plugins
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
    // sourcemap skrivs om scriptet inte ska till ./dist dvs. produktion
    devtool: debug ? "inline-sourcemap" : null,
    // JS-fil som ska processas
    entry: "./js/app.js",
    // minifierad fil till ./dist
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
