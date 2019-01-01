module.exports = {
  resolve: { extensions: [ '.js', '.styl' ] },
  module: {
    rules: [
      {
        test: /\.js\.map$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.styl$/,
        use: [ 'style-loader', 'css-loader', 'stylus-loader' ]
      }
    ]
  }
}

