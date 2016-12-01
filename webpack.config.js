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
    externals: [{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }, {
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: path.join(__dirname, 'src'),
                exclude: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'examples')],
            },
            { test: /\.json($|\?)/, use: 'json-loader' },
            { test: /\.scss$/, loader: [
                {
                    loader: 'style'
                },
                {
                    loader: 'css',
                    query: {
                        modules: true,
                        camelCase: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]__[hash:base64:7]',
                    },
                },
                {
                    loader: 'sass',
                }
            ]},
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'src'),
        ],
        extensions: ['.ts', '.tsx', '.js', '.scss']
    }
};