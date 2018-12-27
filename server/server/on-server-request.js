const { fork } = require('child_process')
module.exports = (state, request, response) => {
  response.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  if (request.method === 'GET') {
    console.log(state.children)
    response.write(
      JSON.stringify(
        Object.keys(state.children).reduce((acc, port)=>
          ({ ...acc, [port]: state.children[port].spawnargs[3] }), {})))
    response.end()
  } else if (request.method === 'POST') {
    let buffer = ''
    request.on('data', data => buffer += data)
    request.on('end', () => {
      require('freeport')((err, port) => {
        state.children[port] = fork('wrapper', [ port, buffer ])
        state.children[port].once('message', () => {
          response.write(String(port))
          response.end() }) }) }) } }
