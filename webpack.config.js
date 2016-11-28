let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: ['./src/index'],
    devtool: 'eval',
    name: 'browser',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: path.join(__dirname, 'src'),
                exclude: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'examples')],
            },
            { test: /\.json($|\?)/, use: 'json-loader' },
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.ts', '.tsx', '.js']
    }
};