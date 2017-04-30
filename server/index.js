const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/'
}));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../index.html')); //TODO fix path
});

require('./routes')(app);

app.listen(8080, function () {
    console.log('Listening on port 8080');
});
