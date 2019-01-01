const { DefinePlugin } = require('webpack')
module.exports = require('webpack-merge')(require('./base'), {
  entry: './main-gtk.js',
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV,
        DEBUG_REACT_GTK: '1' } }) ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js' } })

