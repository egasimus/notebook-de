module.exports = { wrap }

function wrap (cb) {
  require('freeport')((err, port)=>{
    const server = require('..')(port)
    server.server.once('listening', ()=>cb(server, port))
  })
}
