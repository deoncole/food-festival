// add the path for webpack
const path = require("path");
const webpack = require("webpack");

// craete a main configuration object. It needs three properties entry, output, and mode
module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery"
        }),
    ],
    mode: 'development'
};