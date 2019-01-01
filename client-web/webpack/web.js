const HtmlWebpack = require('html-webpack-plugin')
module.exports = require('webpack-merge')(require('./base'), {
  entry: './main-web.js',
  plugins: [ new HtmlWebpack({ inject: true }) ] })
