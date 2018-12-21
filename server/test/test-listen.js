const { wrap } = require('./helpers')
module.exports = ({ is, end }) =>
  wrap((server, _port)=>{
    const { address, family, port } = server.server.address()
    is(address, '127.0.0.1')
    is(family, 'IPv4')
    is(port, _port)
    server.server.close(()=>{ end() }) })
