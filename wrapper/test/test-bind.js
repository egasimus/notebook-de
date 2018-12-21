const { wrap } = require('./helpers')

module.exports = ({ is, end }) =>
  wrap('ls', (wrapper, port)=>{
    const address = wrapper.sockets.address()
    console.log(wrapper.sockets.address())
    is(address.address, '127.0.0.1')
    is(address.family, 'IPv4')
    is(address.port, port)
    wrapper.stop()
    end() })
