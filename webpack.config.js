// https://stackoverflow.com/questions/46224986/how-to-pass-env-file-variables-to-webpack-config
var dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const webpack = require('webpack');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        path: path.resolve(__dirname, '_site/assets'),
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            // "process.env": JSON.stringify(dotenv.parsed)
            "process.env": JSON.stringify(process.env)
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        }]
    }
};