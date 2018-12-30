const { fork } = require('child_process')

module.exports = (state, request, response) => {
  response.writeHead(200,
    { 'Access-Control-Allow-Origin': '*'
    , 'Content-Type': 'application/json' })
  let command = ''
  request.on('data', data => command += data)
  request.on('end', () => { require('freeport')((err, port) => {
    const child = state.children[port] = require('../wrapper')(port, command)
    const onSocketsListening = child['on-sockets-listening']
    child['on-sockets-listening'] = (...args) => {
      onSocketsListening(...args)
      const { pid } = child
      response.write(JSON.stringify({ port, pid }))
      response.end() } }) }) }
