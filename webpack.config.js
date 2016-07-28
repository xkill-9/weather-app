/* eslint-disable */
var wepack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src')

var config = {
  entry: APP_DIR + '/index.jsx',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: APP_DIR + '/index.html'
    })
  ],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.[hash].js'
  }
};

module.exports = config;
