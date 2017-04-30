module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
      loaders: [
          {
              test: /.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'react']
              }
          },
          {
              test: /\.less$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "less-loader" // compiles Less to CSS
              }]
          }
      ]
  },
};
