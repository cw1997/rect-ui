const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const tsImportPluginFactory = require("ts-import-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const webpackConfig = {
    entry: {
        index: './demo/Index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].min.js',
        library: 'rect-ui',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [ {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
            options: {
                transpileOnly: true,
                // getCustomTransformers: () => ({
                //     before: [tsImportPluginFactory({
                //         libraryName: "rect-ui",
                //         libraryDirectory: "demo",
                //         style: true,
                //     })],
                // }),
                compilerOptions: {
                    module: "es2015",
                },
            },
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                    loader: "css-loader",
            }, ],
            exclude: /node_modules/,
        }, {
            test: /\.less$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                    loader: "css-loader",
            }, {
                loader: "less-loader",
            }, ],
        }, {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',
            }, {
                loader: 'sass-loader'
            }, ],
            exclude: /node_modules/
        }, {
            test: /\.sass$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',
            }, {
                loader: 'sass-loader'
            }, ],
            exclude: /node_modules/
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "rect-ui test page",
            template: path.resolve(__dirname, "demo/index.html"),
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: "[id]-[hash].css",
            // chunkFilename: "[id].[hash].css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new ErrorOverlayPlugin()
    ],
    devServer: {
        contentBase: "./dist",
        host: "0.0.0.0",
    },
};

module.exports = webpackConfig;
