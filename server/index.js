module.exports = Server

if (require.main === module) {
  const address = process.argv[2]
  module.exports(address) }

function Server (address) {
  const state = {
    server: require('http').createServer(),
    children: {} }
  state['on-request'] = (...args) => require('./on-request')(state, ...args)
  state.server.on('request', (...args) => state['on-request'](...args))
  state.server.listen(address, '127.0.0.1')
  return state }
