module.exports = Server

if (require.main === module) {
  const address = process.argv[2]
  module.exports(address)
}

function Server (address) {

  const server = require('http').createServer()

  const Launch = (...args) => require('./launch')(current, ...args)
  Launch.socket = require('nanomsg').socket('rep')
  Launch.socket.bind(address)
  Launch.socket.on('data', buf=>require('./on-req')(buf))

}
