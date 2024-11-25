const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        polyfills: './polyfills.js',
        vendor: "./vendor.js",
        app: "./src/main.js"
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                            caseSensitive: true,
                            removeAttributeQuotes: false
                        }
                    }
                ]
            },
            {
                test: /\.(ico)$/,
                use: "file-loader?name=[name].[ext]"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",   // Input FileName
            filename: "./index.html"    // Output FileName
        })
    ],

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};