var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'babel-polyfill',
        'eventsource-polyfill',
        './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        modules: [
            'app',
            'node_modules'
        ],
        extensions: [ '.json', '.js' ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: [ 'babel-loader' ],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css/,
                loader: 'css-loader'
            }
        ]
    }
};