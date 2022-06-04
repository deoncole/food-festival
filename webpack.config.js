const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// add the path for webpack
const path = require("path");

// craete a main configuration object. It needs three properties entry, output, and mode
module.exports = {
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/event.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
    },
    module: {
        rules: [
            {
                test: /\.jpg$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name (file){
                                return "[path][name].[ext]"
                            },
                            publicPath: function(url){
                                return url.replace("../", "/assets/")
                            }
                        }
                    },
                    {
                        loader: "image-webpack-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", //the report outputs to an HTML file in teh dist folder
        })
    ],
    mode: 'development'
};