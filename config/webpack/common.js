const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const alias = require('../alias')

module.exports = {
    context: path.resolve(__dirname, '../../src'),
    entry: {
        app: './index.js'
    },
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, '../../build')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './document/index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `[name].css`
        })
    ],
    module: {
        rules: [
            {
                test: /\.js(x)?/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                exportLocalsConvention: 'camelCase',
                                localIdentName: '[name]__[local]_[hash:base64:5]',
                                mode: 'local'
                            },
                        },
                    }, 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true
                        }
                    }
                ]
            }
        ]
    }
}