const { NormalModuleReplacementPlugin } = require('webpack')
const HtmlWebpack = require('html-webpack-plugin')
module.exports = require('webpack-merge')(require('./base'),
  { entry:
      './main.js'
  , plugins:
      [ new HtmlWebpack({ inject: true })
      , new NormalModuleReplacementPlugin(/platform$/, './platform/web.js') ] })
