const { resolve } = require('path')
const { DefinePlugin, NormalModuleReplacementPlugin } = require('webpack')
module.exports = require('webpack-merge')(require('./base'),
  { entry:
      './main-gtk.js'
  , plugins:
      [ new DefinePlugin(
          { 'document': '{}'
          , 'process.env.NODE_ENV': process.env.NODE_ENV
          , 'process.env.DEBUG_REACT_GTK': '1' })
      , new NormalModuleReplacementPlugin(/platform$/, './platform/gtk.js') ]
  , output:
      { path: resolve(__dirname, '..', 'dist')
      , filename: 'app.js' } })
