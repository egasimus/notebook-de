const { DefinePlugin, NormalModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = env => ({

  target:
    env.PLATFORM === 'tui' ? 'node' : 'web',

  node:
    { __dirname: true },

  output:
    { filename: `app-${env.PLATFORM}.js`
    , path: resolve(__dirname, 'dist') },

  resolve:
    { extensions: [ '.js', '.mjs', '.styl' ] },

  entry:
    [ 'babel-polyfill', './main' ],

  plugins:
    [ ...(env.PLATFORM === 'web' ? [new HtmlWebpackPlugin({ inject: true })] : [])
    , new DefinePlugin({'process.env.API_URI': '"http://localhost:5678"' })
    , new NormalModuleReplacementPlugin(/^\$PLATFORM\/(.+)$/, resource=>{
        const newRequest = resolve(
          __dirname, 'platform', env.PLATFORM,
          resource.request.slice('$PLATFORM/'.length))
        console.debug(resource.request, '+', env.PLATFORM, '=>', newRequest)
        resource.request = newRequest + '.js' }) ],

  module: {
    rules: [

      { test:   /\.js\.map$/
      , loader: 'ignore-loader' },

      { test:   /\.node$/
      , loader: 'node-loader' },

      { test:    /\.m?js$/,
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

