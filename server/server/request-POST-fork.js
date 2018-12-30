const { fork } = require('child_process')

module.exports = (state, request, response) => {
  response.writeHead(200,
    { 'Access-Control-Allow-Origin': '*'
    , 'Content-Type': 'application/json' })
  let buffer = ''
  request.on('data', data => buffer += data)
  request.on('end', () => { require('freeport')((err, port) => {
    state.children[port] = fork('wrapper', [ port, buffer ])
    state.children[port].once('message', () => {
      response.write(
        JSON.stringify(
          { port
          , pid: state.children[port].pid }))
      response.end() }) }) }) }
