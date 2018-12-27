require('../hot')

module.exports = Server

if (require.main === module) {
  const port = process.argv[2]
  module.exports(port) }

function Server (port) {

  const state = {
    server: require('http').createServer(),
    children: {} }

  require('../events')(require, state, 'server',
    [ 'listening'
    , 'request' ])

  state.server.listen(port, '127.0.0.1')

  return state }
