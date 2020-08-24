const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const webpackConfig = {
    entry: {
        index: './index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].min.js',
        library: 'rect-ui',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [ {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: '/node_modules/',
        }, {
            test: /\.(j|t)sx?$/,
            use: [{
                    loader: 'babel-loader'
                    // loader: 'ts-loader'
            }, ],
            exclude: '/node_modules/',
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                    loader: "css-loader",
            }, ],
            exclude: '/node_modules/',
        }, {
            test: /\.less$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                    loader: "css-loader",
            }, {
                    loader: "postcss-loader",
            }, {
                loader: "less-loader",
            }, ],
            exclude: '/node_modules/',
        }, {
            test: /\.s[ca]ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',
            }, {
                loader: 'postcss-loader',
            }, {
                loader: 'sass-loader'
            }, ],
            exclude: '/node_modules/',
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    //1024 == 1kb, pack to base64 inline url if size <- 10240 bytes
                    limit: 10240,
                    name: path.join('img/[name].[hash:7].[ext]')
                },
            }, ],
            exclude: '/node_modules/',
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: path.join('font/[name].[hash:7].[ext]')
                },
            }, ],
            exclude: '/node_modules/',
        } ,],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'demo/index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: "[id].[hash].min.css",
            chunkFilename: "[id].[hash].min.css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new ErrorOverlayPlugin(),
    ],
    devtool: 'cheap-module-source-map', // 'eval' is not supported by error-overlay-webpack-plugin
    // devtool: 'eval', // 'eval' is not supported by error-overlay-webpack-plugin
    devServer: {
        contentBase: "./dist",
        host: "0.0.0.0",
        port: 3000,
        historyApiFallback: true,
        overlay: {
            errors: true
        },
        inline: true,
        hot: true,
        // compress: true,
    },
};

module.exports = webpackConfig;
