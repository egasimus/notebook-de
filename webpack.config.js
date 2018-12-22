const HtmlWebpack = require('html-webpack-plugin')

module.exports = {

  entry: './index.js',

  resolve: { extensions: [ '.js', '.styl' ] },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.styl$/,
        use: [ 'style-loader', 'css-loader', 'stylus-loader' ]
      }
    ]
  },

  plugins: [
    new HtmlWebpack({ inject: true })
  ]

}
