const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname , '/build'),
        publicPath: '/'
    },
    plugins: [HTMLWebpackPluginConfig,new ExtractTextPlugin('styles.css'),],

    devServer: {
        proxy: [
            {
                context: ['/resource/**'],
                target: 'http://localhost:8080/',
                secure: false
            }
        ]
    }
};