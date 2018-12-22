const { fork } = require('child_process')
module.exports = (state, request, response) => {
  let buffer = ''
  request.on('data', data => buffer += data)
  request.on('end', () => {
    require('freeport')((err, port) => {
      state.children[port] = fork('wrapper', [ port, buffer ])
      response.writeHead(200)
      response.write(String(port))
      response.end() }) }) }
