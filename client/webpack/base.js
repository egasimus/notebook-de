const { DefinePlugin } = require('webpack')
module.exports = {
  resolve:
    { extensions: [ '.js', '.styl' ] },
  plugins:
    [ new DefinePlugin({'process.env.API_URI': '"http://localhost:5678"' }) ],
  module: {
    rules: [
      {
        test: /\.js\.map$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/preset-react' ],
            plugins: [ '@babel/plugin-proposal-class-properties' ]
          }
        }
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
  },
}

