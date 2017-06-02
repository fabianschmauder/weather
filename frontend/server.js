const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const path = require("path");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(8000, 'localhost', function (error) {
        if (error) {
            return console.log(error);
        }
        console.log('Server running at http://localhost:8000/');
    });
