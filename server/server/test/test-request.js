const { wrap } = require('./helpers')

module.exports = ({ is, end }) => wrap((state, port)=>{

  const options =
    { method: 'POST'
    , hostname: 'localhost'
    , port }

  const command = 'ls'

  const request = require('http').request(options, callback)
  request.write(command)
  request.end()

  function callback (response) {
    let buffer = ''
    response.on('data', data => buffer += data)
    response.on('end', () => {
      const child = state.children[buffer]
      is(child.spawnargs[3], command)
      child.kill()
      state.server.close(()=>{ end() })
    })
  }

})
