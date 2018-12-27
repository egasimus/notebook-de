require('../hot')

module.exports = Launch

if (require.main === module) {
  const port = process.argv[2]
  const command = process.argv.slice(3).join(' ')
  module.exports(port, command)
}

function Launch (port, command) {

  const WebSocketServer = require('ws').Server

  const state =
    { started: false
    , cache: []
    , port
    , command
    , sockets: new WebSocketServer(
        { clientTracking: true
        , host: '127.0.0.1'
        , port
        , headers: { 'Access-Control-Allow-Origin': '*' } }) }

  require('../methods')(require, state,
    [ 'debug'
    , 'stop' ])

  require('../events')(require, state, 'sockets',
    [ 'close'
    , 'connection'
    , 'error'
    , 'headers'
    , 'listening' ])

  return state

}
