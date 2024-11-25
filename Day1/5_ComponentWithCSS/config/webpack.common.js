const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env) {
    const isEnvDevelopment = env === 'dev';
    const isEnvProduction = env === 'prod';

    return {
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
                    test: /\.(css)$/,
                    use: [
                        isEnvDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|bmp|gif|jpe?g|png)$/,
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: "static/media/[name].[ext]"
                    }
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
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                "window.jQuery": 'jquery'
            }),
            isEnvProduction && new MiniCssExtractPlugin({
                filename: 'static/css/[name].[hash].css',
                chunkFilename: 'static/css/[name].[hash].chunk.css'
            })
        ].filter(Boolean),

        optimization: {
            splitChunks: {
                chunks: "all"
            }
        }
    };
}