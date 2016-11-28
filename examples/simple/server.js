const path = require('path');
const express = require('express');
const url = require('url');
const webpack = require('webpack');
const app = express();

const webpackDevConfig = require('./webpack/webpack.config.dev');
const compiler = webpack(webpackDevConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server started on 3000');
});