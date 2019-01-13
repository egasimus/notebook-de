const { DefinePlugin, NormalModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = env => ({

  resolve:
    { extensions: [ '.js', '.styl' ] },

  entry:
    './main.js',

  plugins:
    [ ...(env.PLATFORM === 'web' ? [new HtmlWebpackPlugin({ inject: true })] : [])
    , new DefinePlugin({'process.env.API_URI': '"http://localhost:5678"' })
    , new NormalModuleReplacementPlugin(/^\$PLATFORM\/(.+)$/, resource=>{
        console.log(resource.request, env.PLATFORM)
        const newRequest = resolve(
          __dirname, '..', 'platform', env.PLATFORM,
          resource.request.slice('$PLATFORM/'.length))
        console.debug(resource.request, '=>', newRequest)
        resource.request = newRequest }) ],

  module: {
    rules: [

      { test:   /\.js\.map$/
      , loader: 'ignore-loader' },

      { test:    /\.js$/,
        exclude: /node_modules/,
        use:
        { loader: 'babel-loader'
        , options:
          { presets: [ '@babel/preset-env', '@babel/preset-react' ]
          , plugins: [ '@babel/plugin-proposal-class-properties' ] } } },

      { test: /\.css$/
      , use:  [ 'style-loader', 'css-loader' ] },

      { test: /\.styl$/
      , use:  [ 'style-loader', 'css-loader', 'stylus-loader' ] }

    ]
  }

})

