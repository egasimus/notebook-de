const { fork } = require('child_process')
module.exports = (state, request, response) => {
  let buffer = ''
  request.on('data', data => buffer += data)
  request.on('end', () => {
    require('freeport')((err, port) => {
      state.children[port] = fork('wrapper', [ port, buffer ])
      state.children[port].once('message', () => {
        response.writeHead(200, {'Access-Control-Allow-Origin': '*'})
        response.write(String(port))
        response.end() }) }) }) }
