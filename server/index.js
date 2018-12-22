require('../hot')

module.exports = Server

if (require.main === module) {
  const port = process.argv[2]
  module.exports(port) }

function Server (port) {
  const state = {
    server: require('http').createServer(),
    children: {} }
  state['on-request'] = (...args) => require('./on-request')(state, ...args)
  state.server.on('request', (...args) => state['on-request'](...args))
  state.server.on('listening', () => console.debug('listening', port))
  state.server.listen(port, '127.0.0.1')
  return state }
