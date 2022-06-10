const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    static: './docs',
    port: 9090,
  },

  module: {
    rules: [

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },

});