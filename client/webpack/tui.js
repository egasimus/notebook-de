const { resolve } = require('path')
const { DefinePlugin, NormalModuleReplacementPlugin } = require('webpack')
module.exports = require('webpack-merge')(require('./base'),
  { entry:
      './main.js'
  , plugins:
      [ new DefinePlugin(
          { 'document': '{}'
          , 'process.env.NODE_ENV': process.env.NODE_ENV })
      , new NormalModuleReplacementPlugin(/^platform$/, './platform/tui.js') ]
  , output:
      { path: resolve(__dirname, '..', 'dist')
      , filename: 'app-tui.js' } })

