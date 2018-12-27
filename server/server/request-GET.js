module.exports = (state, request, response) => {
  response.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  response.write(
    JSON.stringify(
      Object.keys(state.children).reduce((acc, port)=>
        ({ ...acc, [port]:
          { command:  state.children[port].command
          , pid:      state.children[port].pid
          , exitCode: state.children[port].exitCode
          , exitSig:  state.children[port].exitSig } }), {})))
  response.end() }
